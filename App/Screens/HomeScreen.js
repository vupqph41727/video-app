import { Text, View } from 'react-native'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import PlayList from '../Components/PlayList'
import VideoGridList from '../Components/VideoGridList'
import Color from '../Shared/Color'

function HomeScreen() {
  return (
    <View style={{backgroundColor:Color.black}}>
        <Header />
        <Slider />
        <PlayList />
        <VideoGridList />
    </View>
  )
}

export default HomeScreen