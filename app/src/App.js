
import { ThemeProvider } from 'styled-components'
import './App.css'

import {CharSelector} from './components/CharSelector'
import fateSheetTheme from './themes/fs'

// import chData from './data/amelia'
import { allCharacters } from './data/allChars'

function App() {
	return (
		<ThemeProvider theme={fateSheetTheme}>
			<CharSelector characters={allCharacters} />
		</ThemeProvider>

	)
}

export default App
