// Supabaseの設定
// セキュリティのため、このファイルはGitHubにアップロードしないでください

const SUPABASE_CONFIG = {
    url: 'https://nsdsqzwhfqtfxglfkdlc.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZHNxendoZnF0ZnhnbGZrZGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4ODI0NzgsImV4cCI6MjA3MDQ1ODQ3OH0.3-hoI6oDKWezjRq5Hut6roKDMsDIcGj72Hyt1MjwTLo',
    serviceRoleKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZHNxendoZnF0ZnhnbGZrZGxjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDg4MjQ3OCwiZXhwIjoyMDcwNDU4NDc4fQ.O2QAkUozrhC67PHmwe63jdwhf36UeCpvfbtBw55E5o0',
    admin: {
        id: 'tsukurukids',
        password: '20221206'
    }
};

window.SUPABASE_CONFIG = SUPABASE_CONFIG;