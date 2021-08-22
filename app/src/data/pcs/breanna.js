
const character = {
	player: 'Tim Hart',
	name: 'Breanna Foster',
	description: '',
	pronouns: 'she/her',
	fatePoints: { refresh: 3, spaces: 5 },
	aspectList: [
		{ aspect: 'Canon', value: 'Healing heart' },
		{ aspect: 'Tragic Flaw', value: 'Bone debt' },
		{ aspect: 'Casting', value: 'Alexis Bledel' },
		{ aspect: 'Childhood', value: 'Blood bent' },
		{ aspect: 'Heritage', value: 'Black rat of the Foster family' },
		{ aspect: 'Antagonist', value: 'The Foster family golden child, my sister Jessica'}
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5',
			skills: []
		},{
			level: 'Great', adjustment: '+4',
			skills: ['Sensitive']
		},{
			level: 'Good', adjustment: '+3',
			skills: []
		},{
			level: 'Fair', adjustment: '+2',
			skills: ['Savvy', 'Classy']
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['Brilliant','Dangerous','Powerful','Treacherous']
		},
	],
	stressList: [
		{ stressType: 'Stress', values: [1, 2], bonusValues: [3, 4, 5] }
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