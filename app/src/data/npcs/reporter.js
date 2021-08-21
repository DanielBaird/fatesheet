
const character = {
	name: 'Trickey Dicky',
	description: 'A new reporter just arrived in town, ready to dig into whatever dirt he can find',
	pronouns: 'he/him',
	aspectList: [
		{ aspect: 'Canon', value: 'I will keep up appearances at all costs' },
		{ aspect: 'Tragic Flaw', value: 'There is no price too great' },
		{ aspect: 'Casting', value: 'Not sure' },
		{ aspect: 'Childhood', value: 'Estranged from the Bishop family' },
		{ aspect: 'Heritage', value: '"Experienced" the Salem witch trials' },
		{ aspect: 'Antagonist', value: 'The new reporter looking to expose the dirty secrets of Moon Island'}
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
		{ name: 'Breathwork magic', description: 'knowledge outside my ken; cold and logical' }
	]

}

;export default character