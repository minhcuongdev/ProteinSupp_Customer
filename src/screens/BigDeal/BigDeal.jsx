import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './BigDealStyles'
import GiftCard from 'src/components/Card/GiftCard'

const bigDealDummy = [{
  id: 0,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 1,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 2,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 3,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 4,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 5,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 6,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 7,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 8,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},{
  id: 9,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: ""
},]

const BigDeal = () => {

  const renderItem = ({item}) => <GiftCard title={item.title} desc={item.desc} date={item.date} uriImage={item.uriImage} />

  return (
    <View style={styles.container}>
      <FlatList
        data={bigDealDummy}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default BigDeal