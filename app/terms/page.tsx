import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  description: 'Lydear Tools の利用規約',
};

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">利用規約</h1>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <p className="text-gray-600 leading-relaxed">
            本規約は、Lydear Tools（以下、「当サイト」）および当サイトが提供する
            各種ツールの利用条件を定めるものです。
            当サイトを利用される方は、本規約に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. サービス内容
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、ファイル変換やドキュメント整形などを行うWebツールを提供します。
            当サイトは、利用者への事前の通知なく、提供するツールの内容を変更、追加、
            または終了する場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. 著作権
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトに掲載されている情報・コンテンツの著作権は、
            当サイトまたは正当な権利を有する第三者に帰属します。
            事前の許可なく、これらの情報を利用（複製、改変、配布等）することを禁じます。
            なお、利用者が各ツールに入力・アップロードしたファイルの著作権は、利用者に帰属します。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. 禁止事項
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            当サイトの利用にあたり、以下の行為を禁止します。
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>法令または公序良俗に違反する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>他者の権利（著作権・プライバシー等）を侵害する行為</li>
            <li>不正アクセスやシステムへの攻撃、過度な負荷をかける行為</li>
            <li>権利を有しないファイルやデータを処理する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. 免責事項
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            当サイトおよび各ツールは、可能な限り正確かつ安定した動作を目指しておりますが、
            以下について保証するものではありません。
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>処理結果や変換結果の正確性、完全性、有用性</li>
            <li>ツールの利用によって生じたいかなる損害</li>
            <li>サービスの中断、停止、終了</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            重要なファイルを処理する際は、必ず元のファイルのバックアップを保持したうえでご利用ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. リンク先サイトについて
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトからリンクされている第三者のウェブサイトについて、
            その内容の正確性、合法性等について一切の責任を負いません。
            リンク先のサイトの利用は、利用者自身の責任において行ってください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. 利用規約の変更
          </h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、必要に応じて本規約を変更することができるものとします。
            変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. 準拠法・管轄
          </h2>
          <p className="text-gray-600 leading-relaxed">
            本規約の解釈にあたっては日本法を準拠法とし、当サイトに関する紛争が生じた場合には、
            当サイト運営者の所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">制定日：2026年5月16日</p>
        </section>
      </div>
    </div>
  );
}
