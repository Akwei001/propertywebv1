import Head from 'next/head';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Menu } from '@/components/Menu';

import Slider from '@/components/Slider';

export default function Home() {
  return (
    <>
      <NavBar />
      <Menu />
      <Slider />
      <CTA />
      <Footer />
    </>
  );
}
