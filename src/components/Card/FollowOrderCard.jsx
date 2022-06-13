import { View, Pressable } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper'
import MyText from '../MyText/MyText'
import Color from 'src/constants/Color'
import { FormatMoney } from 'src/utils/Calculator'
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import styles from './CardStyles'
import { ProductItem } from './OrderCard'
import { useNavigation } from '@react-navigation/native'

const FollowOrderCard = ({ productsOrders, totalMoney, orderTime, status,billId }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.followOrderCardContainer}>
      <View style={styles.followOrderProductWrapper}>
        {productsOrders.map((productOrder, index) => <ProductItem key={index}
          title={productOrder.nameProduct}
          price={productOrder.priceProduct}
          quality={productOrder.quality}
          uriImage={productOrder.imageProduct}
        />)}
      </View>
      <Divider />
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <View style={styles.followOrderCardTotalMoney}>
          <AntDesign name="clockcircleo" size={18} color={Color.PRIMARY_YELLOW_COLOR} />
          <MyText title={orderTime} variant="h5" color={Color.NEUTRAL_02} style={{ marginLeft: 5 }} />
        </View>
        <View style={[styles.followOrderCardTotalMoney, { marginTop: 5 }]}>
          <MyText title={"Total Money: "} variant="h3" color={Color.NEUTRAL_01} />
          <MyText title={`${FormatMoney(totalMoney)} đ`} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
      </View>
      <Divider />
      <Pressable onPress={() => navigation.navigate("Order Detail",{billId: billId})} style={({pressed}) => [{
        backgroundColor: pressed
        ? Color.WHITE_ACTIVE
        : Color.WHITE
      }, {borderBottomLeftRadius: 10, borderBottomRightRadius: 10}]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="truck-fast" size={28} color={Color.PRIMARY_YELLOW_COLOR} />
            <MyText title={status} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} style={{ marginLeft: 5 }} />
          </View>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </Pressable>
    </View>
  )
}

export default FollowOrderCard