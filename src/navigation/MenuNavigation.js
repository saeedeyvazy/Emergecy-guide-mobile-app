import MenuScreen from "../screens/MenuScreen"
import Info from "../screens/Info"
import { createBottomTabNavigator } from "react-navigation"

const routeConfig = {
	Info: {
		screen: Info
	},
	Home: {
		screen: MenuScreen
	}
}

const tabConfig = {
	swipeEnabled: true,
	animationEnabled: true
}
export default createBottomTabNavigator(routeConfig, tabConfig)
