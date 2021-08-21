
import { ThemeProvider } from 'styled-components'
import './App.css'

import {CharSelector} from './components/CharSelector'
import fateSheetTheme from './themes/fs'
import { PageWrapper } from './components/PageWrapper'

import { allCharacters, allNpcs } from './data/allChars'

function App() {
	return (
		<ThemeProvider theme={fateSheetTheme}>
			<PageWrapper>
				<CharSelector
					characters={allCharacters}
					npcs={allNpcs}
				/>
			</PageWrapper>
		</ThemeProvider>

	)
}

export default App
