import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './Styles';

export default function FirstScreen({navigation}) {

    setTimeout(() => {
        navigation.navigate('SecondScreen')
    }, 3000);

  return (
    <ImageBackground source={require('../assets/award_bg.png')} style={styles.ImageBackground} >
    <View style={styles.container} >
      <Image source={require('../assets/awardPlatform.png')} style={styles.bottomPlatform} resizeMode='contain' ></Image>
      <Image source={require('../assets/girlClap.png')} style={styles.girlClap} resizeMode='contain'  ></Image>
      <Image source={require('../assets/castingLogo.png')} style={styles.castingLogo} resizeMode='contain' ></Image>
      <Text style={styles.firstCastingText} >Casting Calls.</Text>
      <Text style={styles.firstText} >The Results R In!</Text>
    </View>
    </ImageBackground>
  );
}
