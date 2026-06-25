# Mr.エージェント - 読書記録サイト

あなたの次の一冊が、ここで見つかる

## 📖 About

Mr.エージェントの書評サイト。率直で具体的な書評を通じて、読者の本選びをサポートします。ビジネス書から小説まで、多様なジャンルの本の本質的な魅力をお届けする読書記録プラットフォームです。

## 🎨 Design Philosophy

**Editorial Minimalism with Japanese Influence**

- 日本の書店や文芸雑誌にインスパイアされた洗練されたタイポグラフィ
- 非対称なレイアウトと余白の美学
- 質の高い紙とインクを思わせる落ち着いた色彩
- 読書体験を豊かにする丁寧なUIデザイン

## 🚀 Features

- **Hero Section** - フィロソフィーステートメントと最新書評のビジュアル表示
- **Book Archive** - メイソンリースタイルのグリッドで全ての書評を表示
- **Genre Filter** - ジャンル別の書評フィルタリング機能
- **Featured Book** - 今月のおすすめ書籍のスポットライト
- **About** - Mr.エージェントの読書スタイルと書評への想い
- **Contact** - SNSフォローとお問い合わせ

## 🛠️ Tech Stack

- **Vite** - 高速ビルドツール
- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティファーストCSS
- **Lucide React** - 美しいアイコンライブラリ

## 📦 Installation

```bash
npm install
```

## 💻 Development

開発サーバーを起動:

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開く

## 🏗️ Build

本番用ビルド:

```bash
npm run build
```

ビルドのプレビュー:

```bash
npm run preview
```

## 🎨 Color Palette

```
Primary:     #1A1A1A  (見出し、本文テキスト)
Secondary:   #2C5F4F  (フォレストグリーン - アクセント)
Accent:      #D4A574  (ウォームゴールド - CTA、評価)
Background:  #FAFAF7  (ウォームオフホワイト - メインBG)
Surface:     #F0EDE8  (カード背景)
Text-muted:  #6B6B6B  (補助テキスト)
Border:      #E0DDD8  (境界線)
```

## 📁 Project Structure

```
src/
├── components/          # Reactコンポーネント
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── GenreFilterSection.tsx
│   ├── BookCard.tsx
│   ├── BookArchiveSection.tsx
│   ├── FeaturedBookSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   └── siteContent.ts   # サイトコンテンツとデータ
├── App.tsx              # メインアプリケーション
├── main.tsx             # エントリーポイント
└── index.css            # グローバルスタイル
```

## ✨ Key Features

### スクロールアニメーション
- IntersectionObserverを使用したスムーズなフェードアップアニメーション
- セクションとカードの段階的な表示

### レスポンシブデザイン
- モバイルファーストアプローチ
- タブレット、デスクトップに最適化されたレイアウト

### ジャンルフィルタリング
- リアルタイムで書評をフィルタリング
- ページリロードなしのスムーズな体験

### アクセシビリティ
- セマンティックHTML
- 適切なカラーコントラスト
- キーボードナビゲーション対応
- スクリーンリーダー対応

## 📝 Content Management

書籍データとサイトコンテンツは `src/lib/siteContent.ts` で一元管理されています。新しい書評を追加するには、このファイルの `books` 配列に新しいエントリーを追加してください。

## 🚀 Deployment

このサイトはVercelでのデプロイに最適化されています:

```bash
npm run build
```

`dist/` フォルダの内容をVercelにデプロイしてください。

## 📄 License

© 2024 Mr.エージェント. All rights reserved.

---

**Built with ❤️ and 📚**
