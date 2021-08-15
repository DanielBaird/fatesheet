
import { ThemeProvider } from 'styled-components'
import './App.css'

import {CharSelector} from './components/CharSelector'
import fateSheetTheme from './themes/fs'
import { PageWrapper } from './components/PageWrapper'

import { allCharacters } from './data/allChars'

function App() {
	return (
		<ThemeProvider theme={fateSheetTheme}>
			<PageWrapper>
				<CharSelector characters={allCharacters} />
			</PageWrapper>
		</ThemeProvider>

	)
}

export default App
