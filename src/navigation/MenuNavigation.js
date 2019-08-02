import React from 'react'
import { createStackNavigator } from 'react-navigation'
import MenuScreen from '../screens/MenuScreen'
import ChokingScreen from '../screens/ChokingScreen'

const MenuNavigation = createStackNavigator(
	{
		MenuScreen: ({ navigation }) => <MenuScreen {...navigation} />,
		ChokingScreen: ChokingScreen
	},
	{
		defaultNavigationOptions: {
			header: () => {}
		}
	}
)

export default MenuNavigation
