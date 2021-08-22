
const character = {
	name: 'the Bloodbowl (Edwin Blood Bicentennial Stadium)',
	description: 'Football grounds used by the local high school',
	aspectList: [
		{ aspect: 'Magic', value: 'Musclework' },
		{ aspect: 'BGM Theme', value: 'During a game: Dragula - Rob Zombie.  Otherwise: Radioactive - Imagine Dragons' }
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
			skills: ['Classy', 'Dangerous']
		},{
			level: 'Fair', adjustment: '+2',
			skills: ['Powerful']
		},{
			level: 'Average', adjustment: '+1',
			skills: []
		},{
			level: 'Unranked',
			skills: ['Brilliant', 'Savvy', 'Treacherous', 'Sensitive']
		},
	]
}

;export default character