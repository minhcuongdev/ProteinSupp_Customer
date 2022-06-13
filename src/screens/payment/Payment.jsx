import { View, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import MyText from 'src/components/MyText/MyText'
import styles from './PaymentStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import SmallButton from 'src/components/SmallButton/SmallButton'
import Color from 'src/constants/Color';
import { useNavigation } from '@react-navigation/native';

import CashCard from 'src/assets/images/cashCard.png'
import MasterCard from 'src/assets/images/masterCard.png'
import VisaCard from 'src/assets/images/visaCard.png'
import DiscountButton from 'src/components/DiscountButton/DiscountButton';
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton';
import MyDialog, { MyDialogLoading } from 'src/components/MyDialog/MyDialog';

import { useDispatch, useSelector } from 'react-redux';
import { FormatBirthday, FormatMoney } from 'src/utils/Calculator';
import billApi from 'src/apis/billApi';
import { setSnackBar } from 'src/redux/slices/snackBarSlice';
import { setOneBill } from 'src/redux/slices/billSlice';
import { clearCart } from 'src/redux/slices/cartSlice';
import addressApi from 'src/apis/addressApi';
import { setAddresses } from 'src/redux/slices/addressSlice';

const Payment = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const addressDefault = useSelector(state=> state.address.addressDefault)
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const [loading,setLoading] = useState(false)

  const [masterCard, setMasterCard] = useState(true)
  const [visaCard,setVisaCard] = useState(false)
  const [cash,setCash] = useState(false)

  const toggleDialog = () => {
    setIsVisibleDialog(!isVisibleDialog);
  };

  const user = useSelector(state => state.account.account)
  const totalMoney = useSelector(state => state.cart.totalMoney)
  const productInCart = useSelector(state => state.cart.productInCart)
  const productChecked = productInCart.filter(product => product.checked)

  const callApiPayment = async (payload) => {
    setLoading(true)
    try {
      const response = await billApi.createBill(payload)
      dispatch(setOneBill(response))
      toggleDialog()
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    } finally {
      setLoading(false)
    }
  }

  const callApiAddress = async () => {
    try {
      const addresses = await addressApi.getAllAddress();
      dispatch(setAddresses(addresses))
    } catch (error) {
      dispatch(setSnackBar({
        open: true,
        title: error.response.data
      }))
    }
  }

  useEffect(() => {
    callApiAddress()
  }, [])

  const payProduct = () => {
    const day = new Date().getUTCDate();
    const month = new Date().getUTCMonth();
    const year = new Date().getUTCFullYear();
    const dateOrder = FormatBirthday(day, month, year)
    const dateReceive = FormatBirthday(day + 2, month, year)
    const orderUser = user.username;
    const phoneOrderUser = user.phoneNo;
    const payment = masterCard ? "master card" : visaCard ? "visa card" : "cash"
    const receivedUser = addressDefault.nameReceivedUser
    const phoneReceivedUser = addressDefault.numberPhone
    const address = addressDefault.address

    const products = []
    productChecked.map(p => {
      const pr = {
        productId: p._id,
        nameProduct: p.name,
        priceProduct: p.price,
        imageProduct: p.imageProduct,
        quality: p.quality
      }
      products.push(pr)
    })
    
    const totalPrice = totalMoney + 25000

    const payload = {
      orderUser: orderUser,
      phoneOrderUser: phoneOrderUser,
      receivedUser: receivedUser,
      phoneReceivedUser: phoneReceivedUser,
      address: address,
      dateOrder: dateOrder,
      dateReceive: dateReceive,
      products: products,
      totalPrice: totalPrice,
      payment: payment
    }

    callApiPayment(payload)
  }

  const onChangePaymentMethod = (type) => {
    setMasterCard(false)
    setVisaCard(false)
    setCash(false)

    switch (type) {
      case 0:
        setMasterCard(true)
        break;
      case 1:
        setVisaCard(true)
        break;
        case 2: 
        setCash(true)
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <MyText title={"Address"} variant="h1" style={styles.addressText} />
        <SmallButton label={"Change"} onTap={() => navigation.navigate("Address")} />
      </View>
      <AddressCard title={`${addressDefault?.nameReceivedUser || ""} ${addressDefault?.numberPhone|| ""}`} address={addressDefault?.address || ""} />
      <MyText title={"Payment Method"} variant="h1" style={styles.addressText} />
      <View style={styles.methodPaymentContainer}>
        <Pressable onPress={() => onChangePaymentMethod(0)}>
          <MethodButton sourceImage={MasterCard} isActive={masterCard} />
        </Pressable>
        <Pressable onPress={() => onChangePaymentMethod(1)}>
          <MethodButton sourceImage={VisaCard} isActive={visaCard} />
        </Pressable>
        <Pressable onPress={() => onChangePaymentMethod(2)}>
          <MethodButton sourceImage={CashCard} isActive={cash} />
        </Pressable>
      </View>
      <View style={styles.discountContainer}>
        <DiscountButton title={"Enter your code discount"} onPressButton={() => {}} />
      </View>
      <View style={styles.billWrapper}>
        <View style={styles.billItem}>
          <MyText title={"Sub Total"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={`${FormatMoney(totalMoney)} đ`} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.billItem}>
          <MyText title={"Shipping"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={"25.000 đ"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.billItem}>
          <MyText title={"Discount"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={"0 đ"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.billItem}>
          <MyText title={"Total"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={`${FormatMoney(totalMoney + 25000)} đ`} variant="h1" color={Color.PRIMARY_RED_COLOR} style={{ fontSize: 16 }} />
        </View>
      </View>
      <PrimaryButton disable={addressDefault === undefined ? true : false} title={"Pay now"} handleOnPress={() => payProduct()} />
      <MyDialog content={"Your payment process has been successfully!"} titleButton={"Got it"} isVisibleDialog={isVisibleDialog} handleOnPress={() => {
        toggleDialog()
        dispatch(clearCart())
        navigation.goBack()
      }} />
      <MyDialogLoading isVisible={loading} />
    </View>
  )
}

export default Payment

const MethodButton = ({ sourceImage, isActive }) => {
  return (
    <View style={[styles.methodButtonContainer, { borderColor: isActive ? Color.PRIMARY_YELLOW_COLOR : Color.WHITE }]}>
      <Image resizeMode="contain" source={sourceImage} style={styles.image} />
    </View>
  )
}

const AddressCard = ({title, address}) => {
  return (
    <View style={styles.addressCardContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="map-marked-alt" size={50} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.textAddressCardWrapper}>
        <MyText numberOfLines={2} title={title} variant="h1" style={styles.textTitleAddressCard} />
        <MyText numberOfLines={2} title={address} variant="h3" style={styles.textAddressCard} />
      </View>
    </View>
  )
}