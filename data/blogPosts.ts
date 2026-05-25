export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  contentFile: string; // マークダウンファイルのパス
}

export const blogPosts: BlogPost[] = [
  {
    id: "shiyosho-usage-guide",
    title: "shiyosho の使い方ガイド｜Office を AI 用 Markdown に変換する",
    excerpt:
      "Word・Excel・PowerPoint を Markdown に変換できるツール「shiyosho」の使い方を、画面と一緒に解説します。AI で扱いやすい資料の整え方も紹介。",
    date: "2026-05-26",
    category: "使い方ガイド",
    readTime: "7分",
    author: "Lydear Tools 編集部",
    contentFile: "shiyosho-usage-guide.md",
  },
  {
    id: "ai-with-office-documents",
    title: "ChatGPT・Claude に Office 資料を読み込ませて活用する方法",
    excerpt:
      "Word や Excel をそのまま AI に渡すとうまく読み取ってくれない——その理由と、Markdown を間に挟む実践的なワークフローを紹介します。",
    date: "2026-05-24",
    category: "AI活用",
    readTime: "8分",
    author: "Lydear Tools 編集部",
    contentFile: "ai-with-office-documents.md",
  },
  {
    id: "excel-to-ai-with-markdown",
    title: "Excel の表を AI で活用するには？Markdown 変換が効くシーン",
    excerpt:
      "Excel の表を AI にうまく扱ってもらうには、Markdown のテーブル形式が効果的です。具体的なシーンと渡し方のコツをまとめました。",
    date: "2026-05-22",
    category: "AI活用",
    readTime: "7分",
    author: "Lydear Tools 編集部",
    contentFile: "excel-to-ai-with-markdown.md",
  },
  {
    id: "what-is-markdown",
    title: "Markdownとは？はじめての人向けに基本記法をやさしく解説",
    excerpt:
      "見出し・箇条書き・リンクなど、Markdownの基本記法を初心者向けにまとめました。これさえ押さえれば、ドキュメント作成がぐっと楽になります。",
    date: "2026-05-10",
    category: "基礎知識",
    readTime: "6分",
    author: "Lydear Tools 編集部",
    contentFile: "what-is-markdown.md",
  },
  {
    id: "why-convert-office-to-markdown",
    title: "WordやExcelをMarkdownに変換する6つのメリット",
    excerpt:
      "Officeファイルのままでは扱いにくい場面は意外と多いもの。AIとの相性のよさを含め、Markdownに変換することで得られる具体的なメリットを解説します。",
    date: "2026-05-12",
    category: "活用事例",
    readTime: "7分",
    author: "Lydear Tools 編集部",
    contentFile: "why-convert-office-to-markdown.md",
  },
  {
    id: "document-management-with-markdown",
    title: "ドキュメント管理をMarkdownで効率化する3つのコツ",
    excerpt:
      "チームのナレッジが散らばっていませんか？Markdownを軸にしたドキュメント管理で、検索性と更新のしやすさを両立する方法を紹介します。",
    date: "2026-05-13",
    category: "仕事術",
    readTime: "7分",
    author: "Lydear Tools 編集部",
    contentFile: "document-management-with-markdown.md",
  },
  {
    id: "markdown-app-guide",
    title: "Notion・Obsidian・GitHubで活きるMarkdown活用術",
    excerpt:
      "Markdownは多くのアプリで共通して使える「ポータブルな書式」です。代表的なツールごとの活用ポイントをまとめました。",
    date: "2026-05-14",
    category: "ツール紹介",
    readTime: "6分",
    author: "Lydear Tools 編集部",
    contentFile: "markdown-app-guide.md",
  },
  {
    id: "office-file-troubles",
    title: "「Officeファイルが重い・レイアウトが崩れる」をMarkdown変換で解決する",
    excerpt:
      "環境によって表示が崩れる、ファイルが重くて共有しづらい。そんなOfficeファイルの悩みを、Markdown変換で軽くする考え方を紹介します。",
    date: "2026-05-15",
    category: "活用事例",
    readTime: "6分",
    author: "Lydear Tools 編集部",
    contentFile: "office-file-troubles.md",
  },
];
