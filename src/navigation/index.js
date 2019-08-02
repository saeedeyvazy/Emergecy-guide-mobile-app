import React from 'react'
import MainNavigation from './MainNavigation'
import { createStackNavigator } from 'react-navigation'
import { labels } from '../modules/labels'

const Navigation = createStackNavigator(
	{
		MainScreen: {
			screen: MainNavigation,
			navigationOptions: ({ navigation }) => ({
				title: labels.tabs.homeHeader
			})
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#a50408',
				elevation: 0
			},
			headerTitleStyle: {
				color: 'white',
				textAlign: 'center',
				flex: 1
			}
		}
	}
)

export default Navigation
