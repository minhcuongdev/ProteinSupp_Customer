import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './BigDealStyles'
import GiftCard from 'src/components/Card/GiftCard'
import bigDeal from "src/assets/images/bigDeal.jpg"

const bigDealDummy = [{
  id: 0,
  title: "Official deal from 10%",
  desc: "Many unique deal from 10% and voucher from 20%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: true
},{
  id: 1,
  title: "Official deal from 20%",
  desc: "Many unique deal from 20% and voucher from 30%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: true
},{
  id: 2,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: false
},{
  id: 3,
  title: "Official deal from 40%",
  desc: "Many unique deal from 40% and voucher from 60%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: false
},{
  id: 4,
  title: "Official deal from 40%",
  desc: "Many unique deal from 40%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: true
},{
  id: 5,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: false
},{
  id: 6,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: bigDeal,
  viewed: true
},]

const BigDeal = () => {

  const renderItem = ({item}) => <GiftCard title={item.title} desc={item.desc} date={item.date} uriImage={item.uriImage} viewed={item.viewed} />

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