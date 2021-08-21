
const character = {
	player: 'Daniel Baird',
	name: 'Amelia Astermere',
	description: 'Y\'know, just some girl who came back to a town she left when she was very young',
	pronouns: 'she/her',
	aspectList: [
		{ aspect: 'Canon', value: 'Not sure' },
		{ aspect: 'Tragic Flaw', value: 'Seeing isn\'t believing' },
		{ aspect: 'Casting', value: 'Not sure' },
		{ aspect: 'Childhood', value: 'Not sure' },
		{ aspect: 'Heritage', value: 'Not sure' },
		{ aspect: 'Antagonist', value: 'Not sure'}
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5', skills: []
		},{
			level: 'Great', adjustment: '+4', skills: ['???']
		},{
			level: 'Good', adjustment: '+3', skills: ['???']
		},{
			level: 'Fair', adjustment: '+2', skills: ['???', '???']
		},{
			level: 'Average', adjustment: '+1', skills: ['???']
		},{
			level: 'Unranked', skills: ['???']
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
		{ name: 'Breathwork? magic', description: 'I don\'t remember if this is the right one' }
	]

}

;export default character