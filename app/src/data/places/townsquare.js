
const character = {
	name: 'Town Square',
	description: 'a dark bronze statue of Edwin Blood towers over a fountain',
	aspectList: [
		{ aspect: 'Magic', value: 'All types' },
		{ aspect: 'BGM Theme', value: 'Muted, safe' }
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
			skills: ['Sensitive', 'Powerful']
		},{
			level: 'Fair', adjustment: '+2',
			skills: ['Classy']
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['Brilliant', 'Dangerous', 'Savvy', 'Treacherous']
		},
	]
}

;export default character