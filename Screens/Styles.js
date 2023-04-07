import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
      },
      ImageBackground:{
        width:'100%',
        height:'100%',
      },
      bottomPlatform:{
        width:'100%',
        height:'20%',
        position:'absolute',
        bottom:0,
      },
      girlClap:{
        width:'100%',
        height:'45%',
        position:'absolute',
        bottom:95,
      },
      castingLogo:{
        width:'100%',
        height:'15%',
        position:'absolute',
        top:50,
      },
      firstCastingText:{
        color:'pink',
        fontSize:30,
        fontWeight:'bold',
        top:180,
        position:'absolute',
      },
      firstText:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        top:320,
        position:'absolute',
      },
      arrow:{
        width:80,
        height:80,
        position:'absolute',
        top:520,
        left:80,
      },
      secondSwipeAvatorContainer:{
        flexDirection:'row',
        //backgroundColor:'red',
        top:50,
        left:width,
        alignItems:'center',
      },
      avtar:{
        width:80,
        height:80,
        borderRadius:60,
        borderWidth:3,
        borderColor:'orange',
      },
      secondSwipeAvatorText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        marginLeft:25
      },

})

export {styles};