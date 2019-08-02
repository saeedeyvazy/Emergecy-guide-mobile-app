import React from 'react'
import { Container, View } from 'native-base'
import MenuItem from '../../components/MenuItem'
import { labels } from '../../modules/labels'

function MenuScreen({ navigate }) {
	function handleNavigation(screenName) {
		navigate(screenName)
	}

	return (
		<Container>
			<View style={{ justifyContent: 'space-around', flex: 1, padding: 20 }}>
				<MenuItem title={labels.menu.recovery} />
				<MenuItem
					title={labels.menu.choking}
					onPress={() => handleNavigation('ChokingScreen')}
				/>
				<MenuItem title={labels.menu.recovery} />
				<MenuItem title={labels.menu.choking} />
				<MenuItem title={labels.menu.recovery} />
				<MenuItem title={labels.menu.choking} />
				<MenuItem title={labels.menu.recovery} />
			</View>
		</Container>
	)
}

export default MenuScreen
