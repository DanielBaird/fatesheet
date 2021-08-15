
const character = {
	player: 'Craig',
	name: 'Evelyn Osmus',
	description: 'Proud scion of the Osmus family, has earned her degree and now working in the family business',
	pronouns: 'she/her',
	aspectList: [
		{ aspect: 'Canon', value: 'Family above all' },
		{ aspect: 'Tragic Flaw', value: 'Business operandi and agreements' },
		{ aspect: 'Casting', value: 'Not sure' },
		{ aspect: 'Childhood', value: 'Rivel to her elder sibling' },
		{ aspect: 'Heritage', value: 'The "poster child" of her family' },
		{ aspect: 'Antagonist', value: '-'}
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
		{ stressType: 'Physical Stress', values: [1, 2] },
		{ stressType: 'Mental Stress',   values: [1, 2] }
	],
	consequencesList: [
		{ severity: 'Mild', value: 2 },
		{ severity: 'Moderate', value: 4 },
		{ severity: 'Severe', value: 6 }
	],
	stuntList: [
		{ name: 'Bonework magic', description: 'honestly can\'t remember' }
	]

}

;export default character