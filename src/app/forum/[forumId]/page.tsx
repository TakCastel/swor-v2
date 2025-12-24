import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getForumById } from '@/lib/forum-data';

export default async function ForumViewPage({ params }: { params: { forumId: string } }) {
  const forumId = parseInt(params.forumId);
  const forum = await getForumById(forumId);

  if (!forum) {
    notFound();
  }

  return (
    <div className="bg-gray-950/70 rounded-lg border border-yellow-800/30 shadow-lg shadow-yellow-500/5">
      <div className="flex justify-between items-center bg-yellow-500 p-3 rounded-t-lg">
        <h2 className="text-2xl font-bold font-cinzel text-black">
          {forum.name}
        </h2>
        <button className="bg-black text-yellow-400 font-semibold px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
          New Topic
        </button>
      </div>
      
      <div className="divide-y divide-gray-800">
        <div className="flex items-center p-3 bg-gray-900 font-bold text-yellow-500/80">
          <div className="flex-grow">Topic</div>
          <div className="w-1/6 text-center hidden md:block">Replies / Views</div>
          <div className="w-1/4 text-sm hidden lg:block">Last Post</div>
        </div>
        
        {forum.topics && forum.topics.length > 0 ? (
          forum.topics.map((topic) => (
            <div key={topic.id} className="flex items-center p-4 hover:bg-gray-900 transition-colors duration-200">
              <div className="flex-grow">
                <Link href={`/topic/${topic.id}`} className="text-lg font-semibold text-yellow-400 hover:underline">
                  {topic.title}
                </Link>
                <p className="text-sm text-gray-400">by {topic.author}</p>
              </div>
              <div className="w-1/6 text-center text-sm hidden md:block">
                <p>{topic.replies} Replies</p>
                <p>{topic.views} Views</p>
              </div>
              <div className="w-1/4 text-sm hidden lg:block">
                <p className="truncate text-gray-300">{topic.lastPostInfo}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-400">
            There are no topics in this forum yet.
          </div>
        )}
      </div>
    </div>
  );
}

