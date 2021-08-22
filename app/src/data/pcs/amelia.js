
const character = {
	player: 'Daniel Baird',
	name: 'Amelia Astermere',
	description: 'Working on her PhD in historical anthropology, focusing on the "superstitions" of witchcraft in American colonial settlements',
	pronouns: 'she/her',
	fatePoints: { refresh: 3, spaces: 5 },
	aspectList: [
		{ aspect: 'Canon', value: 'Everything through the lens of her studies' },
		{ aspect: 'Tragic Flaw', value: 'Inquisitive beyond reason' },
		{ aspect: 'Casting', value: 'Isla Fisher' },
		{ aspect: 'Childhood', value: 'Dim memories of a tragedy that took her mother and sister' },
		{ aspect: 'Heritage', value: 'Isn\'t aware of her connection to the island' },
		{ aspect: 'Antagonist', value: '—'}
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5', skills: []
		},{
			level: 'Great', adjustment: '+4', skills: []
		},{
			level: 'Good', adjustment: '+3', skills: ['Brilliant','Sensitive']
		},{
			level: 'Fair', adjustment: '+2', skills: []
		},{
			level: 'Average', adjustment: '+1', skills: ['Savvy']
		},{
			level: 'Unranked', skills: ['Classy','Dangerous','Powerful','Treacherous']
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
		{ name: 'Skinwork magic', description: 'considering switching to breathwork' }
	]
}

;export default character