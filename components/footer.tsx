import Link from "next/link";

const Footer = () => {
  return (
    <footer className="Footer bg-white text-center">
      <div className="py-12 space-y-4">
        <p className="font-mono text-xl opacity-[0.7]">
          Copyright © {new Date().getFullYear()} Wasif Jameel, All rights
          Reserved.
        </p>
        <p className="text-sm text-gray-600">
          Curious how we built Lingrix?{" "}
          <Link
            href="/joruney-of-lingrix"
            className="font-medium text-sky-600 hover:text-sky-700 underline decoration-sky-200"
          >
            Read the Lingrix founder story
          </Link>
          . How we built{" "}
          <Link
            href="/how-toolsify-build"
            className="font-medium text-sky-600 hover:text-sky-700 underline decoration-sky-200"
          >
            Toolsify
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
