import { View, Text ,ImageBackground } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const Index = () => {
  return (
    
    <View style={{flex: 1}}>
      <StatusBar style='light'/>
     < ImageBackground source={require("../assets/images/image1.png")} style={{width: '100%', height: '100%', flex: 1}} resizeMode='cover'>


    <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal:30}}>
     <Text style={{ fontSize:20,
      color:'gray',
      marginTop: 70,
      marginLeft:340,
     }} onPress={() => {
      router.push('/onBoard02')
     }}>
      Skip
     </Text>
     
     <Text style= {{fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      color:  'white',
      marginTop:600,
      fontFamily:'Poppins',
    }}>BEST BOOKING APP</Text>
    <Text style={{
      fontSize: 20,
      color:  'gray',
      textAlign: 'center',
      }}>
    Explore The Best Booking App To Meet The ExtraOrdinary 
    </Text>
    </View>
     </ImageBackground>
    </View>
  )
}

export default Index