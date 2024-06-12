import { useCallback, useEffect, useState } from "react";
import { View,Text,StyleSheet, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Color from "../Shared/Color";

const playerWidth = Dimensions.get('screen').width
function YTplayer({param}) {
    const[playing,setPlaying] = useState(false);
    const[videoData,setVideoData] = useState([]);

    useEffect(()=>{
      setVideoData(param.videoData);
    },[])

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
      }, []);

  return (
    <View style={styles.webviewContainer}>
    <YoutubePlayer
      height={300}
      play={playing}
      videoId={videoData.url}
      onChangeState={onStateChange}
    /> 
    <Text style={styles.title}>{videoData.name}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:200,
    height:160
  },
  title:{
    fontSize:20,
    color:Color.white,
    fontWeight:"bold"
  }
})

export default YTplayer;