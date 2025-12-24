import { notFound } from 'next/navigation';
import { getTopicById } from '@/lib/forum-data';

export default async function TopicViewPage({ params }: { params: { topicId: string } }) {
  const topicId = parseInt(params.topicId);
  const topic = await getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl font-cinzel text-yellow-400 mb-6 pb-3 border-b-2 border-yellow-600/50">{topic.title}</h1>
      <div className="space-y-6">
        {topic.posts.map((post) => (
          <div key={post.id} className="flex space-x-4 bg-gray-950/70 border border-gray-800 rounded-lg overflow-hidden">
            <div className="w-48 bg-black/30 p-4 text-center border-r border-gray-800 flex flex-col items-center">
              <img src={post.authorAvatar} alt="Author Avatar" className="w-20 h-20 rounded-full border-2 border-yellow-500 mb-2" />
              <p className="font-bold text-yellow-400">{post.author}</p>
              <p className="text-sm text-gray-400">{post.authorTitle}</p>
            </div>
            <div className="flex-grow p-4">
              <div className="text-xs text-gray-500 border-b border-gray-800 pb-2 mb-3">
                Posted: {post.timestamp}
              </div>
              <div 
                className="prose prose-invert prose-p:text-gray-300 prose-headings:text-yellow-400"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

