
export default {
	player: 'Daniel Baird',
	name: 'Amelia Thingy',
	description: 'just a girl, y\'know',
	pronouns: 'she/her',
	aspectList: [
		{ aspect: 'Canon', value: '' },
		{ aspect: 'Tragic Flaw', value: '' },
		{ aspect: 'Casting', value: '' },
		{ aspect: 'Childhood', value: '' },
		{ aspect: 'Heritage', value: '' }
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
			skills: []
		},
	],
	stressList: [
		{ stressType: 'Physical Stress', values: [1, 2, 3, 4] },
		{ stressType: 'Mental Stress',   values: [1, 2]       }
	],
	consequencesList: [
		{ severity: 'Mild', value: 2 },
		{ severity: 'Moderate', value: 4 },
		{ severity: 'Severe', value: 6 }
	]

}