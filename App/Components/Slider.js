import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';

function Slider() {
    const[sliderList,setSliderList] = useState();
  useEffect(()=>{
    setSliderList( [
        {
            id:1,
            name:'Slider 1',
            imageUrl:'https://i.ytimg.com/vi/YLypVu78YTU/maxresdefault.jpg'
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:'https://i.ytimg.com/vi/_5-1wVJvxSY/maxresdefault.jpg'
        },
    
       ])
  },[])
   return(
    <View>
        <FlatList data={sliderList} horizontal={true} renderItem={({item,index}) =>
        <View>
            <Image source={{uri:item.imageUrl}} style={styles.sliderImage} />
        </View>
        }/>
    </View>
   )
}

const styles = StyleSheet.create({
   sliderImage:{
    width:Dimensions.get('screen').width*0.9,
    height:170,
    marginTop:12,
    borderRadius:10,
    marginRight:10
   }
   
});

export default Slider