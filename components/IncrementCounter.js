import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const IncrementCounter = () => {

    const [age, setAge] = useState(23);

    const increment = (n) => {
        setAge(a => a+n);
    }

  return (
    <View>
      <Text style = {{fontSize: 24, fontStyle: 'bold'}}>
        Your age: {age}
        
      </Text>
      
      <Button
        title = '+1'
        onPress={() => {increment(3)}}
      />

      <Button
        title = '+1'
        onPress={() => {increment(1)}}
      />
    </View>
  )
}

export default IncrementCounter
