import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo-link">
              <Image src="/logo.png" alt="47 Agency logo" width={32} height={32} />
              <span className="logo-word">47 Agency</span>
            </Link>
            <p>Strategy · Creative · Growth</p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/case-studies">Case Studies</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Request a Proposal</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="mailto:hello@47agency.com">[OFFICIAL EMAIL]</a>
            <a href="#">[INSTAGRAM LINK]</a>
            <a href="#">[LINKEDIN LINK]</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 47 Agency. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
