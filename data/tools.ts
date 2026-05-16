import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "office-to-markdown",
    title: "Office to Markdown 変換ツール",
    description:
      "Word・Excel・PowerPoint などの Office ファイルを、きれいな Markdown に変換します。",
    longDescription:
      "Word（.docx）・Excel（.xlsx）・PowerPoint（.pptx）といった Office 形式のドキュメントを、ブラウザ上で Markdown 形式に変換するツールです。見出し・箇条書き・表・リンクなどの構造をできる限り保持したまま変換するため、ブログ記事や技術ドキュメント、ナレッジベースへの転記がスムーズになります。ファイルはブラウザ内で処理されるため、サーバーにアップロードせずに利用できる設計を予定しています。",
    url: "https://office-to-md.lydear-tools.com",
    icon: "📝",
    color: "from-blue-500 to-indigo-500",
    features: [
      "Word / Excel / PowerPoint に対応",
      "見出し・表・リスト構造を保持",
      "インストール不要・ブラウザだけで完結",
      "変換結果をワンクリックでコピー",
    ],
    status: "coming-soon",
    releaseDate: "2026年内 公開予定",
  },
];
