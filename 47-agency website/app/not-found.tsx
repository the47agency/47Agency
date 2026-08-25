import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="num">404</span>
      <h1>This page doesn&apos;t exist</h1>
      <p>The page you&apos;re looking for may have been moved or never existed.</p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
