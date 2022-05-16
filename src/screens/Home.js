import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

// Card.js
import Card from '../components/Card';

export default function Home({navigation}) {

  const window = useWindowDimensions();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      src: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      src: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      src: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba11',
      title: 'First Item',
      src: "https://randomuser.me/api/portraits/women/46.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
      title: 'Second Item',
      src: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d721',
      title: 'Third Item',
      src: "https://randomuser.me/api/portraits/women/50.jpg"
    },
  ];

  const DATA2 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Dennis',
      surname: 'Raynold',
      src: require('../../assets/card/card4.jpeg'),
      likeCount: '5.2K',
      commentsCount: '1.1K',
      savedCount: '362'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Dennis',
      surname: 'Raynold',
      src: require('../../assets/card/card3.jpg'),
      likeCount: '5.2K',
      commentsCount: '1.1K',
      savedCount: '362'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Dennis',
      surname: 'Raynold',
      src: require('../../assets/card/card4.jpeg'),
      likeCount: '1.2K',
      commentsCount: '750',
      savedCount: '27'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba11',
      name: 'Dennis',
      surname: 'Raynold',
      src: require('../../assets/card/card2.jpg'),
      likeCount: '5.2K',
      commentsCount: '1.1K',
      savedCount: '362'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
      name: 'Dennis',
      surname: 'Raynold',
      src: require('../../assets/card/card3.jpg'),
      likeCount: '5.2K',
      commentsCount: '1.1K',
      savedCount: '362'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d721',
      name: 'Dennis',
      surname: 'Raynold',
      src: require('../../assets/card/card2.jpg'),
      likeCount: '5.2K',
      commentsCount: '1.1K',
      savedCount: '362'
    },
  ];

  const renderImageUserComponent = (item, index) => {
    if (item.index == 0) { // FlatList First Component
      return (
        <LinearGradient
          // Button Linear Gradient
          colors={['#F5C8C6', '#FFE1E0', '#E1F6F4']}
          style={styles.button}>
          <Entypo name="plus" size={30} color="black" />
        </LinearGradient>
      )
    } else {
      return (
        <Image source={{
          uri: item.item.src,
          }} style={{
            width:60,
            height:60,
            borderWidth:2,
            borderRadius: 30,
            borderColor:'black',
            resizeMode:'contain',
            borderColor: '#25A0B0',
            margin:8
          }}>
        </Image>
      )
    }
  }

  const renderFeedComponent = (item, index) => {
    return (
      <Card data={ item }/>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{position: 'absolute',backgroundColor: 'transparent', width: window.width, height: window.height, transform: [{ rotate: "45deg" }], marginLeft: -window.width, marginTop: -window.width/3, borderRadius: 150, borderWidth: 2, borderColor: '#EEF2E2'}}>
        
      </View>
      <View style={{position: 'absolute',backgroundColor: 'transparent', width: window.width - 100, height: window.height - 100, transform: [{ rotate: "45deg" }], marginLeft: -window.width/2, marginTop: -window.width/4, borderRadius: 150, borderWidth: 2, borderColor: '#EEF2E2'}}>
        
      </View>
      <View style={{marginTop: 100, flexDirection: 'row'}}>
        <FlatList
          data={DATA2}
          renderItem={(item, index) => renderFeedComponent(item, index)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
                <Text style={{fontSize: 30, fontWeight: 'bold', margin: 20}}>Feed</Text>
                <FlatList
                  data={DATA}
                  renderItem={(item, index) => renderImageUserComponent(item, index)}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
            </View>
          }
        />
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:60,
    height:60,
    borderRadius: 30,
    resizeMode:'contain',
    margin:8
  },
});
