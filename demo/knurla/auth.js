
export default function auth(supabase) {

    // Elements
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const signoutButton = document.getElementById('signout-button');
    const userSection = document.getElementById('user-section');
    const authSection = document.getElementById('auth-section');
    const userEmailSpan = document.getElementById('user-email');

    // Sign Up
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        
        if (error) {
            alert('Error: ' + error.message);
        } else {
            alert('Sign up successful! Please check your email for a confirmation link.');
        }
    });

    // Sign In
    signinForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            alert('Error: ' + error.message);
        } else {
            userEmailSpan.textContent = data.user.email;
            authSection.style.display = 'none';
            userSection.style.display = 'block';
        }
    });

    // Sign Out
    signoutButton.addEventListener('click', async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert('Error: ' + error.message);
        } else {
            authSection.style.display = 'block';
            userSection.style.display = 'none';
        }
    });

    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
            userEmailSpan.textContent = session.user.email;
            authSection.style.display = 'none';
            userSection.style.display = 'block';
        } else {
            authSection.style.display = 'block';
            userSection.style.display = 'none';
        }
    });
}