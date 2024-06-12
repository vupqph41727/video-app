import { Image, StyleSheet, Text, View } from 'react-native'
import Color from '../Shared/Color';

function Header() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userNameText}>Quang Vu</Text>
        </View>
        <Image source={require('./../../assets/icon.png')} style={styles.userImage} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-between',
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:50,
    },
    welcomeText:{
        fontSize:20,
        fontWeight:'bold',
        color:Color.white
    },
    userNameText:{
        color:Color.white,
    }
});

export default Header