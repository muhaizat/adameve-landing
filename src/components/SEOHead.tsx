import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export default function SEOHead({
  title = 'AdamEve - Simply Complements',
  description = 'AdamEve menawarkan solusi teknologi terkini.',
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
