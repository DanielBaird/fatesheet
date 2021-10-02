const character = {
	name: 'Richard "Tricky Dicky" Trickton',
	description: 'Ambitious investigative reporter who recently took over at the Moon Island Mirror, eager to make a name for himself',
	pronouns: 'he/him',
	portrait: './charpics/richard-trickton-nobg.png',
	aspectList: [
		{ aspect: 'Antagonist', value: 'mayor Wilfred Bishop'},
		{ aspect: 'Canon', value: 'The public deserves to know the truth; no matter what that is' },
		{ aspect: 'Tragic Flaw', value: 'Keep your cards close until the time is right' },
		{ aspect: 'Casting', value: 'Alex Pettyfer' },
		{ aspect: 'Childhood', value: 'Claims to be from the neighbouring mainland but nobody has been able to confirm (or deny) exactly where' },
		{ aspect: 'Heritage', value: 'Journalist with grandiose dreams, and a nose for trouble' },
		{ aspect: 'Current Intent', value: "Expose Wilfred as a liar, uncover whatever it is that he’s hiding, report it to the world, and show everyone he was right", fill: 2 }
	],
	skillList: [
		{
			level: 'Superb', adjustment: '+5',
			skills: []
		},{
			level: 'Great', adjustment: '+4',
			skills: ['Savvy']
		},{
			level: 'Good', adjustment: '+3',
			skills: ['Brilliant']
		},{
			level: 'Fair', adjustment: '+2',
			skills: []
		},{
			level: 'Average', adjustment: '+1',
			skills: ['Sensitive']
		},{
			level: 'Unranked',
			skills: ['Classy', 'Dangerous', 'Treacherous', 'Powerful']
		},
	]
}

;export default character