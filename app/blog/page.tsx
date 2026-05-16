import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ブログ',
  description:
    'Markdownやファイル変換、ドキュメント管理など、Lydear Tools のツールを使いこなすためのヒントとコラムをお届けします。',
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            ホームに戻る
          </Link>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            ツールを使いこなすためのヒントとコラム
          </p>
        </div>

        <div className="space-y-8">
          {sortedPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-100 pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.id}`} className="block group">
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <span className="text-blue-600 font-medium group-hover:underline">
                  続きを読む →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
