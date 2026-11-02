import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Mind Power Academy';
const BASE_URL = 'https://mindpoweracademy.vercel.app';

/**
 * Per-route document metadata.
 *
 * Open Graph and Twitter tags are intentionally NOT set here — they are static
 * in index.html so that crawlers which do not execute JavaScript (WhatsApp,
 * Facebook) still see a valid preview.
 */
export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
