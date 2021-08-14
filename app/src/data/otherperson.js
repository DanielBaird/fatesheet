
const amelia = {
	player: 'Stephen Strange',
	name: 'Doctor thingy',
	description: 'just a girl, y\'know',
	pronouns: 'she/her',
	aspectList: [
		{ aspect: 'Canon', value: 'Something I can\'t work out yet' },
		{ aspect: 'Tragic Flaw', value: 'Seeing isn\'t believing' },
		{ aspect: 'Casting', value: '...' },
		{ aspect: 'Childhood', value: '...' },
		{ aspect: 'Heritage', value: '...' }
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5',
			skills: []
		},{
			level: 'Great', adjustment: '+4',
			skills: ['Brilliant']
		},{
			level: 'Good', adjustment: '+3',
			skills: ['Classy']
		},{
			level: 'Fair', adjustment: '+2',
			skills: ['Dangerous', 'Savvy', 'Treacherous']
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
	],
	stuntList: [
		{ name: 'standing backflip', description: 'from a stand, Amelia can do a cool backflip that gives her +4 to every roll' },
		{ name: 'Magic Missile', description: 'always hits' }
	]

}

;export default amelia