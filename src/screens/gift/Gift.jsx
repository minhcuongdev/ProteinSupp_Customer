import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './GiftStyles'
import GiftCard from 'src/components/Card/GiftCard'
import gift from 'src/assets/images/gift.jpg'

const bigDealDummy = [{
  id: 0,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: true,
},{
  id: 1,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: true,
},{
  id: 2,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: true,
},{
  id: 3,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: true,
},{
  id: 4,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: false,
},{
  id: 5,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: false,
},{
  id: 6,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: true,
},{
  id: 7,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: true,
},{
  id: 8,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: false,
},{
  id: 9,
  title: "Official deal from 30%",
  desc: "Many unique deal from 30% and voucher from 50%. Let’s hunt sale!",
  date: "08:22 05-04-2022",
  uriImage: gift,
  viewed: false,
},]

const Gift = () => {

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

export default Gift