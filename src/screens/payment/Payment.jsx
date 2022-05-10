import { View, Image, Text } from 'react-native'
import React, { useState } from 'react'
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
import MyDialog from 'src/components/MyDialog/MyDialog';

const Payment = () => {
  const navigation = useNavigation()
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const toggleDialog = () => {
    setIsVisibleDialog(!isVisibleDialog);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <MyText title={"Address"} variant="h1" style={styles.addressText} />
        <SmallButton label={"Change"} onTap={() => navigation.navigate("Address")} />
      </View>
      <AddressCard />
      <MyText title={"Payment Method"} variant="h1" style={styles.addressText} />
      <View style={styles.methodPaymentContainer}>
        {/* Should ues flat list there so that handle active button */}
        <MethodButton sourceImage={MasterCard} isActive={true} />
        <MethodButton sourceImage={VisaCard} isActive={false} />
        <MethodButton sourceImage={CashCard} isActive={false} />
      </View>
      <View style={styles.discountContainer}>
        <DiscountButton title={"Enter your code discount"} />
      </View>
      <View style={styles.billWrapper}>
        <View style={styles.billItem}>
          <MyText title={"Sub Total"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={"5.250.000 đ"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.billItem}>
          <MyText title={"Shipping"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={"25.000 đ"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.billItem}>
          <MyText title={"Discount"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={"-15.000 đ"} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.billItem}>
          <MyText title={"Total"} variant="h3" color={Color.NEUTRAL_03} />
          <MyText title={"5.260.000 đ"} variant="h1" color={Color.PRIMARY_RED_COLOR} style={{ fontSize: 16 }} />
        </View>
      </View>
      <PrimaryButton title={"Pay now"} handleOnPress={() => toggleDialog()} />
      <MyDialog content={"Your payment process has been successfully!"} titleButton={"Got it"} isVisibleDialog={isVisibleDialog} handleOnPress={() => { 
        toggleDialog()
        navigation.goBack()
      }} />
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

const AddressCard = () => {
  return (
    <View style={styles.addressCardContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="map-marked-alt" size={50} color={Color.PRIMARY_YELLOW_COLOR} />
      </View>
      <View style={styles.textAddressCardWrapper}>
        <MyText title={"My Home"} variant="h1" style={styles.textTitleAddressCard} />
        <MyText numberOfLines={2} title={"KTX khu B, ĐHQG-HCM, khu pho 6, Linh Trung, Thu Duc."} variant="h3" style={styles.textAddressCard} />
      </View>
    </View>
  )
}