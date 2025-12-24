import { notFound } from 'next/navigation';
import { getCategories } from '@/features/forum/data/forum-data';
import EraDetail from '@/features/forum/components/EraDetail';

export default async function EraViewPage({ params }: { params: { eraId: string } }) {
  const eraId = parseInt(params.eraId);
  const categories = await getCategories();
  const era = categories.find(c => c.id === eraId);

  if (!era) notFound();

  return <EraDetail era={era} />;
}
