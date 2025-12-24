import { Category, Forum, Topic, Post } from '../models/forum.model';

const MOCK_POSTS: Post[] = [
  { id: 101, author: 'JediMasterValorum', authorAvatar: 'https://picsum.photos/seed/jedivalorum/48/48', authorTitle: 'Jedi Master', timestamp: '3 days ago', content: '<p>The initial briefing is complete. All knights and padawans are to report to the hangar bay at 0600. May the Force be with you.</p>' },
  { id: 102, author: 'SithLordDrakon', authorAvatar: 'https://picsum.photos/seed/sithdrakon/48/48', authorTitle: 'Sith Lord', timestamp: '2 days ago', content: '<p>Your pitiful Jedi defenses will crumble. The Outer Rim will soon belong to the Sith Empire. My fleet awaits my command.</p>' },
  { id: 103, author: 'CaptainEvaRex', authorAvatar: 'https://picsum.photos/seed/evarex/48/48', authorTitle: 'Rebel Captain', timestamp: '1 day ago', content: '<p>We\'ve secured the intel. The Imperial base on Lothal is vulnerable. It\'s time to strike. For the Rebellion!</p>' }
];

const MOCK_TOPICS: Topic[] = [
  { id: 1, title: '[Mission] Briefing on Christophsis', author: 'JediMasterValorum', replies: 25, views: 1230, lastPostInfo: 'by KnightTano, 2 hours ago', posts: MOCK_POSTS.slice(0, 2) },
  { id: 2, title: 'Infiltration of the Imperial Command', author: 'CaptainEvaRex', replies: 42, views: 2500, lastPostInfo: 'by RogueSpectre, 5 hours ago', posts: [MOCK_POSTS[2]] },
  { id: 3, title: 'Marketplace - Droid Parts', author: 'MechanicZann', replies: 12, views: 850, lastPostInfo: 'by JawaTrader, 1 hour ago', posts: [] },
  { id: 4, title: 'The Shadow Dominion Rises', author: 'SithLordDrakon', replies: 66, views: 6666, lastPostInfo: 'by AcolyteMalice, 15 minutes ago', posts: [] },
];

const MOCK_FORUMS: Forum[] = [
    // Clone Wars
    { id: 101, name: 'Coruscant - Galactic Senate', description: 'Diplomacy, intrigue, and political maneuvering in the heart of the Republic.', topicsCount: 15, postsCount: 302, lastPostInfo: 'by SenatorOrgana, 1h ago', topics: [MOCK_TOPICS[0]] },
    { id: 102, name: 'Outer Rim Sieges', description: 'The front lines of the war. Battlefields where clones and droids clash.', topicsCount: 22, postsCount: 543, lastPostInfo: 'by CommanderCody, 3h ago', topics: [] },
    // Civil War
    { id: 201, name: 'Rebel Alliance - Secret Bases', description: 'Plan strikes, gather intel, and fight for freedom from hidden locations.', topicsCount: 31, postsCount: 812, lastPostInfo: 'by CaptainEvaRex, 5h ago', topics: [MOCK_TOPICS[1]] },
    { id: 202, name: 'Galactic Empire - Star Destroyers', description: 'Serve the Emperor and maintain order in the galaxy from the bridge of a warship.', topicsCount: 28, postsCount: 750, lastPostInfo: 'by AdmiralPiett, 2h ago', topics: [] },
    // Post-Empire
    { id: 301, name: 'New Republic Senate', description: 'Forge a new government and deal with threats from the remnants of the Empire.', topicsCount: 18, postsCount: 410, lastPostInfo: 'by ChancellorMonMothma, 6h ago', topics: [] },
    { id: 302, name: 'Imperial Remnant Warlords', description: 'Carve out your own fiefdom in the chaotic Outer Rim.', topicsCount: 25, postsCount: 680, lastPostInfo: 'by GrandMoffGideon, 4h ago', topics: [MOCK_TOPICS[3]] },
];

const MOCK_DATA: Category[] = [
  {
    id: 1,
    name: 'Informations Générales',
    forums: [
      { id: 1, name: 'Annonces & Nouveautés', description: 'Stay updated with the latest news and announcements about the forum.', topicsCount: 5, postsCount: 50, lastPostInfo: 'by Admin, 1 day ago' },
      { id: 2, name: 'Guides & Tutoriels', description: 'Learn the ropes of roleplaying on our forum.', topicsCount: 10, postsCount: 120, lastPostInfo: 'by Moderator, 3 days ago' },
    ],
  },
  {
    id: 2,
    name: 'La Guerre des Clones',
    forums: MOCK_FORUMS.filter(f => f.id >= 101 && f.id <= 199),
  },
  {
    id: 3,
    name: 'La Guerre Civile Galactique',
    forums: MOCK_FORUMS.filter(f => f.id >= 201 && f.id <= 299),
  },
  {
    id: 4,
    name: "L'Après-Empire (Légendes)",
    forums: MOCK_FORUMS.filter(f => f.id >= 301 && f.id <= 399),
  },
   {
    id: 5,
    name: 'Hors-Jeu',
    forums: [
      { id: 501, name: 'Discussions Générales', description: 'Talk about anything Star Wars or otherwise.', topicsCount: 102, postsCount: 2304, lastPostInfo: 'by FanBoy22, 5m ago' },
      { id: 502, name: 'Présentations', description: 'Introduce yourself to the community.', topicsCount: 250, postsCount: 1500, lastPostInfo: 'by NewbieWan, 15m ago' },
    ],
  },
];

export async function getCategories(): Promise<Category[]> {
  return MOCK_DATA;
}

export async function getForumById(id: number): Promise<Forum | undefined> {
  for (const category of MOCK_DATA) {
    const forum = category.forums.find(f => f.id === id);
    if (forum) return forum;
  }
  return undefined;
}

export async function getTopicById(id: number): Promise<Topic | undefined> {
  return MOCK_TOPICS.find(topic => topic.id === id);
}

