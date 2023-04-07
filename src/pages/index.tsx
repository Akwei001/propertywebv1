import Head from 'next/head';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Footer />
    </>
  );
}
