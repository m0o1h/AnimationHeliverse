import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Animated } from 'react-native';
import { styles } from './Styles';

export default function SecondScreen({navigation}) {
    // const rightValue = useState(new Animated.Value(0)) [0];
    const [rightValue, setRightValue] = useState(new Animated.Value(0));
    const [userMovedIn, setUserMovedIn] = useState(false);

    const moveContainer = () =>{
        if(userMovedIn){
            Animated.spring(rightValue,{
                toValue:-700,
                duration:10,
                useNativeDriver:true,
            }).start()
            setUserMovedIn(false)
            setTimeout(() => {
                setRightValue(new Animated.Value(0));
            }, 100); 
        }
        else{
            Animated.spring(rightValue,{
                toValue:-400,
                duration:10,
                useNativeDriver:true,
            }).start();
            setUserMovedIn(true);
        }
    };

    setTimeout(() => {
        navigation.navigate('ThirdScreen')
    }, 20000);

  return (
    <ImageBackground source={require('../assets/award_bg.png')} style={styles.ImageBackground} >
    <View style={styles.container} >
      <Image source={require('../assets/awardPlatform.png')} style={styles.bottomPlatform} resizeMode='contain' ></Image>
      <Image source={require('../assets/girlClap.png')} style={styles.girlClap} resizeMode='contain'  ></Image>
      <Text style={{...styles.firstCastingText, top:170, }} >Gave U Some Love</Text>
      <Image source={require('../assets/main-heart.png')} style={{...styles.castingLogo, top:220, height:'18%'}} resizeMode='contain'  ></Image>
      <Text style={{...styles.firstCastingText, top:280, color:'white' }} >15000</Text>
      <TouchableOpacity
      onPress={moveContainer}
      >
        <Image source={require('../assets/arrow.png')} style={styles.arrow} resizeMode='contain'  ></Image>
      </TouchableOpacity>

      <Animated.View 
      style={[{
        ...styles.secondSwipeAvatorContainer,
        transform:[{translateX:rightValue}]
       }]} >
        <Image source={require('../assets/avtar2.png')} style={styles.avtar} resizeMode='contain'  ></Image>
        <Text style={styles.secondSwipeAvatorText} >D-Lister</Text>
      </Animated.View>

    </View>
    </ImageBackground>
  );
}
