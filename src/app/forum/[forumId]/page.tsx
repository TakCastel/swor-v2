import { notFound } from 'next/navigation';
import { getForumById } from '@/features/forum/data/forum-data';
import ForumDetail from '@/features/forum/components/ForumDetail';

export default async function ForumViewPage({ params }: { params: { forumId: string } }) {
  const forumId = parseInt(params.forumId);
  const forum = await getForumById(forumId);

  if (!forum) {
    notFound();
  }

  return <ForumDetail forum={forum} />;
}
