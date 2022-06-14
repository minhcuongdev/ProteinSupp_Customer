import React, {useState, useEffect, useCallback} from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './ChatStyles';
import { GiftedChat } from 'react-native-gifted-chat'
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { useDispatch, useSelector } from 'react-redux';
import { DialogflowConfig } from 'src/constants/env';
import { setSnackBar } from 'src/redux/slices/snackBarSlice';

const BOT = {
  _id: 2,
  name: 'Protein Supp',
  avatar: 'https://i.ibb.co/dDbMCdR/producer.jpg',
}

const Chat = () => {
  const user = useSelector(state=>state.account.account)
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: `Hello ${user.username}. Which product do you want to buy ?`,
      createdAt: new Date(),
      user: BOT,
    },
  ]);
  const dispatch = useDispatch()

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      DialogflowConfig.client_email,
      DialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      DialogflowConfig.project_id
    )
  }, [])

  const onSend = (messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => handleGoogleResponse(result),
      (error) => dispatch(setSnackBar({
        open: true,
        title: error
      }))
    )

  }  

  const onQuickReply = (quickReplies) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, quickReplies))

    let message = quickReplies[0].value;

    Dialogflow_V2.requestQuery(
      message,
      (result) => handleGoogleResponse(result),
      (error) => dispatch(setSnackBar({
        open: true,
        title: error
      }))
    )
  }

  const handleGoogleResponse = (result) => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];

    sendBotResponse(text)
  }

  const sendBotResponse = (text) => {
    let msg = {
      _id: messages.length + 1,
      text: text,
      createdAt: new Date(),
      user: BOT
    }

    setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]))  
  }
  return (
    <View style={styles.container}>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      onQuickReply={(quickReplies) => onQuickReply(quickReplies)}
    />
    
    </View>
  )
}

export default Chat