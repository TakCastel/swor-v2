import { Category, Forum, Topic, Post } from '../types';

const MOCK_POSTS: Post[] = [
  { id: 101, author: 'JediMasterValorum', authorAvatar: 'https://picsum.photos/seed/jedivalorum/48/48', authorTitle: 'Jedi Master', timestamp: '3 days ago', content: '<p>The initial briefing is complete. All knights and padawans are to report to the hangar bay at 0600. May the Force be with you.</p>' },
  { id: 102, author: 'SithLordDrakon', authorAvatar: 'https://picsum.photos/seed/sithdrakon/48/48', authorTitle: 'Sith Lord', timestamp: '2 days ago', content: '<p>Your pitiful Jedi defenses will crumble.</p>' }
];

const MOCK_TOPICS: Topic[] = [
  { id: 1, title: '[Mission] Briefing on Christophsis', author: 'JediMasterValorum', replies: 25, views: 1230, lastPostInfo: 'by KnightTano, 2h ago', posts: MOCK_POSTS },
];

const MOCK_DATA: Category[] = [
  {
    id: 10,
    name: 'Informations & Administration',
    description: 'Tout ce qu\'il faut savoir avant de commencer.',
    forums: [
      {
        id: 401,
        name: 'Annonces & News',
        description: 'Toutes les nouveautés du forum et de la communauté.',
        type: 'location',
        topicsCount: 50,
        postsCount: 500,
        lastPostInfo: 'par Admin, 1h ago',
      },
      {
        id: 403,
        name: 'Présentations',
        description: 'Présentez-vous à la communauté (obligatoire).',
        type: 'location',
        topicsCount: 300,
        postsCount: 1500,
        lastPostInfo: 'par Newbie, 1h ago',
      },
      {
        id: 406,
        name: 'Création de Personnage',
        description: 'Modèles de fiches et validation de vos personnages.',
        type: 'location',
        topicsCount: 150,
        postsCount: 2000,
        lastPostInfo: 'par Validator, 30m ago',
      }
    ]
  },
  {
    id: 1,
    name: 'La Guerre des Clones (22-19 BBY)',
    description: 'Le conflit galactique opposant la République aux Séparatistes.',
    forums: [
      {
        id: 100,
        name: 'Noyau Galactique',
        description: 'Le centre politique et économique de la galaxie.',
        type: 'region',
        topicsCount: 150,
        postsCount: 3000,
        lastPostInfo: 'par SenatorOrgana, 1h ago',
        subForums: [
          {
            id: 1001,
            name: 'Secteur de Coruscant',
            description: 'Le cœur du Noyau.',
            type: 'sector',
            topicsCount: 80,
            postsCount: 1200,
            lastPostInfo: 'par JediMaster, 30m ago',
            subForums: [
              {
                id: 10011,
                name: 'Coruscant',
                description: 'La planète-cité.',
                type: 'planet',
                coordinates: { x: 50, y: 50 },
                topicsCount: 50,
                postsCount: 800,
                lastPostInfo: 'par Guard, 10m ago',
                subForums: [
                  { id: 100111, name: 'Temple Jedi', description: 'Sanctuaire de l\'Ordre.', type: 'location', topicsCount: 20, postsCount: 300, lastPostInfo: 'par Padawan, 5m ago', topics: MOCK_TOPICS },
                  { id: 100112, name: 'Sénat Galactique', description: 'Arène politique.', type: 'location', topicsCount: 15, postsCount: 250, lastPostInfo: 'par Senator, 2h ago' },
                  { id: 100113, name: 'Bas-fonds de Coruscant', description: 'Le monde souterrain criminel.', type: 'location', topicsCount: 35, postsCount: 600, lastPostInfo: 'par BountyHunter, 4h ago' },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 110,
        name: 'Bordure Extérieure',
        description: 'Zones reculées et fronts de guerre.',
        type: 'region',
        topicsCount: 200,
        postsCount: 4500,
        lastPostInfo: 'par CommanderCody, 2h ago',
        subForums: [
          {
            id: 1101,
            name: 'Secteur Arkanis',
            description: 'Secteur stratégique.',
            type: 'sector',
            topicsCount: 40,
            postsCount: 600,
            lastPostInfo: 'par Clone44, 4h ago',
            subForums: [
              {
                id: 11011,
                name: 'Tatooine',
                description: 'Désert sans loi.',
                type: 'planet',
                coordinates: { x: 85, y: 75 },
                topicsCount: 25,
                postsCount: 400,
                lastPostInfo: 'par Jawa, 1h ago',
                subForums: [
                  { id: 110111, name: 'Mos Eisley', description: 'Port spatial malfamé.', type: 'location', topicsCount: 10, postsCount: 150, lastPostInfo: 'par Han, 2h ago' },
                ]
              }
            ]
          }
        ]
      }
    ],
  },
  {
    id: 2,
    name: 'La Guerre Civile Galactique (0-4 ABY)',
    description: 'La lutte de l\'Alliance Rebelle contre l\'Empire.',
    forums: [
      {
        id: 200,
        name: 'Territoires Impériaux',
        description: 'Régions sous le contrôle de l\'Empereur.',
        type: 'region',
        topicsCount: 100,
        postsCount: 2000,
        lastPostInfo: 'par Officer, 1h ago',
      }
    ]
  },
  {
    id: 3,
    name: 'L\'Après-Empire (5 ABY+)',
    description: 'La reconstruction sous la Nouvelle République.',
    forums: [
      {
        id: 300,
        name: 'Systèmes de la Nouvelle République',
        description: 'Le nouvel ordre démocratique.',
        type: 'region',
        topicsCount: 80,
        postsCount: 1500,
        lastPostInfo: 'par Senator, 2h ago',
      }
    ]
  },
  {
    id: 20,
    name: 'Communauté & Hors-Jeu',
    description: 'Espace d\'échange pour les joueurs.',
    forums: [
      {
        id: 402,
        name: 'Discussions Générales',
        description: 'Parlez de tout et de rien.',
        type: 'location',
        topicsCount: 120,
        postsCount: 2500,
        lastPostInfo: 'par Player1, 15m ago',
      },
      {
        id: 404,
        name: 'Suggestions & Support',
        description: 'Aidez-nous à améliorer le forum.',
        type: 'location',
        topicsCount: 45,
        postsCount: 300,
        lastPostInfo: 'par Staff, 2d ago',
      }
    ]
  },
  {
    id: 30,
    name: 'Espaces Administratifs',
    description: 'Accès réservé au staff.',
    forums: [
      {
        id: 501,
        name: 'QG des Maîtres du Jeu',
        description: 'Coordination des intrigues et scénarios.',
        type: 'location',
        topicsCount: 25,
        postsCount: 400,
        lastPostInfo: 'par MJ_Yoda, 10m ago',
      },
      {
        id: 502,
        name: 'Bureau des Administrateurs',
        description: 'Gestion technique et décisions majeures.',
        type: 'location',
        topicsCount: 15,
        postsCount: 200,
        lastPostInfo: 'par Admin, 1h ago',
      }
    ]
  }
];

export async function getCategories(): Promise<Category[]> {
  return MOCK_DATA;
}

export async function getForumById(id: number, currentSubForums?: Forum[]): Promise<Forum | undefined> {
  const data = currentSubForums || MOCK_DATA.flatMap(c => c.forums);
  
  for (const forum of data) {
    if (forum.id === id) return forum;
    if (forum.subForums) {
      const found = await getForumById(id, forum.subForums);
      if (found) return found;
    }
  }
  return undefined;
}

export async function getTopicById(id: number): Promise<Topic | undefined> {
  return MOCK_TOPICS.find(t => t.id === id);
}

export async function getTravelTime(originId: number, destId: number): Promise<number> {
  return 3600;
}

