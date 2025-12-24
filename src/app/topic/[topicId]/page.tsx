import { notFound } from 'next/navigation';
import { getTopicById } from '@/features/forum/data/forum-data';
import TopicDetail from '@/features/forum/components/TopicDetail';

export default async function TopicViewPage({ params }: { params: { topicId: string } }) {
  const topicId = parseInt(params.topicId);
  const topic = await getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  return <TopicDetail topic={topic} />;
}
