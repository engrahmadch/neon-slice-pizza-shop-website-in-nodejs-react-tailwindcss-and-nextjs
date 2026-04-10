import fs from 'node:fs/promises';
import path from 'node:path';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LocationMap from '../components/LocationMap';
import MenuCarousel from '../components/MenuCarousel';
import Story from '../components/Story';

export default function Home({ menu, menuError }) {
  return (
    <>
      <Head>
        <title>Neon Slice Pizza Shop</title>
        <meta
          name="description"
          content="A futuristic pizza-shop experience built with Next.js, React, and Tailwind CSS."
        />
      </Head>
      <Layout>
        <Hero />
        <MenuCarousel items={menu} menuError={menuError} />
        <Story />
        <LocationMap />
        <ContactForm />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let menu = [];
  let menuError = false;

  try {
    const filePath = path.join(process.cwd(), 'data', 'menu.json');
    const rawMenu = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(rawMenu);

    if (Array.isArray(parsed)) {
      menu = parsed;
    } else {
      menuError = true;
    }
  } catch {
    menuError = true;
  }

  return {
    props: {
      menu,
      menuError,
    },
  };
}