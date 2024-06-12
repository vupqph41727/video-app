import { View } from 'react-native'
import YTplayer from '../Components/YTplayer'
import Color from '../Shared/Color'
import { useEffect } from 'react';
import {useRoute} from'@react-navigation/native'
import SubcribeSection from '../Components/SubcribeSection';
import PlayList from '../Components/PlayList';



function PlayVideoScreen() {
  const param = useRoute().params;
  return (
   <View style={{backgroundColor:Color.black, flex:1}}>
     <YTplayer param={param}/> 
     <SubcribeSection />
     <PlayList/>
   </View>
  )
}

export default PlayVideoScreen