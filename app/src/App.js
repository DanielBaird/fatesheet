
import { ThemeProvider } from 'styled-components'
import './App.css'

import {FullCharsheet} from './components/FullCharsheet'
import fateSheetTheme from './themes/fs'
import chData from './data/amelia'

function App() {
	return (
		<ThemeProvider theme={fateSheetTheme}>
			<FullCharsheet character={chData} />
		</ThemeProvider>

	)
}

export default App
