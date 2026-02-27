import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="logo">⚡ CodeReview AI</div>

        <nav>
          <a href="#">Features</a>
          <a href="#">Docs</a>
          <Link to="/Sign"> <button className="ghost">Sign in</button></Link>
         
          <button className="primary">Get Started</button>
        </nav>
      </header>

      <section className="hero">
        <h1>
          Generate & Test <br />
          <span>Perfect Code</span>
        </h1>

        <p>
          Transform your ideas into production-ready code with AI. Review,
          optimize and ship faster than ever.
        </p>

        <div className="actions">
          <Link to="/review">
            <button className="primary big">Start Reviewing →</button>
          </Link>
          <button className="outline">▶ Watch Demo</button>
        </div>

      </section>
    </>
  );
}
