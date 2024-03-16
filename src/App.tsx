/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screen/Home'
import LoginScreen from './screen/auth/LoginScreen'
import SignupScreen from './screen/auth/SignupScreen'

const Stack = createNativeStackNavigator()

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Expense Management',
              headerStyle: {
                backgroundColor: '#007F3C'
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#007F3C'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name='Signup'
              component={SignupScreen}
              options={{
                title: 'Signup',
                headerStyle: {
                  backgroundColor: '#007F3C'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerTitleAlign: 'center'
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
