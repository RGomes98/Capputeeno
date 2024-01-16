import { allProducts } from '@/data/mock';

export async function GET() {
  return Response.json(allProducts);
}
