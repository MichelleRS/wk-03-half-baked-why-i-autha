// Enter Supabase Information
const SUPABASE_URL = 'https://qibydbafeplthyrhkgog.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpYnlkYmFmZXBsdGh5cmhrZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwOTIsImV4cCI6MTk4MzY4NDA5Mn0.NrtQcuaIUkk_9z8xEvXMdOg-GqBQaeDdi3tGUQcDCQc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {}
