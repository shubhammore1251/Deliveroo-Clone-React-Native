import { Text } from 'react-native'
import React from 'react'

const weightMap = {
  '400': 'Poppins',
  '500': 'PoppinsMedium',
  '600': 'PoppinsSemiBold',
  '700': 'PoppinsBold',
  '800': 'PoppinsBold',
  '900': 'PoppinsExtraBold',
  normal: 'Poppins',
  bold: 'PoppinsBold',
}

export default function AppText({ style = {}, ...rest }) {
  const flat = Array.isArray(style) ? Object.assign({}, ...style) : style || {}
  const fam = weightMap[flat.fontWeight] || 'Poppins'

    // console.log('applied font:', style,flat, fam)

  return <Text {...rest} style={[style, { fontFamily: fam }]} />
}
