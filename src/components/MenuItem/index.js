import React from "react"
import { Button, Icon, Text, View } from "native-base"
import styles from "./styles"

function MenuItem({ title, onPress }) {
	return (
		<Button full transparent style={styles.button} onPress={onPress}>
			<Text>{title}</Text>
			<View style={styles.arrowContainer}>
				<Icon name='ios-arrow-forward' type='Ionicons' style={styles.arrow} />
				<Icon name='ios-arrow-forward' type='Ionicons' style={styles.arrow} />
			</View>
		</Button>
	)
}

export default MenuItem
