// Supabaseの設定（例）
// このファイルをconfig.jsにコピーして、実際の値を入力してください

const SUPABASE_CONFIG = {
    // あなたのSupabaseプロジェクトURL
    url: 'https://your-project-url.supabase.co',
    
    // anon keyはindex.htmlで使用（読み取り専用）
    anonKey: 'your-anon-key-here',
    
    // service role keyは管理者機能で使用（注意: 管理者のみが知るべき情報）
    serviceRoleKey: 'your-service-role-key-here',
    
    // 管理者認証情報
    admin: {
        id: 'your-admin-id',
        password: 'your-admin-password'
    }
};

// グローバルスコープに設定を公開
window.SUPABASE_CONFIG = SUPABASE_CONFIG;