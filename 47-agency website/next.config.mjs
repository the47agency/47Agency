/** @type {import('next').NextConfig} */
const supabaseHostname = (() => {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
    return new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname;
  } catch {
    return null;
  }
})();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      ...(supabaseHostname
        ? [{ protocol: 'https', hostname: supabaseHostname }]
        : []),
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
};

export default nextConfig;
