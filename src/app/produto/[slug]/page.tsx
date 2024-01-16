'use client';

import { ProductPage } from '@/components/ProductPage/ProductPage';
import { useContext } from '@/context/Context';
import { notFound } from 'next/navigation';

export default function Product({ params: { slug } }: { params: { slug: string } }) {
  const { productsInitialState } = useContext();

  const product = productsInitialState.find(({ id }) => id === slug);
  if (!product) return notFound();

  return <ProductPage {...product} />;
}
