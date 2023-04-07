import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Animated } from 'react-native';
import { styles } from './Styles';

export default function ThirdScreen({navigation}) {
    const [count, setCount] = useState(15000);

    useEffect(()=>{
        const id = setTimeout(() => {
            setCount(prevCount => prevCount+500);
        }, 1);
    
        if(count == 40000){
            clearTimeout(id)
        }
    },[count])

    const navigate = () =>{
        navigation.navigate('FirstScreen')
    }




  return (
    <ImageBackground source={require('../assets/award_bg.png')} style={styles.ImageBackground} >
    <View style={styles.container} >
      <Image source={require('../assets/awardPlatform.png')} style={styles.bottomPlatform} resizeMode='contain' ></Image>
      <Image source={require('../assets/girlClap.png')} style={styles.girlClap} resizeMode='contain'  ></Image>
      <Text style={{...styles.firstCastingText, top:'13%', }} >4 Friends Gave{"\n"} U Some Love</Text>
      <Image source={require('../assets/main-heart.png')} style={{...styles.castingLogo, top:'24%', height:'18%'}} resizeMode='contain'  ></Image>
      <Text style={{...styles.firstCastingText, top:'30%', color:'white' }} >{count}</Text>
      <TouchableOpacity
      onPress={navigate}
      >
        <Image source={require('../assets/arrow.png')} style={styles.arrow} resizeMode='contain'  ></Image>
      </TouchableOpacity>
      
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/5651/5651387.png'}} style={{...styles.arrow, left:'60%', top:'40%'}} resizeMode='contain'  ></Image>
    </View>
    </ImageBackground>
  );
}
