import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"

function MenuItem({ onPress }) {
	return <TouchableOpacity onPress={() => onPress()} />
}

export default MenuItem
