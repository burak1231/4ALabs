import * as React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather, Ionicons, MaterialCommunityIcons, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// Page Import
import SplashScreen from '../screens/SplashScreen';
import Profile from '../screens/Profile';
import Message from '../screens/Message';
import Home from '../screens/Home';
import FeedAdd from '../screens/FeedAdd';
import Like from '../screens/Like';

const Stack = createNativeStackNavigator();       // Create Navigation Stack
const Tab   = createBottomTabNavigator();         // Create Navigation Tab Bar

function HomeTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let activeColor = focused ? '#7DB9B3' : 'black';

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
                return <Ionicons name={iconName} size={size} color={activeColor}/>;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user-circle' : 'user-circle-o';
              return <FontAwesome name={iconName} size={size} color={activeColor}/>;
            } else if (route.name === 'Message') {
              iconName = focused ? 'message-reply' : 'message-reply-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={activeColor}/>;
            } else if (route.name === 'FeedAdd') {
              iconName = focused ? 'plus-square' : 'plus-square-o';
              return <FontAwesome name={iconName} size={50} color={activeColor}/>;
            } else if (route.name === 'Like') {
              iconName = focused ? 'heart' : 'heart-outlined';
              return <Entypo name={iconName} size={size} color={activeColor}/>;
            } 

            // You can return any component that you like here!
            
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            borderRadius: 20
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: '', headerShown: false}}/>
        <Tab.Screen name="Message" component={Message} options={{tabBarLabel: '', headerShown: false}}/>
        <Tab.Screen name="FeedAdd" component={FeedAdd} 
          options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 65,
                width: 65,
                borderRadius: 23,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                transform: [{ rotate: "-45deg"}]
              }}
              >
              <FontAwesome5 name='plus-circle' size={25} color='white' style={{transform: [{ rotate: "-45deg"}]}}/>
            </View>
          )
          }}
        />
        <Tab.Screen name="Like" component={Like} options={{tabBarLabel: '', headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: '', headerShown: false}}/>
      </Tab.Navigator>
  );
}

export default function NavigationRouter() {
  return (
    <NavigationContainer>
    <StatusBar style="light" />
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: true, headerBackTitle: '', headerTransparent: true, title: null, headerTintColor: 'black' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}