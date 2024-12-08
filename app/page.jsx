'use client';
import React from 'react';

import Image from 'next/image';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import '@/public/styles/footer.css';
import '@/public/styles/navbar.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero container-fluid text-center">
          <div className="col">
            <h1 className="hero-title"><b>Software Developer & Designer</b></h1>
            <p className="hero-text">
              I design and code elegantly and beautifully simple things, and I absolutely love what I do!
            </p>
            <img src="/assets/avatar.svg" alt="My Avatar" className="hero-avatar" />
          </div>
        </section>

        <section className="intro container-fluid text-center">
          <div className="col">
            <h2 className="intro-heading"><b>Hi, I'm Mariana. Nice to see you here!</b></h2>
            <p className="intro-text">
              Since I began my journey as a developer and designer more than 4 years ago, I have been <br />interning for
              companies, collaborating with talented individuals, and developing services in the field. <br />I'm quietly
              confident, naturally curious, and working to improve my skills, solving one bug at a time.<br />
            </p>
          </div>
        </section>

        <section className="tools-section container text-center">
          <div className="row">
            <div className="tool-card col-12 col-lg-4">
              <div className="tool-card-content">
                <span className="tool-icon-wrapper">
                  <img className="tool-icon" src="/assets/icons/designer.svg" alt="Designer" />
                </span>
                <div className="tool-primary-content">
                  <h4 className="tool-title"><b>Designer</b></h4>
                  <p className="tool-description">I value a simple content structure, clean, and intuitive design patterns.</p>
                </div>
                <div className="tool-secondary-content">
                  <h5 className="tool-subtitle">Things I like designing:</h5>
                  <p>Apps, Web</p>
                </div>
                <div className="tool-tertiary-content">
                  <h5 className="tool-subtitle">Design Tools:</h5>
                  <p>Figma<br />Adobe XD</p>
                </div>
              </div>
            </div>

            <div className="tool-card col-12 col-lg-4">
              <div className="tool-card-content">
                <span className="tool-icon-wrapper">
                  <img className="tool-icon" src="/assets/icons/developer.svg" alt="Developer" />
                </span>
                <div className="tool-primary-content">
                  <h4 className="tool-title"><b>Developer</b></h4>
                  <p className="tool-description">I'm a software developer, but my heart belongs to frontend.</p>
                </div>
                <div className="tool-secondary-content">
                  <h5 className="tool-subtitle">Technologies I master:</h5>
                  <p>HTML, CSS, JS, C, C#, React Native, <br />React.js, Next.js, JAVA</p>
                </div>
                <div className="tool-tertiary-content">
                  <h5 className="tool-subtitle">Databases I used:</h5>
                  <p>Firebase, SQL Server</p>
                </div>
                <div className="tool-quaternary-content">
                  <h5 className="tool-subtitle">Dev Tools:</h5>
                  <p>VS Code<br />Visual Studio<br />Intellij Idea<br />PHP Storm<br />DataGrip<br />SQL SMS<br />StarUML<br />Bootstrap<br />XAMPP<br />GitHub<br />Git<br />GitKraken</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="tool-card-content">
                <span className="tool-icon-wrapper">
                  <img className="tool-icon" src="/assets/icons/freelancer.svg" alt="Freelancer" />
                </span>
                <div className="tool-primary-content">
                  <h4 className="tool-title"><b>Freelancer</b></h4>
                  <p className="tool-description">I'm a freelancer specializing in design and development.</p>
                </div>
                <div className="tool-secondary-content">
                  <h5 className="tool-subtitle">What I do:</h5>
                  <p>Apps Development<br />Web Development<br />Web Maintenance and Restructuring<br />Social Media Management<br />Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="companie-section container-fluid text-center" id="companieSection">
          <h3 className="section-title">
            <strong>Already Familiar with GlobalMighty Development</strong>
          </h3>
          <p className="section-description">Together, we can transform your business!</p>
          <a href="https://globalmighty.pt" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary btn-explore" type="button">
              Explore Our Work
            </button>
          </a>
        </section>

        <section className="work-section container-fluid text-center">
          <h3 className="section-title"><b>My Recent Work</b></h3>
          <p className="section-description">
            Here are a few past design projects I've worked on. Want to see more?{' '}
            <a
              className="work-email-link"
              href="mailto:gabrielrmariana@email.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Email me</b>
            </a>.
          </p>
          <div className="project-cards-container row row-cols-1 row-cols-md-2 g-4 mt-4">
            <div className="col">
              <div className="card h-100 pt-5 pb-5">
                <Image
                  src="/assets/projects/pequenaametista.png"
                  alt="Pequena Ametista"
                  className="card-img-top project-image pequena-ametista"
                  width={240}
                  height={100}
                  layout="intrinsic"  // A propriedade layout ajuda a manter a proporção da imagem
                />
                <div className="card-body mt-2">
                  <p className="card-text">
                    A mobile application for the management of a<br />beauty center, developed in <b>React Native</b>.
                  </p>
                </div>
                <div className="project-type">
                  <i className="bi bi-screwdriver project-type-icon"></i>
                  <p><b>prototyping</b></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 pt-5 pb-5">
                <Image
                  src="/assets/projects/sou.png"
                  alt="SOU"
                  className="card-img-top project-image sou"
                  width={130}
                  height={70}
                  layout="intrinsic"  // Ajusta automaticamente o layout mantendo a proporção
                />
                <div className="card-body mt-2">
                  <p className="card-text">
                    A mobile application for managing a real<br />estate agency, as part of the curriculum internship.
                  </p>
                </div>
                <div className="project-type">
                  <i className="bi bi-lightbulb project-type-icon"></i>
                  <p><b>validating idea</b></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collaborations-section container-fluid text-center">
          <h3 className="section-title"><b>Interested in Collaborating with Me?</b></h3>
          <p className="section-description">
            I'm always available to provide my services or partnership opportunities.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=351924306673"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-primary collaborations-button">
              <i className="bi bi-chat collaborations-icon"></i>
              Start a Conversation
            </button>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}