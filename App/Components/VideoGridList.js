import { View,Text,StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from "react-native"
import Color from "../Shared/Color";
import {useNavigation} from '@react-navigation/native';

function VideoGridList() {
    const navigation = useNavigation();
    const VideoList=[
        {
            id:1,
            name:'Make Video Using ChatGPT',
            imageUrl:'https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'
        },
        {
            id:2,
            name:'10 Skills AI made useless',
            imageUrl:'https://i.ytimg.com/vi/EgEW5KP6I2A/maxresdefault.jpg',
            url:'N7xEs9E9Y4A'

        },
        {
            id:3,
            name:'UI Design Tutorial',
            imageUrl:'https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg',
            url:'P1_ciTwn6fE'
        }
    ]

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Popular Video</Text>
        <FlatList 
            data={VideoList}
            numColumns={2}
            renderItem={({item,index})=>
            <TouchableOpacity onPress={()=> navigation.navigate('playVideo',{videoData:item})}>
                <Image source={{uri:item.imageUrl}} style={styles.image}/>
                <Text style={styles.nameText}>{item.name}</Text>
            </TouchableOpacity>
        }
        />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:15,
    },
    heading:{
        fontSize:20,
        color:Color.white,
        fontWeight:'bold',
        marginBottom:10
    },
    image:{
        width:Dimensions.get('screen').width*0.415,
        height:100,
        margin:5,
        borderRadius:7,
        
    },
    nameText:{
        color:Color.white,
        marginBottom:10,
        fontSize:12
    }
});

export default VideoGridList