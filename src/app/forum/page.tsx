import { getCategories } from '@/features/forum/data/forum-data';
import ForumIndex from '@/features/forum/components/ForumIndex';

export default async function ForumIndexPage() {
  const categories = await getCategories();
  return <ForumIndex categories={categories} />;
}
