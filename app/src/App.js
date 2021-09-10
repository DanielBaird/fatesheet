
import { ThemeProvider } from 'styled-components'
import './App.css'

import {CharSelector} from './components/CharSelector'
import fateSheetTheme from './themes/fs'
import { PageWrapper } from './components/PageWrapper'

import { allCharacters, allNpcs, allPlaces } from './data/allChars'

import references from './data/references'

function App() {
	return (
		<ThemeProvider theme={fateSheetTheme}>
			<PageWrapper>
				<CharSelector
					characters={allCharacters}
					npcs={allNpcs}
					places={allPlaces}
					references={references}
				/>
			</PageWrapper>
		</ThemeProvider>

	)
}

export default App
