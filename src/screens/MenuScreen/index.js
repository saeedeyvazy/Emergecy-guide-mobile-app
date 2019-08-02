import React from "react"
import { Button, Icon, Text, Container, Content } from "native-base"
function MenuScreen() {
	return (
		<Container>
			<Content padder>
				<Button full light style={{ justifyContent: "space-between" }}>
					<Text>test</Text>
					<Icon name='add' />
				</Button>
			</Content>
		</Container>
	)
}

export default MenuScreen
