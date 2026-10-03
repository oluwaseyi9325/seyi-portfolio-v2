import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="container-page">
    <div className="rule flex flex-col gap-3 border-t-2 py-6 text-sm md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="muted">
        {profile.role} — {profile.location}
      </p>
      <button onClick={() => window.scrollTo({ top: 0 })} className="link-underline self-start md:self-auto">
        Back to top ↑
      </button>
    </div>
  </footer>
);

export default Footer;
