import React from 'react'
import { Icon } from 'native-base'
import { labels } from '../modules/labels'
import InfoScreen from '../screens/InfoScreen'
import MenuScreen from '../screens/MenuScreen'
import CallScreen from '../screens/CallScreen'
import { createMaterialTopTabNavigator } from 'react-navigation'
import MenuNavigation from './MenuNavigation'

const routeConfig = {
	InfoScreen: {
		screen: InfoScreen,
		navigationOptions: {
			tabBarLabel: labels.tabs.infoScreen,
			tabBarIcon: ({ tintColor }) => (
				<Icon
					name='info-with-circle'
					type='Entypo'
					style={{ fontSize: 20 }}
					color='#900'
				/>
			)
		}
	},
	HomeScreen: {
		screen: MenuNavigation,
		navigationOptions: {
			tabBarLabel: labels.tabs.homeScreen,
			tabBarIcon: ({ tintColor }) => (
				<Icon name='home' style={{ fontSize: 20 }} color='#900' />
			)
		}
	},
	CallScreen: {
		screen: CallScreen,
		navigationOptions: {
			tabBarLabel: labels.tabs.callScreen,
			tabBarIcon: ({ tintColor }) => (
				<Icon
					name='call-out'
					type='SimpleLineIcons'
					style={{ fontSize: 20 }}
					color='#900'
				/>
			)
		}
	}
}

const tabConfig = {
	swipeEnabled: true,
	animationEnabled: true,
	tabBarPosition: 'bottom',
	tabBarOptions: {
		activeTintColor: '#D4AF37',
		inactiveTintColor: 'gray',
		style: {
			backgroundColor: 'white'
		},
		showIcon: true
	},
	initialRouteName: 'HomeScreen'
}
export default createMaterialTopTabNavigator(routeConfig, tabConfig)
