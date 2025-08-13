# Supabaseセットアップガイド

このプロジェクトをSupabaseデータベースで運用するためのセットアップ手順です。

## 1. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com)にアクセスし、アカウントを作成またはログイン
2. 「New Project」をクリックして新しいプロジェクトを作成
3. プロジェクト名と地域を選択（日本の場合は `Northeast Asia (Tokyo)` 推奨）
4. データベースパスワードを設定

## 2. データベースの設定

1. Supabaseダッシュボードで「SQL Editor」を開く
2. `database-schema.sql` の内容をコピーして実行
3. テーブルが正常に作成されたことを確認

## 3. 環境変数の設定

1. Supabaseダッシュボードの「Settings」→「API」から以下の情報を取得：
   - `Project URL`
   - `anon public` key

2. `.env` ファイルを編集：
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your_actual_anon_key
```

## 4. 既存データの移行

既存の `users.json` データをSupabaseに移行するには：

```bash
node migrate-data.js
```

## 5. HTMLファイルの更新

`index.html` ファイルを更新して、ローカルJSONファイルの代わりにSupabaseからデータを取得するように変更する必要があります。

### 必要な変更点：

1. **Supabaseクライアントの読み込み**
2. **データ取得関数の更新**
3. **管理者機能の更新**

## 6. セキュリティ設定（重要）

### Row Level Security (RLS)

データベーススキーマでRLSを有効にしていますが、本番環境では以下を確認してください：

1. **読み取り権限**: 現在は全ユーザーが読み取り可能
2. **書き込み権限**: service_roleのみ（管理者機能用）

### 環境変数の保護

- `.env` ファイルがGitにコミットされないよう `.gitignore` に追加済み
- 本番環境では適切な環境変数管理システムを使用

## 7. トラブルシューティング

### よくある問題：

1. **接続エラー**: URLとキーが正しく設定されているか確認
2. **権限エラー**: RLSポリシーが正しく設定されているか確認
3. **CORS エラー**: Supabaseダッシュボードでドメインを許可

### デバッグ方法：

```javascript
// ブラウザのコンソールで接続テスト
console.log(supabase)
```

## 8. 本番環境への移行

1. **ドメイン設定**: Supabaseダッシュボードで本番ドメインを許可
2. **SSL証明書**: HTTPS必須
3. **環境変数**: 本番環境用の値に更新
4. **バックアップ**: 定期的なデータベースバックアップの設定

## サポート

問題が発生した場合は、Supabaseの公式ドキュメントを参照するか、コミュニティフォーラムで質問してください。