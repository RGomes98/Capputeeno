import { headers } from 'next/headers';

export const API_URL = () => {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  return { host, protocol };
};
