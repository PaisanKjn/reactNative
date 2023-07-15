import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fName1, lName1}) => {
    return(
        <view>
            <Text>Your First Name is {fName1}! and Last name is {lName1} </Text>
        </view>
    )
}

const CustomText = () => {
  return (
    <View>
        <MyCustomTextWith fName1={"Paisan"} lName1={"Kiatjanon"}/>
        <MyCustomTextWith fName1={"Nuttachai"} lName1={"Phusadeekunpaisan"}/>
    </View>
  )
}


export default CustomText