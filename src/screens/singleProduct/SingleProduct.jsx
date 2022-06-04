import { View, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './SingleProductStyles'
import productDefaultImage from 'src/assets/images/productDefaultImage.png'
import MyText from 'src/components/MyText/MyText'
import { Entypo } from '@expo/vector-icons';
import Color from 'src/constants/Color'
import Counter from 'src/components/Counter/Counter'
import SmallButton from 'src/components/SmallButton/SmallButton'
import CommentProduct from 'src/components/comment/CommentProduct'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getProductById } from 'src/redux/slices/productSlice'
import { FormatMoney } from 'src/utils/Calculator'
import { addProductToCart } from 'src/redux/slices/cartSlice'

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
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)
  const { productId } = useRoute().params
  const [quality, setQuality] = useState(1)

  const handleIncreaseQuality = () => {
    setQuality(prev => prev += 1)
  }

  const handleDecreaseQuality = () => {
    setQuality(prev => prev -= 1)
  }

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {product?.imageProduct  ?
          <Image source={{uri: product.imageProduct}} resizeMode="contain" style={styles.image} /> :
          <Image source={productDefaultImage} resizeMode="contain" style={styles.image} />}
        <View style={styles.priceAndRateProduct}>
          <View style={styles.rateStar}>
            <Entypo name="star" size={24} color={Color.PRIMARY_YELLOW_COLOR} />
            <MyText title={"4.8"} variant="h2" />
          </View>
          <MyText title={`${FormatMoney(product.price)} đ`} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.productContainer}>
          <View style={styles.title}>
            <MyText title={product.name} numberOfLines={2} style={styles.textTitle} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} />
            <Counter counter={quality} actionIncrease={handleIncreaseQuality} actionDecrease={handleDecreaseQuality} />
          </View>
          <MyText
            title={product.description}
            variant="h4"
            color={Color.NEUTRAL_01}
            style={styles.text}
            numberOfLines={3}
          />
          <View style={styles.description}>
            <MyText title={"Description"} variant="h1" color={Color.PRIMARY_YELLOW_COLOR} style={{ textAlign: "left" }} />
            <View style={styles.textWrapper}>
              <MyText title={"Product ID"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={product.productId} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
            <View style={styles.textWrapper}>
              <MyText title={"Manufacturer"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={product.manufacturer} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
            <View style={styles.textWrapper}>
              <MyText title={"Origin"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={product.origin} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
            </View>
            <View style={styles.textWrapper}>
              <MyText title={"Manudactuer Price"} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
              <MyText title={`${product.manufacturerPrice} đ`} color={Color.NEUTRAL_01} variant="h4" style={styles.text} />
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
        <PrimaryButton title={"Add to Cart"} handleOnPress={() => {dispatch(addProductToCart({...product, checked: false, quality: quality})); setQuality(1)}} />
      </View>
    </View>
  )
}

export default SingleProduct
