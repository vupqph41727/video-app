import { View,Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native"
import Color from "../Shared/Color"

function SubcribeSection() {
    const openUrl = () => {
        Linking.openURL('https://www.youtube.com/@FPTShop_');
    }
  return (
    <View style={styles.container}>
         <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzQM0b3o8fBeTkhy5csYSMs09C2qYBnyRUw&s'}}
        style={styles.logo}/>
        <View>
            <Text style={styles.channelName}>QuangVux</Text>
            <Text style={styles.channelDesc}>Learn With Fun</Text>
        </View>
        <TouchableOpacity onPress={()=>openUrl()}>
            <Text style={styles.button}>Subcribe</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        borderRadius:10,
        backgroundColor:Color.darkBlack,
        
    },
    logo:{
        width:40,
        height:40,
        borderRadius:50,
    },
    channelName:{
        color:Color.white,
        fontSize:20
    },
    channelDesc:{
        color:Color.white,

    },
    button:{
        color:Color.white,
        backgroundColor:Color.primarySchool,
        padding:5,
        borderRadius:50,
        paddingLeft:10,
        paddingRight:10,
    }
})

export default SubcribeSection