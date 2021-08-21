
const character = {
	player: 'Tim Hart',
	name: 'Breanna Foster',
	description: '',
	pronouns: 'she/her',
	aspectList: [
		{ aspect: 'Canon', value: 'Compassion first, always' },
		{ aspect: 'Tragic Flaw', value: 'Bone debt' },
		{ aspect: 'Casting', value: '-' },
		{ aspect: 'Childhood', value: '-' },
		{ aspect: 'Heritage', value: 'Black Rat of the Foster family' },
		{ aspect: 'Antagonist', value: 'Mayor Wilfred Bishop?'}
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5',
			skills: []
		},{
			level: 'Great', adjustment: '+4',
			skills: []
		},{
			level: 'Good', adjustment: '+3',
			skills: []
		},{
			level: 'Fair', adjustment: '+2',
			skills: []
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['']
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
		{ name: 'Bloodwork magic', description: 'passion and soul and enthusiasm and stuff' }
	]

}

;export default character