import { ProductExplorer } from './components/ProductExplorer/ProductExplorer';
import { PaginationBar } from './components/PaginationBar/PaginationBar';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { API_URL } from './utils/API_URL';

export default function Home() {
  const { protocol, host } = API_URL();

  return (
    <main>
      <ProductExplorer />
      <PaginationBar />
      <ProductGrid protocol={protocol} host={host} />
      <PaginationBar />
    </main>
  );
}
