import { View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'

import styles from './AddressStyles'
import AddressCard from 'src/components/Card/AddressCard'
import PrimaryButton from 'src/components/PrimaryButton/PrimaryButton'
import addressApi from 'src/apis/addressApi'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { setSnackBar } from 'src/redux/slices/snackBarSlice'
import { setAddresses } from 'src/redux/slices/addressSlice'

const Address = () => {
  const navigation = useNavigation()
  const addresses = useSelector(state => state.address.addresses)

  return (
    <View style={styles.container}>
      {addresses.length > 0 && <FlatList 
        data={addresses}
        renderItem={({item}) => <AddressCard nameUser={item.nameReceivedUser} numberPhone={item.numberPhone} address={item.address} addressId={item._id} addressDefault={item.addressDefault} />}
        keyExtractor={(item) => item._id}
        style={styles.addressItems}
      />}
      
      <View style={styles.buttonContainer}>
        <PrimaryButton title={"Add new +"} handleOnPress={() => navigation.navigate("New Address")} />
      </View>
    </View>
  )
}

export default Address