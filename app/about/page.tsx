import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '運営者情報',
  description:
    'Lydear Tools の運営方針、提供するサービス、運営者についてご紹介します。',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">運営者情報</h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Lydear Tools について
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lydear Tools は、毎日の作業の中で生まれる「ちょっとした手間」を、
            ブラウザだけで解決するためのWebツール集です。
            ファイル変換、ドキュメント整形、画像処理など、
            専用ソフトを用意しなくても手早く片付けられる道具を、ひとつずつ揃えています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            私たちが大切にしていること
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ツールはたくさんあっても、「使うまでが面倒」だと結局活用されません。
            Lydear Tools は、次の3つを大切にしてツールを設計・公開しています。
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>すぐ使える</strong>：インストールや登録なしで、
              ページを開いた瞬間から使えること。
            </li>
            <li>
              <strong>分かりやすい</strong>：説明書を読まなくても、
              画面を見れば操作できること。
            </li>
            <li>
              <strong>安心して使える</strong>：ファイルやデータの扱いに配慮し、
              できる限りブラウザ内で完結する設計を目指すこと。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            提供するサービス
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lydear Tools では、用途ごとに独立したWebツールを公開しています。
            現在は次のツールを準備しています。
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Office to Markdown 変換ツール</strong>：
              Word・Excel・PowerPoint を Markdown 形式に変換するツール（準備中）。
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            今後も、ファイル変換やドキュメント整形を中心に、
            日々の作業に役立つツールを順次追加していく予定です。
            最新の情報は
            <Link href="/blog" className="text-blue-600 hover:underline mx-1">
              ブログ
            </Link>
            でもお届けしています。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            運営者
          </h2>
          <table className="w-full text-left text-gray-600">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-900 w-40 align-top">
                  サイト名
                </th>
                <td className="py-3">Lydear Tools</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-900 align-top">
                  運営
                </th>
                <td className="py-3">Lydear Tools 運営チーム</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-900 align-top">
                  サイトURL
                </th>
                <td className="py-3">https://lydear-tools.com</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-900 align-top">
                  事業内容
                </th>
                <td className="py-3">Webツールの企画・開発・運営</td>
              </tr>
              <tr>
                <th className="py-3 pr-4 font-medium text-gray-900 align-top">
                  お問い合わせ
                </th>
                <td className="py-3">
                  サイト内のお問い合わせフォームより受け付けています
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ツールに関するご質問、不具合のご報告、
            「こんなツールが欲しい」というご要望などは、
            トップページ下部の
            <Link href="/#contact" className="text-blue-600 hover:underline mx-1">
              お問い合わせ
            </Link>
            よりお気軽にお寄せください。
            いただいたご意見は、今後のツール開発・改善の参考にさせていただきます。
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">最終更新日：2026年5月16日</p>
        </section>
      </div>
    </div>
  );
}
