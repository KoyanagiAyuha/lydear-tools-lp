# Lydear Tools LP

`lydear-tools.com` のランディングページ。Google AdSense 審査用のメインドメインサイトです。
実際のツールはサブドメイン（例：`office-to-md.lydear-tools.com`）で順次公開予定です。

## 技術スタック

- Next.js 15 (App Router) / React 19
- TypeScript
- Tailwind CSS v4
- framer-motion / lucide-react
- react-markdown（ブログ記事のレンダリング）

## 開発

```bash
pnpm install
pnpm dev
```

`http://localhost:3000` で確認できます。

## ビルド

```bash
pnpm build
pnpm start
```

## 構成

```
app/
  page.tsx          トップページ（Hero / Tools / 使い方 / FAQ / Blog / Contact）
  blog/             ブログ一覧・記事ページ
  about/            運営者情報
  privacy/          プライバシーポリシー
  terms/            利用規約
  sitemap.ts        サイトマップ
  robots.ts         robots.txt
components/         UI コンポーネント
data/
  tools.ts          掲載ツールの定義
  blogPosts.ts      ブログ記事のメタデータ
  blog-posts/*.md   ブログ記事本文（Markdown）
public/
  ads.txt           Google AdSense 用 ads.txt
```

## コンテンツの追加方法

### ツールを追加・公開する

`data/tools.ts` の `tools` 配列に追記します。公開済みにする場合は
`status` を `'released'` に変更し、`url` に実際のサブドメインを設定してください。

### ブログ記事を追加する

1. `data/blog-posts/` に Markdown ファイルを追加
2. `data/blogPosts.ts` の `blogPosts` 配列にメタデータを追記

## メモ

- `public/ads.txt` の publisher ID は AdSense アカウント単位の値です。
  審査に出すアカウントの publisher ID と一致しているか必ず確認してください。
- お問い合わせは Google フォームを利用しています（`app/page.tsx` の `CONTACT_FORM_URL`）。
