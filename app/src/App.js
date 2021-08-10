
import { ThemeProvider } from 'styled-components';

import logo from './logo.svg';
import './App.css';

import {Row} from './elements/Row'
import {Col} from './elements/Col'
import {Box} from './components/Box'
import {CharSheet} from './components/CharSheet';

import fateSheetTheme from './themes/fs'

function App() {
	return (<>
		<ThemeProvider theme={fateSheetTheme}>
			<CharSheet>
				<Box heading="asdf">
					<div>qwer</div>
					<div>asdf</div>
				</Box>
			</CharSheet>

		</ThemeProvider>
		<div class="fatesheet">
			<div class="header">
				<div class="namedesc box">
					<h2><span class="name">Amelia Thingy</span></h2>
					<div class="descpro">
						<div class="desc aspect">
							<h3>Description</h3>
							<p>Something I can't work out yet</p>
						</div>
						<div class="pronouns aspect">
							<h3>Pronouns</h3>
							<p>she/her</p>
						</div>
					</div>
				</div>
				<div class="logo">
				&lt;3
				</div>
			</div>

			<div class="details">
				<div class="numberscol">
					<div class="skills box">
						<h2>Skills</h2>
						<table>
							<tr>
								<th>Superb (+5)</th>
								<td></td>
							</tr><tr>
								<th>Great (+4)</th>
								<td>Brilliant</td>
							</tr><tr>
								<th>Good (+3)</th>
								<td>Classy</td>
							</tr><tr>
								<th>Fair (+2)</th>
								<td>Dangerous, Savvy, Treacherous</td>
							</tr><tr>
								<th>Average (+1)</th>
								<td></td>
							</tr><tr>
								<th>Unranked</th>
								<td></td>
							</tr>
						</table>
					</div>
					<div class="stressconc box">
						<h2>Stress <small>and</small> Consequences</h2>
						<div class="stress">
							<div class="track">
								<h3>Physical Stress</h3>
								<div class="trackmarks">
									<span class="mark"></span>
									<span class="mark"></span>
									<span class="mark"></span>
									<span class="mark"></span>
								</div>
							</div>
							<div class="track">
								<h3>Mental Stress</h3>
								<div class="trackmarks">
									<span class="mark"></span>
									<span class="mark"></span>
								</div>
							</div>
						</div>
						<div class="consequences">
							<div class="consequence">
								<span class="size">2</span>
								<h3>Mild</h3>
							</div>
							<div class="consequence">
								<span class="size">4</span>
								<h3>Moderate</h3>
							</div>
							<div class="consequence">
								<span class="size">6</span>
								<h3>Severe</h3>
							</div>
							<div class="consequence bonus">
								<span class="size">2</span>
								<h3>Mild</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="textcol">
					<div class="aspects box">
						<h2>Aspects</h2>
						<div class="aspect">
							<h3>Canon</h3>
							<p>Something I can't work out yet</p>
						</div>
						<div class="aspect">
							<h3>Tragic Flaw</h3>
							<p>Seeing isn't believing</p>
						</div>
						<div class="aspect">
							<h3>Casting</h3>
							<p>...</p>
						</div>
						<div class="aspect">
							<h3>Childhood</h3>
							<p>...</p>
						</div>
						<div class="aspect">
							<h3>Heritage</h3>
							<p>...</p>
						</div>
					</div>
					<div class="stuntsextras box">
						<h2>Stunts <small>and</small> Extras</h2>
						stunts
					</div>
				</div>
			</div>
		</div>


	</>);
}

export default App;
