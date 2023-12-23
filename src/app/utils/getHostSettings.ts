import { headers } from 'next/headers';

export type GetHostSettings = { host: string | null; protocol: string };

export const getHostSettings = () => {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = headers().get('host');

  return { protocol, host };
};
