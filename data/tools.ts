import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "shiyosho",
    title: "shiyosho（Office to Markdown 変換ツール）",
    description:
      "Word・Excel・PowerPoint・CSV を、AI/LLM で扱いやすい Markdown に瞬時に変換します。",
    longDescription:
      "shiyosho は、Office 形式のドキュメント（Word / Excel / PowerPoint / CSV）を、ChatGPT や Claude などの LLM、RAG パイプラインで読み込みやすい Markdown へ変換するツールです。見出し・表・リストといった構造を保ったまま変換されるため、変換後の手直しを最小限に抑えられます。すべての処理はブラウザ内で完結し、ファイルがサーバーに送信されることはありません。",
    url: "https://shiyosho.lydear-tools.com/ja",
    icon: "📝",
    color: "from-blue-500 to-indigo-500",
    features: [
      "Word（.docx）・Excel（.xlsx / .xls / .csv）・PowerPoint（.pptx）に対応",
      "見出し・表・リストの構造を保持して変換",
      "ブラウザ内処理でサーバーへ送信せず、待ち時間もなし",
      "LLM・RAG での読み込みに最適化された Markdown を出力",
    ],
    status: "released",
    releaseDate: "2026年5月 公開",
  },
];
