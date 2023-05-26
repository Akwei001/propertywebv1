import Head from 'next/head';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Menu } from '@/components/Menu';
import FeatureSection from '@/components/FeatureSection';
import Slider from '@/components/Slider';
import MenuGrid from '@/components/MenuGrid';

export default function Home() {
  return (
    <>
      <NavBar />
      <Menu />
      <Slider />
      <MenuGrid />
      <FeatureSection />
      <CTA />
      <Footer />
    </>
  );
}
