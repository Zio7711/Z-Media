import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'k3e7de3j',
  dataset: 'production',
  apiVersion: '2022-10-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
