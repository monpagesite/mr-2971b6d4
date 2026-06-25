export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  excerpt: string;
  readDate: string;
  readTime: string;
  fullReview?: string;
}

export interface SiteContent {
  hero: {
    badge: string;
    headline: string;
    subtext: string;
    primaryCTA: string;
    secondaryCTA: string;
    featuredBooks: Book[];
  };
  bookArchive: {
    title: string;
    subtitle: string;
    loadMoreText: string;
  };
  genreFilter: {
    label: string;
    genres: string[];
  };
  featuredBook: {
    badge: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    coverUrl: string;
    description: string;
    keyPoints: string[];
    ctaText: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    content: string[];
    stats: {
      label: string;
      value: string;
    }[];
    philosophy: {
      title: string;
      points: string[];
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    followLabel: string;
    social: {
      name: string;
      url: string;
      icon: string;
    }[];
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  books: Book[];
}

export const siteContent: SiteContent = {
  hero: {
    badge: 'Mr.エージェント の読書記録',
    headline: 'あなたの次の一冊が、\nここで見つかる',
    subtext: '率直で具体的な書評を通じて、あなたの本選びをサポートします。\nビジネス書から小説まで、読んだ本の本質的な魅力をお届けします。',
    primaryCTA: '書評を見る',
    secondaryCTA: 'おすすめの一冊 →',
    featuredBooks: [] // Will be populated from books array
  },
  bookArchive: {
    title: '書評アーカイブ',
    subtitle: 'これまでに読んだ本の感想と評価',
    loadMoreText: 'さらに読み込む'
  },
  genreFilter: {
    label: 'ジャンルから探す',
    genres: ['すべて', 'ビジネス', '小説', '自己啓発', 'エッセイ', '歴史', '科学', 'アート', 'その他']
  },
  featuredBook: {
    badge: '今月のおすすめ',
    title: '人を動かす',
    author: 'デール・カーネギー',
    genre: 'ビジネス',
    rating: 5,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    description: '80年以上読み継がれる不朽の名著。人間関係の本質を、実例を交えながら具体的に説く一冊。現代でも色褪せない普遍的な原則が詰まっています。',
    keyPoints: [
      '相手の立場に立って考える重要性',
      '批判せず、誠実な評価を与える',
      '人に好かれる6つの原則',
      'リーダーシップの基本原則'
    ],
    ctaText: '詳しく見る'
  },
  about: {
    badge: 'About',
    title: 'Mr.エージェントについて',
    subtitle: '本との対話を通じて、あなたの読書体験を豊かにする',
    content: [
      '本を読むことは、著者との対話です。その対話を通じて得た気づきや学びを、できるだけ率直に、具体的にお伝えすることを心がけています。',
      '書評を書く際は、本の要約ではなく「この本がどう心を動かしたか」「どんな場面で役立つか」を重視しています。読者の方が次の一冊を選ぶ際の、信頼できる羅針盤でありたいと思っています。',
      'ビジネス書、自己啓発書、小説、エッセイまで、ジャンルを問わず手に取ります。偏りのない視点で、それぞれの本が持つ固有の価値をお届けします。'
    ],
    stats: [
      { label: '読了冊数', value: '200+' },
      { label: '書評記事', value: '150+' },
      { label: '読書年数', value: '15年' }
    ],
    philosophy: {
      title: '書評への想い',
      points: [
        '忖度のない率直な評価',
        '具体的なエピソードと引用',
        '読者目線での実用性重視',
        '多様なジャンルへの敬意'
      ]
    }
  },
  contact: {
    badge: 'Contact',
    title: 'お気軽にご連絡ください',
    subtitle: '書評のリクエストやご質問など、お待ちしています',
    followLabel: 'Follow',
    social: [
      { name: 'Twitter', url: '#', icon: 'twitter' },
      { name: 'Instagram', url: '#', icon: 'instagram' },
      { name: 'Note', url: '#', icon: 'book-open' }
    ]
  },
  footer: {
    tagline: 'あなたの次の一冊が、ここで見つかる',
    copyright: '© 2024 Mr.エージェント. All rights reserved.'
  },
  books: [
    {
      id: '1',
      title: '人を動かす',
      author: 'デール・カーネギー',
      genre: 'ビジネス',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
      excerpt: '80年以上読み継がれる不朽の名著。人間関係の原則を実例とともに学べる一冊。批判せず、誠実に評価することの大切さが心に響きます。',
      readDate: '2024年1月',
      readTime: '8時間'
    },
    {
      id: '2',
      title: 'エッセンシャル思考',
      author: 'グレッグ・マキューン',
      genre: 'ビジネス',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
      excerpt: '「より少なく、しかしより良く」を実践するための思考法。本当に重要なことだけに集中する勇気を与えてくれる良書です。',
      readDate: '2024年1月',
      readTime: '6時間'
    },
    {
      id: '3',
      title: 'ノルウェイの森',
      author: '村上春樹',
      genre: '小説',
      rating: 4,
      coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      excerpt: '喪失と成長を描いた青春小説。村上春樹の繊細な文体が、登場人物の心の揺れを丁寧に映し出します。読後の余韻が深い作品。',
      readDate: '2024年2月',
      readTime: '10時間'
    },
    {
      id: '4',
      title: '7つの習慣',
      author: 'スティーブン・R・コヴィー',
      genre: '自己啓発',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
      excerpt: '自己啓発書の金字塔。原則中心のアプローチで、人生の羅針盤となる一冊。「影響の輪」の概念は今でも実践しています。',
      readDate: '2024年2月',
      readTime: '12時間'
    },
    {
      id: '5',
      title: 'サピエンス全史',
      author: 'ユヴァル・ノア・ハラリ',
      genre: '歴史',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
      excerpt: '人類史を俯瞰する壮大な物語。認知革命・農業革命・科学革命という切り口で、人類の本質に迫る知的興奮に満ちた一冊。',
      readDate: '2024年3月',
      readTime: '15時間'
    },
    {
      id: '6',
      title: 'ゼロ秒思考',
      author: '赤羽雄二',
      genre: 'ビジネス',
      rating: 4,
      coverUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      excerpt: 'A4メモ書きで思考を整理する実践的メソッド。シンプルだからこそ続けられる。頭の中のモヤモヤを可視化する習慣が身につきました。',
      readDate: '2024年3月',
      readTime: '4時間'
    },
    {
      id: '7',
      title: 'コンビニ人間',
      author: '村田沙耶香',
      genre: '小説',
      rating: 4,
      coverUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
      excerpt: '「普通」とは何かを問いかける芥川賞受賞作。主人公の独特な視点が、私たちの当たり前を鮮やかに揺さぶります。',
      readDate: '2024年4月',
      readTime: '3時間'
    },
    {
      id: '8',
      title: 'イシューからはじめよ',
      author: '安宅和人',
      genre: 'ビジネス',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',
      excerpt: '「解くべき問題」を見極める技術。生産性を10倍にするために、まず立ち止まって考える重要性を教えてくれます。',
      readDate: '2024年4月',
      readTime: '7時間'
    },
    {
      id: '9',
      title: '嫌われる勇気',
      author: '岸見一郎・古賀史健',
      genre: '自己啓発',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      excerpt: 'アドラー心理学を対話形式で学べる名著。他者の期待に応えるのではなく、自分の人生を生きる勇気をくれる一冊。',
      readDate: '2024年5月',
      readTime: '6時間'
    },
    {
      id: '10',
      title: '火花',
      author: '又吉直樹',
      genre: '小説',
      rating: 4,
      coverUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
      excerpt: '芸人の世界を描いた芥川賞作品。師弟関係を通じて、才能と努力、そして表現することの意味を問う物語。文体が美しい。',
      readDate: '2024年5月',
      readTime: '5時間'
    },
    {
      id: '11',
      title: 'FACTFULNESS',
      author: 'ハンス・ロスリング',
      genre: '科学',
      rating: 5,
      coverUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      excerpt: 'データで世界を正しく見る方法。思い込みを排除し、ファクトベースで考える大切さを教えてくれる目からウロコの一冊。',
      readDate: '2024年6月',
      readTime: '8時間'
    },
    {
      id: '12',
      title: 'アートシンキング',
      author: '秋元雄史',
      genre: 'アート',
      rating: 4,
      coverUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      excerpt: 'アート的思考でイノベーションを生む方法。論理だけでなく、感性と直感を大切にする思考法が新鮮でした。',
      readDate: '2024年6月',
      readTime: '5時間'
    }
  ]
};

// Populate hero featured books with the first 3 books
siteContent.hero.featuredBooks = siteContent.books.slice(0, 3);
