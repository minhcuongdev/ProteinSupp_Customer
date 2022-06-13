import React, {useState, useEffect, useCallback} from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './ChatStyles';
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 Yes',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      }
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])  

  const onQuickReply = (quickReplies) => {

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