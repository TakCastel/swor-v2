
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
  subForums?: Forum[];
  topics?: Topic[];
}

export interface Category {
  id: number;
  name: string;
  forums: Forum[];
}
