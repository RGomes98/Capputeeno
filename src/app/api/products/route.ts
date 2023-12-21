import { allProducts } from '@/app/data/mock';

export async function GET() {
  return Response.json(allProducts);
}
