import { View, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import MyText from 'src/components/MyText/MyText';
import Color from 'src/constants/Color';
import CommentProduct from 'src/components/comment/CommentProduct';

import styles from './FeadbackStyles'

const commentDummy = [{
  id: 0,
  nameUser: "Quynh Ton",
  uriAvatar: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg",
  comment: "The quality that goes into this product is what landed it as our number protein pick. Using pure whey isolate also makes this protein far easier on your stomach to digest, no more bloating or gas.",
}, {
  id: 1,
  nameUser: "Quynh Ton",
  uriAvatar: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg",
  comment: "The quality that goes into this product is what landed it as our number protein pick. Using pure whey isolate also makes this protein far easier on your stomach to digest, no more bloating or gas.",
}, {
  id: 2,
  nameUser: "Quynh Ton",
  uriAvatar: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg",
  comment: "The quality that goes into this product is what landed it as our number protein pick. Using pure whey isolate also makes this protein far easier on your stomach to digest, no more bloating or gas.",
}, {
  id: 3,
  nameUser: "Quynh Ton",
  uriAvatar: "https://i.ibb.co/sy1zLNy/Khanh-Quynh.jpg",
  comment: "The quality that goes into this product is what landed it as our number protein pick. Using pure whey isolate also makes this protein far easier on your stomach to digest, no more bloating or gas.",
}]

const Feedback = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.starWrapper}>
        <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
        <MyText title={"5/5"} variant="h2" style={{ marginLeft: 10 }} color={Color.PRIMARY_RED_COLOR} />
      </View>
      {commentDummy.map((item) => <CommentProduct key={item.id} nameUser={item.nameUser} uriAvatar={item.uriAvatar} comment={item.comment} />)}
      <View style={styles.noSeeMoreContainer}>
        <MyText title={"No feedback anymore"} color={Color.PRIMARY_YELLOW_COLOR} variant="h1" style={styles.text} />
      </View>
      <View style={styles.spacing}></View>
    </ScrollView>
  )
}

export default Feedback