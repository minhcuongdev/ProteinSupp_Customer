import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './AddressStyles'
import AddressCard from 'src/components/Card/AddressCard'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'

import { useNavigation } from '@react-navigation/native'

const addressDummy = [{
  id: 0,
  nameUser: "Quynh Ton",
  numberPhone: "(+84) 905674xxx",
  address: "KTX khu B, ĐHQG-HCM, khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh"
},{
  id: 1,
  nameUser: "Quynh Ton",
  numberPhone: "(+84) 905674xxx",
  address: "KTX khu B, ĐHQG-HCM, khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh"
},{
  id: 2,
  nameUser: "Quynh Ton",
  numberPhone: "(+84) 905674xxx",
  address: "KTX khu B, ĐHQG-HCM, khu pho 6, Linh Trung, Thu Duc, Ho Chi Minh"
}]

const Address = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <FlatList 
        data={addressDummy}
        renderItem={({item}) => <AddressCard nameUser={item.nameUser} numberPhone={item.numberPhone} address={item.address} />}
        keyExtractor={(item) => item.id}
        style={styles.addressItems}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton title={"Add new +"} handleOnPress={() => navigation.navigate("New Address")} />
      </View>
    </View>
  )
}

export default Address