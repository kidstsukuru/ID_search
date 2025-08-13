# プログラミングスクール ツクル - ID検索システム

ユーザーの名前を検索してログイン情報を取得できるWebアプリケーションです。管理者機能により、ユーザーデータの追加・編集・削除も可能です。

## 🚀 機能

- **ユーザー検索**: ひらがな名前でユーザー情報を検索
- **管理者ダッシュボード**: ユーザーデータのCRUD操作
- **レスポンシブデザイン**: スマートフォン・タブレット対応
- **Supabase連携**: クラウドデータベースでデータ管理

## 📋 セットアップ手順

### 1. リポジトリのクローン

```bash
git clone [リポジトリURL]
cd ID検索
```

### 2. 設定ファイルの作成

`config.example.js`を`config.js`にコピーして、実際の値を設定してください：

```bash
cp config.example.js config.js
```

### 3. config.jsの編集

```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project-url.supabase.co',
    anonKey: 'your-anon-key-here',
    serviceRoleKey: 'your-service-role-key-here',
    admin: {
        id: 'your-admin-id',
        password: 'your-admin-password'
    }
};
```

### 4. Supabaseデータベースのセットアップ

1. [Supabase](https://supabase.com)でプロジェクトを作成
2. `database-schema.sql`を実行してテーブルを作成
3. ユーザーデータを`users.json`から移行（migration必要な場合）

### 5. アプリケーションの起動

ローカルサーバーで`index.html`を開くか、静的ホスティングサービスにデプロイしてください。

```bash
# ローカルサーバーの例（Python）
python -m http.server 8000

# または（Node.js）
npx http-server
```

## 🔐 セキュリティ

- `config.js`ファイルは`.gitignore`に含まれており、GitHubにアップロードされません
- service role keyは管理者機能でのみ使用されます
- Row Level Security (RLS) が有効になっています

## 📁 ファイル構成

```
ID検索/
├── index.html              # メインアプリケーション
├── config.js               # 設定ファイル（非公開）
├── config.example.js       # 設定テンプレート
├── database-schema.sql     # データベーススキーマ
├── users.json             # ユーザーデータ（移行用）
├── supabase-config.js     # Supabase Node.js設定
├── package.json           # 依存関係
└── README.md              # このファイル
```

## 🔧 使用技術

- **フロントエンド**: HTML5, CSS3 (Tailwind), JavaScript (ES6)
- **データベース**: Supabase (PostgreSQL)
- **ホスティング**: 静的ホスティング対応

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

Issues や Pull Requests は歓迎します。

## ⚠️ 注意事項

- 本番環境では必ず独自のSupabase認証情報を使用してください
- 管理者機能は信頼できる環境でのみ使用してください
- 定期的にAPIキーを更新することを推奨します