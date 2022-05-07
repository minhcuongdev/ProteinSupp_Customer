import { View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import styles from './SingleProductStyles'
import productImage from 'src/assets/images/product.jpg'
import MyText from 'src/components/MyText/MyText'
import { Entypo } from '@expo/vector-icons';
import Color from 'src/constants/Color'
import Counter from 'src/components/Counter/Counter'
import SmallButton from 'src/components/SmallButton/SmallButton'
import CommentProduct from 'src/components/comment/CommentProduct'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

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

const SingleProduct = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Image source={productImage} resizeMode="contain" style={styles.image} />
        <View style={styles.priceAndRateProduct}>
          <View style={styles.rateStar}>
            <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
            <MyText title={"4.8"} variant="h2" />
          </View>
          <MyText title={"1.750.000đ"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.productContainer}>
          <View style={styles.title}>
            <MyText title={"Labrada Muscle Mass"} numberOfLines={2} style={styles.textTitle} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
            <Counter />
          </View>
          <MyText
            title={"Muscle Mass Gainer cao năng lượng,hỗ trợ tăng cân nhanh, tăng cơ nạc cho người gầy, người khó tăng cân, cần bulking."}
            variant="h4"
            color={Color.NEUTRAL_01}
            style={styles.text}
            numberOfLines={3}
          />
          <View style={styles.description}>
            <MyText title={"Description"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left" }} />
            <View style={styles.textWrapper}>
              <MyText title={"Product ID"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={"MUSCLEMASS"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
            <View style={styles.textWrapper}>
              <MyText title={"Manufacturer"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={"Labrada"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
            <View style={styles.textWrapper}>
              <MyText title={"Origin"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={"United States"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
            <View style={styles.textWrapper}>
              <MyText title={"Manudactuer Price"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={"2.070.000 đ"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
          </View>
          <View style={styles.feedback}>
            <View style={{ height: 70 }}>
              <MyText title={"Feedback"} style={{ textAlign: "left" }} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
              <View style={styles.starWrapper}>
                <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
                <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
                <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
                <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
                <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
                <MyText title={"5/5"} variant="h2" style={{ marginLeft: 10 }} color={Color.PRIMARY_RED_COLOR} />
              </View>
            </View>
            <SmallButton label={"See all"} />
          </View>
          {commentDummy.map((item) => <CommentProduct key={item.id} nameUser={item.nameUser} uriAvatar={item.uriAvatar} comment={item.comment} />)}
        </View>
        <View style={styles.buttonSeeAllContainer}>
          <Pressable
            onPress={() => navigation.navigate("Feedback")}
            style={({ pressed }) => [{
              backgroundColor: pressed
                ? Color.WHITE_ACTIVE
                : Color.WHITE
            },
            styles.buttonSeeAll
            ]}>
            <MyText title={"See all"} variant="h1" style={styles.textSeeAll} color={Color.PRIMARY_RED_COLOR} />
            <Entypo name="chevron-right" size={20} color={Color.PRIMARY_RED_COLOR} />
          </Pressable>
        </View>
        <View style={styles.spacing}></View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={"Add to Cart"} handleOnPress={() => console.log("Add to cart")} />
      </View>
    </View>
  )
}

export default SingleProduct
