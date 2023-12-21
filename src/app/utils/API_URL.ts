import { headers } from 'next/headers';

export type API_URL = { host: string | null; protocol: string };

export const API_URL = () => {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = headers().get('host');

  return { protocol, host };
};
