import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import styles from './AddressStyles'
import AddressCard from 'src/components/Card/AddressCard'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

const Address = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.addressItems}>
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <View style={styles.spacing}></View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={"Add new +"} handleOnPress={() => console.log("Add new address")} />
      </View>
    </View>
  )
}

export default Address