
const character = {
	name: 'The Door',
	description: 'a mysterious Door stands in a hard-to-find clearing deep in the woods',
	aspectList: [
		{ aspect: 'Magic', value: 'Bonework' },
		{ aspect: 'BGM Theme', value: 'Eerie, ominous. Shepard\'s tone ( https://youtu.be/nQoU_2ElF14 )' }
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
			skills: ['Dangerous']
		},{
			level: 'Fair', adjustment: '+2',
			skills: []
		},{
			level: 'Average', adjustment: '+1',
			skills: ['Savvy']
		},{
			level: 'Unranked',
			skills: ['Classy', 'Powerful', 'Savvy', 'Sensitive', 'Treacherous']
		},
	]
}

;export default character