export interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  authorTitle: string;
  timestamp: string;
  content: string;
}

export interface Topic {
  id: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastPostInfo: string;
  posts: Post[];
}

export interface Forum {
  id: number;
  name: string;
  description: string;
  topicsCount: number;
  postsCount: number;
  lastPostInfo: string;
  type: 'category' | 'region' | 'sector' | 'planet' | 'location';
  parentId?: number;
  subForums?: Forum[];
  topics?: Topic[];
  coordinates?: { x: number; y: number }; // Pour la carte
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  forums: Forum[];
}

export interface Character {
  id: string;
  name: string;
  currentLocationId: number;
  isTraveling: boolean;
  travelEndTime?: string;
  travelOriginId?: number;
  travelDestinationId?: number;
}

