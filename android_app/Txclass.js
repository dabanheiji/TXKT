import React,{useState} from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './page/home/Home'
import List from './page/list/List'
import Detail from './page/detail/Detail'

import Logo from './components/logo'

import styles from './styles'

function BottomTab () {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            style={styles.container}
            screenOptions={({ route })=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;

                    switch (route.name) {
                        case '首页':
                            iconName = 'android-home'
                            break
                        case '列表页':
                            iconName = 'android-list'
                            break
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    )
                }
            })}
            tabBarOptions={{
                activeTintColor:"#23b8ff",
                inactiveTintColor: '#999'
            }}
        >
            <Tab.Screen 
                name="首页"
                component={Home}
            />
            <Tab.Screen 
                name="列表页"
                component={List}
            />
        </Tab.Navigator>
    )
}

const Txclass = (props)=>{
    
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator  style={styles.container}>
                <Stack.Screen 
                    name="Tab"
                    component={BottomTab}
                    options={{
                        headerTitle: props => <Logo {...props} />
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        headerTitle: props => <Logo {...props} />,
                        headerBackTitle: '返回'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Txclass