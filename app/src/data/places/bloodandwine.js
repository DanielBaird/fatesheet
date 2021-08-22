
const character = {
	name: 'Blood and Wine',
	description: 'Breanna\'s wine bar and ...recuperation retreat',
	aspectList: [
		{ aspect: 'Magic', value: 'Bloodwork' },
		{ aspect: 'BGM Theme', value: '—' }
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
			skills: ['Savvy', 'Treacherous']
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['Brilliant', 'Classy', 'Dangerous', 'Powerful', 'Sensitive']
		},
	]
}

;export default character