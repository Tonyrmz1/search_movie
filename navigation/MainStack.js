import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native' 
import SearchScreen from '../screens/SearchScreen'
import InfoScreen from '../screens/InfoScreen'
import { COLORS, FONTS } from '../globals/GlobalStyles'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = 'Search a Movie'
                component = { SearchScreen }
                options={{
                  headerStyle:{
                    backgroundColor: COLORS.backgroundColor
                  },
                  headerTintColor: COLORS.secondaryColor,
                  headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: FONTS.big
                  }
                }}/>

            <Stack.Screen
                name = 'Info'
                component = { InfoScreen }
                options={{
                  headerStyle:{
                    backgroundColor: COLORS.backgroundColor
                  },
                  headerTintColor: COLORS.secondaryColor,
                  headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: FONTS.big
                  }
                }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack