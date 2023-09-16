import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation, route}) => {

  // Get the params
  const {itemId, otherParam} = route.params
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Text></Text>
          <Button
          title='Go to details...again'
          onPress={() => navigation.push('Details', {
            itemId: Math.floor(Math.random()*100),
            otherParam: 'AHAHAHA'
          })}
          />
          <Button
          title='Go to home'
          onPress={() => navigation.navigate('Home')}
          />
          <Button
          title='Go back'
          onPress={() => navigation.goBack()}
          />
        </View>
      );
}

export default DetailsScreen