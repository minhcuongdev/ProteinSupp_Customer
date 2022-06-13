import { View } from 'react-native'
import React from 'react'

import { Dialog } from '@rneui/themed';
import styles from './MyDialogStyles'
import MyText from '../MyText/MyText';
import Color from 'src/constants/Color';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export const MyDialogLoading = ({isVisible}) => {
  return(
    <Dialog isVisible={isVisible} >
      <Dialog.Loading />
    </Dialog>
  )
}

const MyDialog = ({content, titleButton,isVisibleDialog, handleOnPress}) => {
  
  return (
    <Dialog
        isVisible={isVisibleDialog}
      >
        <View style={styles.textContainer}>
          <MyText title={content} numberOfLines={2} variant="h2" color={Color.PRIMARY_YELLOW_COLOR} />
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton title={titleButton} style={styles.button} handleOnPress={()  => handleOnPress()} />
        </View>
      </Dialog>
  )
}

export default MyDialog