'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Lydear Tools のツールは無料で使えますか？',
    answer:
      'はい。Lydear Tools で公開するツールは、基本的に無料でご利用いただけます。会員登録も不要で、ブラウザからすぐにお使いいただけます。',
  },
  {
    question: 'アカウント登録やインストールは必要ですか？',
    answer:
      'いいえ。Lydear Tools のツールはすべてWebブラウザ上で動作します。アプリのインストールやアカウント登録をしなくても、ページにアクセスするだけでご利用いただけます。',
  },
  {
    question: 'アップロードしたファイルはどう扱われますか？',
    answer:
      '各ツールは、可能な限りお使いのブラウザ内でファイルを処理する設計を目指しています。ファイルの取り扱いの詳細は、各ツールの公開時にツールごとのページおよびプライバシーポリシーでご案内します。',
  },
  {
    question: 'スマートフォンやタブレットでも使えますか？',
    answer:
      'はい。Lydear Tools のサイトおよびツールは、スマートフォン・タブレット・パソコンのいずれの画面でも見やすく操作できるよう設計しています。',
  },
  {
    question: 'どんなツールが追加される予定ですか？',
    answer:
      'まずは「Office to Markdown 変換ツール」の公開を予定しています。その後も、ファイル変換・ドキュメント整形・画像処理など、日々の作業に役立つツールを順次追加していく予定です。',
  },
  {
    question: '要望や不具合はどこに連絡すればよいですか？',
    answer:
      'ページ下部のお問い合わせフォームよりご連絡ください。新しいツールのご要望や、お気づきの点などをお寄せいただけると、今後の改善の参考になります。',
  },
];

const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-gray-200 rounded-xl bg-white overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-900">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            FAQ
          </h2>
          <p className="text-lg text-gray-600">よくあるご質問</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
