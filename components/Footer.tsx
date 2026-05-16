import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              運営者情報
            </Link>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              ブログ
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              利用規約
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            © {currentYear} Lydear Tools. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
