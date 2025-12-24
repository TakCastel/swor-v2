import Link from 'next/link';
import { getCategories } from '@/lib/forum-data';

export default async function ForumIndexPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.id} className="bg-gray-950/70 rounded-lg border border-yellow-800/30 shadow-lg shadow-yellow-500/5">
          <h2 className="text-2xl font-bold font-cinzel text-black bg-yellow-500 p-3 rounded-t-lg">
            {category.name}
          </h2>
          <div className="divide-y divide-gray-800">
            {category.forums.map((forum) => (
              <div key={forum.id} className="flex items-center p-4 hover:bg-gray-900 transition-colors duration-200">
                <div className="w-12 text-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <Link href={`/forum/${forum.id}`} className="text-xl font-semibold text-yellow-400 hover:underline">
                    {forum.name}
                  </Link>
                  <p className="text-gray-400">{forum.description}</p>
                </div>
                <div className="w-1/6 text-center text-sm hidden md:block">
                  <p>{forum.topicsCount} Topics</p>
                  <p>{forum.postsCount} Posts</p>
                </div>
                <div className="w-1/4 text-sm hidden lg:block">
                  <p className="truncate text-gray-300">Last Post:</p>
                  <p className="truncate text-gray-400">{forum.lastPostInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

