'use client';
import React from 'react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import '@/public/styles/footer.css';
import '@/public/styles/navbar.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}