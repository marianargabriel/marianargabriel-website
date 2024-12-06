import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mariana Gabriel, software developer and web designer offering software development, web design, and freelance services. Need a website, application, or web app? Contact me!"
        />
        <meta
          name="keywords"
          content="Software Developer, Web Design Services, Designer, Software Development, Freelance Developer, Mariana Gabriel, Frontend Developer, React Developer, Mobile App Development, Website Development"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/logos/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
        <title>Mariana Gabriel | Software Developer & Designer</title>
      </head>
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}