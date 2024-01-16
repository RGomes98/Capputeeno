import { ProductExplorer } from '@/components/ProductExplorer/ProductExplorer';
import { PaginationBar } from '@/components/PaginationBar/PaginationBar';
import { ProductGrid } from '@/components/ProductGrid/ProductGrid';
import { getHostSettings } from '@/utils/getHostSettings';

export default function Home() {
  const { protocol, host } = getHostSettings();

  return (
    <main>
      <ProductExplorer />
      <PaginationBar />
      <ProductGrid protocol={protocol} host={host} />
      <PaginationBar />
    </main>
  );
}
