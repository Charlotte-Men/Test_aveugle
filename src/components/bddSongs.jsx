const sortedQuizzSongs = [
  {
    id: 0,
    title: 'Wake me up before you go go - Wham',
    lyricsFR: 'Tu fais battre mon coeur tu fais s\'élever mon âme très haut quand ton amour a commencé jitterbug dans mon cerveau elle fait bang-bang-bang jusqu\'à ce que mes pieds en fassent autant',
    goodVideo: 'pIgZ7gMze7A',
    wrongVideo: 'XgztfRBc2jM',
    wrongResponse1: 'Shape of my heart - BackStreet Boys',
    wrongResponse2: 'Girls Like You ft. Cardi B - Maroon 5',
  },
 {
    id: 1,
    title: 'Call me - Blondie ',
    lyricsFR: 'Colore-moi de tes couleurs chéri colore ma voiture colore-moi de tes couleurs chéri je sais qui tu es approche-toi sans tes nuances de couleurs je sais d\'où tu viens',
    goodVideo: 'StKVS0eI85I?t=14',
    wrongVideo: '80hMEKlLVgQ',
    wrongResponse1: 'Color me - Barbara Streisand ',
    wrongResponse2: 'Darling - Etta James',
  },
{
    id : 2,
    title: 'I Will Survive - Gloria Gaynor ',
    lyricsFR: 'Ca m\'a pris toute la force que j\'avais pour ne pas m\'effondrer en essayant sans arrêt de réparer difficilement les pièces de mon coeur brisé et j\'ai passé oh tellement de nuits à avoir pitié de moi-même',
    goodVideo: 'gYkACVDFmeg?t=85',
    wrongVideo: 'wQP9XZc2Y_c?t=43',
    wrongResponse1: 'I used to cry - Imany',
    wrongResponse2: 'Somebody new - Joywave',
  },
{
    id: 3,
    title: 'Bohemian Rhapsody - Queen',
    lyricsFR: 'Est-ce que ceci est la réalité est-ce que ceci est juste imaginaire pris dans un glissement de terrain impossible d\'échapper à la réalité ouvre tes yeux lève les vers le ciel et regarde',
    goodVideo: 'fJ9rUzIMcZQ',
    wrongVideo: 'p_ZxDNZjzVk?t=52',
    wrongResponse1: 'Open your eyes - Snow Patrol',
    wrongResponse2: 'Poor Boy - The Black Keys',
  },
{
    id: 4,
    title: 'U can\'t touch this - MC Hammer',
    lyricsFR: 'Danse sur ça et tu deviendras plus mince fais glisser tes hanches juste une minute, faisons tous le boum Boum boum boum ouais tu peux pas toucher à ça',
    goodVideo: 'otCpCn0l4Wo?t=140',
    wrongVideo: 'V0PisGe66mY?t=36',
    wrongResponse1: 'Touch me - Samantha Fox',
    wrongResponse2: 'Boom, Boom, Boom ! - Vengaboys',
  },
{
    id: 5,
    title: 'Wannabe - Spice Girls',
    lyricsFR: 'Peux-tu manier mon amour es-tu sincère je ne serais pas hâtive je te donnerais une chance si tu me tapes sur les nerfs alors je te dirais au revoir je veux hein je veux hein je veux hein je veux vraiment',
    goodVideo: 'BDX8eTORFCo?t=76s',
    wrongVideo: '68ugkg9RePc?t=33s',
    wrongResponse1: 'Love song - The Cure',
    wrongResponse2: 'Take on me - A-ha',
  },
{
    id : 6,
    title : 'The final Countdown - Europe',
    lyricsFR : 'J\'imagine que personne n\'est a blamer nous quittons notre terre les choses seront-elles toujours pareilles c\'est le compte à rebours final',
    goodVideo: '9jK-NcRmVcw?t=103',
    wrongVideo: 'YnopHCL1Jk8?t=99',
    wrongResponse1: 'Countdown - Beyoncé',
    wrongResponse2 : 'Show must go on - Queen'
  },
{
    id: 7,
    title: 'Toxic - Britney Spears',
    lyricsFR: 'Trop haut je ne peux pas redescendre perdant la tête tournant encore et encore me sens-tu maintenant',
    goodVideo: 'LOZuxwVk7TU?t=40',
    wrongVideo: 'XqZsoesa55w?t=27',
    wrongResponse1: 'Sexyback - Justin Timberlake',
    wrongResponse2: 'Say my name - Destiny\'s child',
  },
{
    id: 8,
    title: 'Never gonna give you up - Rick Astley',
    lyricsFR: 'Je ne t\'abandonnerai jamais je ne te laisserai jamais tomber je ne m\'en irais jamais et te déserter je ne te ferai jamais pleurer je ne dirai jamais au revoir je ne dirai jamais de mensonge et te blesser',
    goodVideo: 'dQw4w9WgXcQ?t=42',
    wrongVideo: 'dQw4w9WgXcQ?t=42',
    wrongResponse1: 'Take on Me - Aha',
    wrongResponse2: 'All night long - Lionel Richie',
  },
{
    id: 9,
    title: 'Fantasy - Mariah Carey',
    lyricsFR: 'Oh quand tu marches dans la nuit d\'agréables paroles et de doux regards je suis du genre à ne pas tenir en place bébé je t\'appartient tellement chéri si seulement tu savais toutes les choses qui m\'ont traversé l\'esprit',
    goodVideo: 'qq09UkPRdFY?t=43',
    wrongVideo: 'PA3P1-aSvKQ?t=20',
    wrongResponse1: 'Boyfriend - Justin Bieber',
    wrongResponse2: 'You\'re lookin fine - The Kinks',
  },
{
    id : 10,
    title: 'Dancing with myself - Billy Idol',
    lyricsFR: 'Sur le sol de Tokyo ou dans la ville de Londres pour aller aller avec les sélection des enregistrements et le réflechissement des miroirs je danse avec moi même',
    goodVideo: 'FG1NrQYXjLU?t=19',
    wrongVideo: 'UTzFjw4U8eU?t=44',
    wrongResponse1: 'London Calling - The Clash',
    wrongResponse2: 'A love vibration - Ann Peebles',
  },
{
    id: 11,
    title: 'Don\'t cha - The pussycat dolls',
    lyricsFR: 'Restons amis tu dois la jouer honnête regarde je m\'en fous mais je sais qu\'elle ne voudra pas partager ne souhaiterais-tu pas que ta copine soit aussi bonne que moi',
    goodVideo: 'YNSxNsr4wmA?t=31',
    wrongVideo: 'mOYZaiDZ7BM?t=67',
    wrongResponse1: 'Blured Lines - Robin Thicke',
    wrongResponse2: 'I Want Your Sex – George Michael',
  },
{
    id: 12,
    title: 'Zombie - The Cranberries',
    lyricsFR: 'Une autre tête pend tristement l\'enfant est emporté lentement et la violence cause le silence à qui la faute mais tu vois ce n\'est pas moi ce n\'est pas ma famille',
    goodVideo: '6Ejga4kJUts?t=49',
    wrongVideo: 'kJQP7kiw5Fk?t=83',
    wrongResponse1: 'Sweet Child O\' Mine - Guns N\' Roses',
    wrongResponse2: 'The sound of silence - Simon & Garfunkel',
    },
  ];

export {sortedQuizzSongs};
