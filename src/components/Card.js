import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'; 

const Card = (props) => (
    <ImageBackground source={props.data.item.src} style={styles.image}>
       <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{
                    uri: "https://randomuser.me/api/portraits/women/43.jpg",
                    }} style={{
                        width:36,
                        height:36,
                        borderWidth:1,
                        borderRadius: 18,
                        borderColor:'black',
                        resizeMode:'contain',
                        borderColor: '#25A0B0',
                    }}>
                </Image>
                <View style={{flexDirection: 'column', marginLeft: 5}}>
                    <Text style={styles.text}>Burak Gökçınar</Text>
                    <Text style={styles.subText}>2 hrs ago</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={25} color="white" />
       </View>
       <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.subContent}>
                    <Feather name="heart" size={24} color="white" />
                    <Text style={styles.text}>{props.data.item.likeCount}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.subContent}>
                    <Feather name="message-square" size={24} color="white" />
                    <Text style={styles.text}>{props.data.item.commentsCount}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.subContent}>
                    <Feather name="bookmark" size={24} color="white" />
                    <Text style={styles.text}>{props.data.item.savedCount}</Text>
                </View>
            </View>
       </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 20,
    borderRadius:50,
  },
  image: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: 'center',
    //width: '100%',
    height: 400,
    margin: 20,
    borderRadius:25,
    overflow: 'hidden',
    justifyContent: 'space-between'
  },
  text: {
    color: "white",
    fontWeight: '400',
    textAlign: "center"
  },
  subText: {
    color: "#D8D8D8",
    fontWeight: '400',
    //textAlign: "center"
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#E5E5E5',
    borderRadius: 35, 
    width: 100
  }
});

export default Card;