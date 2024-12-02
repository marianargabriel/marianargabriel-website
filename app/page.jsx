import './globals.css';

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/assets/logos/codeTag.png"
              alt="Mariana Gabriel"
              width={70}
              height={64} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=351924306673" target="_blank">
            <button type="button" className="btn btn-outline-primary btn-talkToMe">
              Talk to Me
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}