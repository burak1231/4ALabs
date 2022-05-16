import { View, Text, useWindowDimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons';

import { PhotoGrid } from 'react-native-photo-grid-frame';
import Photos from '../../constant/Photos.json';

export default function Profile() {

const window = useWindowDimensions();

    // User Tab Selected Index
    const [index, setIndex] = React.useState(0)

    const userInformationComponent = (name, data) => {
        return (
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 16, color: '#656565'}}>{name}</Text>
                <Text style={{fontSize: 25, color: '#000000', fontWeight: '700'}}>{data}</Text>
            </View>
        )
    }

    const imageComponent = () => {
        return (
          <Image
            style={{width: window.width, height: window.height/4}}
            source={require('../../assets/Rectangle.png')}
            resizeMode='contain'
          />
        )
      }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#E1F6F4', borderRadius: 150, transform: [{ rotateZ: "45deg" }], marginTop: -window.width/2, width: window.width, height: window.height/2, alignItems: 'center', justifyContent: 'center'}}>
            
        </View>
        <View style={{position: 'absolute', transform: [{ rotateZ: "45deg"}], alignSelf: 'center', marginTop: window.width/10}}>
            <View style={{borderWidth: 2, width: 120, height : 120, justifyContent: 'center', alignItems: 'center', borderRadius: 35}}>
                <Image
                    style={{width: 100, height: 100, transform: [{ rotateZ: "-45deg" }]}}
                    source={require('../../assets/Hero.png')}
                    resizeMode='contain'
                />
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
            {userInformationComponent("Posts", 35)}
            {userInformationComponent("Followers", 1.552)}
            {userInformationComponent("Follows", 128)}
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                    <TouchableOpacity onPress={() => setIndex(0)}>
                        <Feather name="image" size={35} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIndex(1)}>
                        <Feather name="bookmark" size={35} color="black" />
                    </TouchableOpacity>
            </View>
            {
                index == 0 ? (
                    <ScrollView>
                        <PhotoGrid PhotosList={Photos} borderRadius={10}/>
                    </ScrollView>
                ) : (
                    <View>
                        <Text>Bookmark</Text>
                    </View>
                )
            }
        </View>
    </View>
  )
}