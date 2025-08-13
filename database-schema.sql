-- ユーザーテーブルの作成
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  login_id TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックスの作成（検索性能向上）
CREATE INDEX IF NOT EXISTS idx_users_name ON users(name);
CREATE INDEX IF NOT EXISTS idx_users_login_id ON users(login_id);

-- RLS (Row Level Security) の有効化
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- 管理者テーブルの作成（管理者認証用）
CREATE TABLE IF NOT EXISTS admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 管理者テーブルにもRLSを有効化
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- ポリシーの作成（必要に応じて調整）
-- 全ユーザーの読み取りを許可
CREATE POLICY "Allow public read access" ON users
  FOR SELECT USING (true);

-- 管理者のみがユーザーの作成・更新・削除を許可
CREATE POLICY "Allow admin insert" ON users
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow admin update" ON users
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "Allow admin delete" ON users
  FOR DELETE USING (auth.role() = 'service_role');

-- 管理者テーブルのポリシー
CREATE POLICY "Allow public read admins" ON admins
  FOR SELECT USING (true);

-- 初期管理者データの挿入
INSERT INTO admins (admin_id, password) 
VALUES ('tsukurukids', '20221206')
ON CONFLICT (admin_id) DO NOTHING;