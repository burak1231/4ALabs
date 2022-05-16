import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

// PageView
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';

export default function SplashScreen({navigation}) {

  const window = useWindowDimensions();


  const imageComponent = () => {
    return (
      <Image
        style={{width: window.width, height: window.height/4}}
        source={require('../../assets/Hero.png')}
        resizeMode='contain'
      />
    )
  }

  function _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{position: 'absolute',backgroundColor: '#E1F6F4', width: window.width, height: window.height, transform: [{ rotateZ: "45deg" }], marginLeft: -window.width/1.7, marginTop: -window.width/3.5, borderRadius: 150}}>
        <View style={{flex:1, position: 'absolute', alignItems: 'center', justifyContent: 'center', marginLeft: window.width/2, transform: [{ rotateZ: "-45deg" }], marginTop: window.width/3}}>
          <Text style={{fontSize: 16}}>Wellcome to</Text>
          <Text style={{fontSize: 39, fontWeight: 'bold'}}>Socially</Text>
        </View>
      </View>
      <View style={{position: 'absolute',backgroundColor: 'transparent', width: window.width*1.2, height: window.height - 50, transform: [{ rotateZ: "45deg" }], marginLeft: -window.width/1.7, marginTop: -window.width/3.5, borderRadius: 150, borderWidth: 2, borderColor: '#EEF2E2'}}>
      </View>
      <IndicatorViewPager
        style={{height:window.height/4, marginTop: window.height/3}}
        indicator={_renderDotIndicator()}
      >
      <View>
        {imageComponent()}
      </View>
      <View>
        {imageComponent()}
      </View>
      <View>
        {imageComponent()}
      </View>
      </IndicatorViewPager>
      <View style={{backgroundColor: 'black', width: 200, height: 200, position: 'absolute', right: 0, bottom: 0, transform: [{ rotate: "45deg" }], marginRight: -window.width/6, borderRadius: 80, alignItems: 'center', justifyContent: 'center', zIndex: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={{fontSize: 18, color: 'white', transform: [{ rotateZ: "-45deg" }]}}>Next <AntDesign name="arrowright" size={16} color="white" /></Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'transparent', width: 200, height: 200, position: 'absolute', right: 0, bottom: 0, transform: [{ rotateZ: "45deg" }], borderRadius: 80, borderWidth: 2, marginRight: -40}}>
            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
