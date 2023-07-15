import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) => {
    return(
        <View>
            <Text>Hello {props.name}</Text>

        </View>
    )
}

const LotsOfGreeting = () => {
  return (
    <View style = {{alignItems:'center', top:50}}>
        <Greeting name= "Merry Chirstmas"/>
        <Greeting name = "Happy New Year"/>
        <Greeting name = "Songkran Festival"/>
    

    </View>
  )
}

export default LotsOfGreeting