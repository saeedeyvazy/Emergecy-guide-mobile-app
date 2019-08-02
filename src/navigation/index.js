import { createStackNavigator, createAppContainer } from "react-navigation"
import MenuNavigation from "./MenuNavigation"

const Navigation = createStackNavigator(
	{
		MenuScreen: { screen: MenuNavigation }
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#a50408",
				elevation: 0
			}
		}
	}
)

export default Navigation
