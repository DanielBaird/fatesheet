
const character = {
	player: 'Lachlan',
	name: 'Wilfred Bishop',
	description: 'The long term mayor of Moon Island, using his influence to keep the existence of magic a secret from the outside world',
	pronouns: 'he/him',
	aspectList: [
		{ aspect: 'Canon', value: 'I will keep up appearances at all costs' },
		{ aspect: 'Tragic Flaw', value: 'There is no price too great' },
		{ aspect: 'Casting', value: 'Pale, rake-thin man in his late thirties, stress turning his once black hair prematurely grey' },
		{ aspect: 'Childhood', value: 'Estranged from the Bishop family' },
		{ aspect: 'Heritage', value: 'My family "experience" the Salem trials as part of our initiation' },
		{ aspect: 'Antagonist', value: 'Ambitious local reporter Richard Trickton'}
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5',
			skills: []
		},{
			level: 'Great', adjustment: '+4',
			skills: ['Treacherous']
		},{
			level: 'Good', adjustment: '+3',
			skills: []
		},{
			level: 'Fair', adjustment: '+2',
			skills: ['Sensitive', 'Powerful']
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['Brilliant', 'Classy', 'Dangerous', 'Savvy']
		},
	],
	stressList: [
		{ stressType: 'Physical Stress', values: [1, 2] },
		{ stressType: 'Mental Stress',   values: [1, 2] }
	],
	consequencesList: [
		{ severity: 'Mild', value: 2 },
		{ severity: 'Moderate', value: 4 },
		{ severity: 'Severe', value: 6 }
	],
	stuntList: [
		{ name: 'Breathwork magic', description: 'Knowledge outside my ken; cold and logical. My preferred invocation is the phrase "Let me level with you..."' }
	]

}

;export default character