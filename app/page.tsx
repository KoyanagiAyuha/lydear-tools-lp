'use client';

import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Zap,
  ShieldCheck,
  Smartphone,
  Wallet,
  MousePointerClick,
  FileText,
  Sparkles,
} from 'lucide-react';

const TOOL_URL = 'https://shiyosho.lydear-tools.com/ja';

const CONTACT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScJzskywC5sYRDro_qwcDbi-4wLLClJ2OcdeeUeQOWjyy9FfA/viewform';

const features = [
  {
    icon: Zap,
    title: 'インストール不要',
    description:
      'ブラウザでページを開くだけ。アプリのダウンロードやセットアップは必要ありません。',
  },
  {
    icon: Wallet,
    title: '無料で使える',
    description:
      '公開するツールは基本無料。会員登録なしで、思い立ったときにすぐ使えます。',
  },
  {
    icon: ShieldCheck,
    title: '安心して使える設計',
    description:
      '可能な限りブラウザ内でファイルを処理する設計を目指し、扱いに配慮しています。',
  },
  {
    icon: Smartphone,
    title: 'スマホでもPCでも',
    description:
      'パソコン・スマートフォン・タブレット、どの画面でも使いやすく整えています。',
  },
];

const guideSteps = [
  {
    icon: MousePointerClick,
    title: '使いたいツールを開く',
    description:
      '一覧から目的のツールを選び、ページを開きます。ログインや設定は不要です。',
  },
  {
    icon: FileText,
    title: 'ファイルや内容を入力する',
    description:
      '変換したいファイルを選んだり、テキストを貼り付けたりするだけで準備完了です。',
  },
  {
    icon: Sparkles,
    title: '結果を受け取る',
    description:
      'ツールが処理した結果をその場で確認し、コピーやダウンロードして活用できます。',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-gray-50 to-white" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            AI時代のドキュメント作業を、もっと軽やかに
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6">
            Lydear Tools
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Office を Markdown に変換し、AI で扱いやすく——
            <br className="hidden sm:block" />
            ブラウザだけで完結する、シンプルなWebツールを公開しています。
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              ツールを使ってみる
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
            <a
              href="#tools"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              ツールの詳細を見る
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-[2px] h-12 bg-gradient-to-b from-gray-400 to-transparent rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-xs text-gray-400 tracking-wider font-light"
            >
              SCROLL
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lydear Tools とは
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lydear Tools は、毎日の作業でちょっと困る「めんどうな手間」を、
              ブラウザだけで解決するためのWebツール集です。
              専用ソフトを買ったり、複雑な設定をしたりせずに、
              必要なときに必要なツールへアクセスして、すぐに使える——
              そんなシンプルな道具箱を目指しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Features
            </h2>
            <p className="text-lg text-gray-600">
              Lydear Tools が大切にしている4つのこと
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="px-6 max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Tools
            </h2>
            <p className="text-lg text-gray-600">
              ラインナップは順次追加していきます
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {tools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              使い方
            </h2>
            <p className="text-lg text-gray-600">
              3ステップで、すぐに使えます
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guideSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <step.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              ご質問・ご要望をお聞かせください
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <a
                href={CONTACT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
              >
                <Mail className="mr-2" size={20} />
                お問い合わせフォームを開く
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
            </motion.div>

            <p className="mt-8 text-sm text-gray-500">
              新しいツールのご要望や、お気づきの点など、お気軽にご連絡ください
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
