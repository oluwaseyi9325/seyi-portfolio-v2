import '@/styles/globals.css'
import '@fontsource-variable/space-grotesk';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import Head from 'next/head';
import { MotionConfig } from 'framer-motion';
import { profile, socials } from '@/data/portfolio';

const title = `${profile.name} | ${profile.role} & React Native Developer`;
const imageUrl = `${profile.siteUrl}${profile.image}`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: `${profile.siteUrl}/`,
  image: imageUrl,
  email: profile.email,
  jobTitle: profile.role,
  description: profile.description,
  sameAs: socials.map((link) => link.url),
  knowsAbout: ["JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Node.js", "Flutter", "GraphQL", "MongoDB"],
  worksFor: { "@type": "Organization", name: "Conclase", url: "https://conclaseint.com/" },
};


export default function App({ Component, pageProps }) {

  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta key="og:url" property="og:url" content={`${profile.siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={`${profile.name} Portfolio`} />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={profile.description} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={profile.twitterHandle} />
        <meta name="twitter:creator" content={profile.twitterHandle} />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={profile.description} />
        <meta name="twitter:image" content={imageUrl} />

        <meta key="description" name="description" content={profile.description} />
        <meta name="author" content={profile.name} />
        <title key="title">{title}</title>
        <meta name="theme-color" content="#efede8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <Component {...pageProps} />
    </MotionConfig>
  );

}
