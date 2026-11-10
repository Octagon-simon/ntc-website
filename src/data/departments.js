export const structure = [
  {
    name: 'The Pastorate',
    description:
      'Assistant pastors are allocated to departments as leaders, giving every unit a pastor who carries it.',
  },
  {
    name: 'Student Heads of Department',
    description:
      'Student leaders head each department as HoDs, running the weekly work of the chapel alongside the pastorate.',
  },
  {
    name: 'Every member',
    description:
      'Members serve in a department, and the departments together carry the worship of the chapel.',
  },
]

export const departments = [
  {
    slug: 'choir-music',
    name: 'Choir & Music',
    icon: 'MusicNote',
    summary: 'Congregational worship, choir ministration, hymnal Sabbaths and music training.',
    hod: 'Alexandra Modupe-Ola Roberts',
    oversight: 'Pr. Christian Antwi',
  },
  {
    slug: 'sound',
    name: 'Sound',
    icon: 'Speaker',
    summary: 'The speaking system and the mix that lets every word land in the last row.',
    hod: 'Tanitoluwa Osidele',
    oversight: 'Pr. Christian Antwi',
  },
  {
    slug: 'ict-media',
    name: 'ICT / Media',
    icon: 'Camera',
    summary: 'Sermon recording, photography, live visuals and the chapel\'s online presence.',
    hod: 'Ademola Nelson Agunbiade',
    oversight: 'Pr. Christian Antwi',
    studentLead: 'Samantha Nanshap',
  },
  {
    slug: 'ushering',
    name: 'Ushering',
    icon: 'DoorOpen',
    summary: 'Welcome, seating, order and the first impression every visitor receives.',
    hod: 'Emmanuel Ita Emmanuel',
    oversight: 'Pr. Solomon Nwanokoro',
    units: ['Sanctuary keepers'],
  },
  {
    slug: 'chaplaincy',
    name: 'Chaplaincy',
    icon: 'HandHeart',
    summary: 'Pastoral care, prayer support and visitations to orphanages, prisons and hospitals.',
    hod: 'Liyel Ironbar',
    oversight: 'Pr. Samson Amos Bindas',
  },
  {
    slug: 'health-drama',
    name: 'Health & Drama',
    icon: 'Pulse',
    summary: 'Health outreach and the drama ministrations that carry a message in a story.',
    hod: 'Chisom Favour Munachi',
    oversight: 'Pr. Victor Ikechi Gabriel',
  },
  {
    slug: 'prayer-sabbath-school-evangelism',
    name: 'Prayer, Sabbath School & Evangelism',
    icon: 'HandsPraying',
    summary: 'The weekly prayer meeting, Sabbath School classes and the chapel\'s outreach.',
    hod: 'Oluwapelumi Boluwatife Odukoya',
    oversight: 'Pr. Samson Amos Bindas and Pr. Chinonso Ihesiaba-Wogu',
  },
  {
    slug: 'programs',
    name: 'Programs',
    icon: 'Calendar',
    summary: 'Worship and Praise Nights, cultural Sabbaths, concerts and the chapel calendar.',
    hod: 'Shekinah Naomi Omobude-Aisagbonhi',
    oversight: 'Pr. Victor Ikechi Gabriel',
  },
  {
    slug: 'decoration',
    name: 'Decoration & Sisters\' Coordination',
    icon: 'Wrench',
    summary: 'Dressing the sanctuary for worship and coordinating the sisters of the chapel.',
    hod: 'Kosisochukwu Brigid Aniaya',
    oversight: 'Pr. Bright Paul Afonne',
  },
  {
    slug: 'welfare',
    name: 'Welfare',
    icon: 'HandHeart',
    summary: 'Caring for members in need, and making sure no one worships alone.',
    hod: 'Daniel Iruoghene Otor',
    oversight: 'Pr. Solomon Nwanokoro',
  },
]
