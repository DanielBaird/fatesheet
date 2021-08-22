
const character = {
	name: 'The Printery',
	description: 'one of the oldest buildings on the island, the printery houses a huge printing press imported from Germany in the 1800s',
	aspectList: [
		{ aspect: 'Magic', value: 'Breathwork' },
		{ aspect: 'BGM Theme', value: 'something relentless and driving' }
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
			skills: ['']
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
	]
}

;export default character