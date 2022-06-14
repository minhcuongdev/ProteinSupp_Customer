import { View, Text, Image } from 'react-native'
import React from 'react'
import MyText from '../MyText/MyText'
import { Entypo } from '@expo/vector-icons';
import styles from './CommentProductStyles'
import Color from 'src/constants/Color';
import defaultUserImage from 'src/assets/images/default-user-image.png'
const CommentProduct = ({nameUser, uriAvatar, comment, point}) => {
  const stars =  []

  for(let i=0;i<point;i++) {
    stars.push(i)
  }


  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {uriAvatar.length > 0 ?<Image source={{
          uri: uriAvatar
        }} style={styles.avatar} resizeMode="cover" /> : <Image source={defaultUserImage} style={styles.avatar} resizeMode="cover" /> }
        
        <View style={styles.avatarDetailContainer}>
          <MyText title={nameUser} variant="h2" style={styles.nameUser} />
          <View style={styles.starWrapper}>
            {stars.map(star => <Entypo key={star} name="star" size={18} color={Color.PRIMARY_YELLOW_COLOR} />)}
          </View>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <MyText title={comment}
          variant="h3" color={Color.NEUTRAL_02} 
          numberOfLines={10}
          style={styles.text}
        />
      </View>
    </View>
  )
}

export default CommentProduct