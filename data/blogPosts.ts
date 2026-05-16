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
    title: "WordやExcelをMarkdownに変換する5つのメリット",
    excerpt:
      "Officeファイルのままでは扱いにくい場面は意外と多いもの。Markdownに変換することで得られる具体的なメリットを解説します。",
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
