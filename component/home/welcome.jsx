import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS } from '../../constant'

const welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText(COLORS.black)}>
        Find The Most
      </Text>
      <Text style={styles.welcomeText(COLORS.black)}>
        Find The Most
      </Text>
    </View>
  )
}

export default welcome