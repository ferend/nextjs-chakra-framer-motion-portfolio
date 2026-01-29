// lib/data.js

export const profile = {
    name: 'Ferhat Eren Dalçık',
    title: 'Software Developer, IT Infrastructure Specialist',
    avatar: '/images/ferhat2.jpg',
    logo: '/images/ferhat2.jpg',
    location: 'Istanbul, Turkey',
    summary:
        `I hold a background in Business Informatics and have gained practical experience through my career in IT
system and infrastructure administration. As a Software Developer, I specialize in creating scalable backend services,
integrating databases, and enhancing user interfaces, with expertise in C#, .NET, and JavaScript technologies.
My experience includes developing mobile and web applications, implementing microservices, and utilizing
containerization tools.`,

    links: [
        { label: 'GitHub', href: 'https://github.com/ferend', icon: 'github' },
        { label: 'Twitter', href: 'https://twitter.com/erendalcik', icon: 'twitter' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erendalcik/', icon: 'linkedin' },
    ],

    bio: [
        { year: '1999', text: 'Born in Tekirdag, Turkey' },
        { year: '2021', text: "Bachelor's Degree, Business Informatics from Istanbul Bilgi University" },
        { year: '2021 to 2024', text: 'Software Developer at Azerion', href: 'https://www.azerion.com' },
        { year: 'Currently', text: 'Software and IT Infrastructure Specialist at Viennalife', href: 'https://viennalife.com.tr/' }
    ],

    certifications: [
        {
            text: 'AWS Cloud Practitioner by AWS',
            href: 'https://www.coursera.org/account/accomplishments/verify/625ZZOYRJKNY'
        },
        {
            text: 'Ubuntu Linux Professional Certificate by Canonical',
            href: 'https://www.linkedin.com/learning/certificates/051bfb5f3f6f39be5bcc0492b5db11b3c6549404013d6fdd102a300aead0adbf'
        },
        {
            text: 'DevOps Professional Certificate by PagerDuty',
            href: 'https://www.linkedin.com/learning/certificates/f4f6c84a76d13d9bbb5ed0d7feef45c10bd2f98463a96adcd389ee67fdfddcf5'
        },
        {
            text: 'IBM Data Science Orientation',
            href: 'https://www.credly.com/badges/a66754f0-64a5-4220-8d2d-d7e153640737/linked_in'
        }
    ],
    
    

    skills: [
        ['Docker', 'Kubernetes', 'Jenkins'],
        ['Node.js', 'Nginx', 'IIS'],
        ['JavaScript', 'TypeScript', 'C#'],
        ['MySQL', 'MSSQL', 'Oracle'],
        ['Spring Boot', 'Linux Servers', 'HTML5'],
        ['PixiJS', 'WebGL', 'Unity']
    ]
}

// lib/data.js

export const skillIcons = [
    { label: 'Docker', icon: 'SiDocker' },
    { label: 'Kubernetes', icon: 'SiKubernetes' },
    { label: 'Jenkins', icon: 'SiJenkins' },

    { label: 'Node.js', icon: 'SiNodedotjs' },
    { label: 'Nginx', icon: 'SiNginx' },
    { label: 'IIS', icon: 'SiMicrosoft' }, // closest in react-icons

    { label: 'JavaScript', icon: 'SiJavascript' },
    { label: 'TypeScript', icon: 'SiTypescript' },
    { label: 'C#', icon: 'SiCsharp' },

    { label: 'MySQL', icon: 'SiMysql' },
    { label: 'MSSQL', icon: 'SiMicrosoftsqlserver' },
    { label: 'Oracle', icon: 'SiOracle' },

    { label: 'Spring Boot', icon: 'SiSpringboot' },
    { label: 'Linux Servers', icon: 'SiLinux' },
    { label: 'HTML5', icon: 'SiHtml5' },

    { label: 'PixiJS', icon: 'SiPixiv' }, // not perfect; see note below
    { label: 'WebGL', icon: 'SiWebgl' },   // may not exist; fallback handled
    { label: 'Unity', icon: 'SiUnity' }
]


export const projects = [
    {
        title: '.Net Angular App',
        href: null,
        github: 'https://github.com/ferend/dotnet-angular-web-explorer'
    },
    {
        title: 'Gem Hunter',
        href: 'https://gem-hunter.netlify.app/',
        github: 'https://github.com/ferend/gem-hunter'
    },
    {
        title: 'Endless Driver (a MongoDB Realm Integration)',
        href: null,
        github: 'https://github.com/ferend/endless-driver'
    },
    {
        title: 'Black Spider',
        href: 'https://blackspider64.netlify.app/',
        github: 'https://github.com/ferend/BlackSpider64'
    },
    {
        title: 'Word Game',
        href: 'https://wgamejs.netlify.app/',
        github: 'https://github.com/ferend/word-game'
    },
    {
        title: 'Element Pop',
        href: 'https://elementpop.netlify.app/',
        github: 'https://github.com/ferend/element-pop'
    },
    {
        title: 'Multiplayer Car Simulator',
        href: null,
        github: 'https://github.com/ferend/multiplayer-racer'
    },
    {
        title: 'Unity Audio Visualizer',
        href: null,
        github: 'https://github.com/ferend/unity-audio-visualizer'
    }
]

export const works = [
    {
        title: 'Game Distribution',
        href: 'https://gamedistribution.com',
        image: '/images/works/distribution.png'
    },
    {
        title: 'OMG Fashion House',
        href: 'https://play.google.com/store/apps/details?id=com.azerion.games.lol.suprise.dollhouse',
        image: '/images/works/lol.png'
    },
    // {
    //     title: 'Bubble Game Deluxe',
    //     href: 'https://gamedistribution.com/games/bubble-game-3-deluxe',
    //     image: '/images/works/bubble.png'
    // },
    
    {
        title: 'Viennalife',
        href: 'https://viennalife.com.tr/',
        image: '/images/works/vl.png'
    }
]