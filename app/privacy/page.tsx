import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'Lydear Tools のプライバシーポリシー',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        プライバシーポリシー
      </h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <p className="text-gray-600 leading-relaxed">
            Lydear Tools（以下、「当サイト」）は、利用者のプライバシーを尊重し、
            個人情報および利用情報を適切に取り扱うことをお約束します。
            本ポリシーは、当サイトおよび当サイトが提供するツールにおける
            情報の取り扱いについて定めるものです。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            取り扱う情報について
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            当サイトでは、サービス提供および改善のために、以下の情報を取得する場合があります。
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>アクセス状況に関する情報（閲覧ページ、滞在時間、参照元など）</li>
            <li>利用環境に関する情報（ブラウザの種類、OS、画面サイズなど）</li>
            <li>お問い合わせフォームから送信された情報（お名前、メールアドレス、内容など）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            ツールで扱うファイルについて
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトが提供する各ツールは、利用者がアップロード・入力したファイルやデータを、
            可能な限り利用者のブラウザ内で処理する設計を目指しています。
            ファイルの具体的な取り扱い方法は、ツールごとに異なる場合があるため、
            各ツールのページに記載される説明もあわせてご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            クッキー（Cookie）について
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            当サイトでは、より良いサービスを提供するためにクッキーを使用しています。
            クッキーとは、ウェブサイトが利用者のデバイスに保存する小さなテキストファイルです。
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            クッキーの使用目的
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>ウェブサイトの基本的な機能の提供</li>
            <li>ウェブサイトの利用状況の分析（Google Analytics）</li>
            <li>広告の配信とパーソナライゼーション（Google AdSense）</li>
            <li>利用者の設定の保存</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            クッキーの管理
          </h3>
          <p className="text-gray-600 leading-relaxed">
            利用者は、ブラウザの設定によりクッキーを無効にすることができます。
            ただし、クッキーを無効にすると、当サイトの一部の機能が正常に動作しない場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            広告について
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトでは、第三者配信の広告サービス（Google AdSense）を利用しています。
            広告配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。
            Cookieを無効にする設定およびGoogleアドセンスに関する詳細は
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline mx-1"
            >
              広告 – ポリシーと規約 – Google
            </a>
            をご覧ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            アクセス解析について
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用する場合があります。
            Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
            トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            個人情報の取り扱い
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトでは、お問い合わせフォームから送信された情報（お名前、メールアドレス等）を、
            お問い合わせ対応のためのみに利用し、それ以外の目的では使用いたしません。
            また、ご本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            免責事項
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトおよび各ツールの利用によって生じたいかなる損害についても、
            当サイトは責任を負いかねます。
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、
            移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            当サイトの情報について、可能な限り正確な情報を提供するように努めておりますが、
            正確性や安全性を保証するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            プライバシーポリシーの変更
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、
            本ポリシーの内容を適宜見直し、その改善に努めます。
            修正された最新のプライバシーポリシーは、常に本ページにて開示されます。
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">制定日：2026年5月16日</p>
        </section>
      </div>
    </div>
  );
}
