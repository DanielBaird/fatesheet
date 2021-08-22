
const character = {
	name: 'The Bridge',
	description: 'built less than a decade ago, the bridge connecting Moon Island to the mainland has been the site of a statistically unusual number of single vehicle accidents, partucilarly a night when the mists draw in',
	aspectList: [
		{ aspect: 'Magic', value: 'Skinwork' },
		{ aspect: 'BGM Theme', value: '—' }
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
			skills: []
		},{
			level: 'Fair', adjustment: '+2',
			skills: ['Dangerous', 'Sensitive']
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['Brilliant', 'Classy', 'Powerful', 'Savvy']
		},
	]
}

;export default character