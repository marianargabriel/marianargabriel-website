'use client';
import React from 'react';

import Head from 'next/head';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import '@/public/styles/footer.css';
import '@/public/styles/navbar.css';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>
        <section className="hero container text-center">
          <div className="col">
            <h1 className="hero-title"><b>Software Developer & Designer</b></h1>
            <p className="hero-text">
              I design and code elegantly and beautifully simple things, and I absolutely love what I do!
            </p>
            <img src="/assets/avatar.svg" alt="My Avatar" className="hero-avatar" />
          </div>
        </section>
        <section className="intro text-center">
          <div className="intro-container">
            <h2 className="intro-heading">Hi, I'm Mariana. Nice to see you here!</h2>
            <p className="intro-text">
              Since I began my journey as a developer and designer more than 4 years ago, I have been interning for
              companies, collaborating with talented individuals, and developing services in the field. I'm quietly
              confident, naturally curious, and working to improve my skills, solving one bug at a time.
            </p>
          </div>
        </section>
        {/* <Tools />
        <RecentWork /> */}
      </main>
      <Footer />
    </>
  );
}