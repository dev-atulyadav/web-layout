const home = document.getElementById('home');
const profile = document.getElementById('profile');
const service = document.getElementById('service');
const main = document.getElementById('main');
const welcome_section = document.getElementById('welcome-section');
const profile_section = document.getElementById('profile-section');
const option_section = document.getElementById('option-section');
const login_btn = document.getElementById('login-btn');
const signup_btn = document.getElementById('signup-btn');
const login_section = document.getElementById('login-section');
const show_signup = document.getElementById('show-signup');
const show_login = document.getElementById('show-login');
const signup_section = document.getElementById('signup-section');
const service_section = document.getElementById('service-section');
const service_option = document.getElementById('service-option');
const explore_btn = document.getElementById('explr-btn');
const courses = document.getElementById('courses');

let scroll_count = 0;

welcome_section.addEventListener('mouseover', () => {
    home.style.color = '#105971';
    profile.style.color = 'white';
    service.style.color = 'white';
})
profile_section.addEventListener('mouseover', () => {
    profile.style.color = '#105971';
    home.style.color = 'white';
    service.style.color = 'white';
})
service_section.addEventListener('mouseover', () => {
    service.style.color = '#105971';
    home.style.color = 'white';
    profile.style.color = 'white';
})
login_btn.addEventListener('click',()=>{
    login_section.style.display = 'flex';
    option_section.style.display = 'none';
    signup_section.style.display = 'none';
})
signup_btn.addEventListener('click',()=>{
    login_section.style.display = 'none';
    option_section.style.display = 'none';
    signup_section.style.display = 'flex';
})
show_signup.addEventListener('click',()=>{
    login_section.style.display = 'none';
    option_section.style.display = 'none';
    signup_section.style.display = 'flex';
})
show_login.addEventListener('click',()=>{
    login_section.style.display = 'flex';
    option_section.style.display = 'none';
    signup_section.style.display = 'none';
})

document.getElementById('close-btn1').addEventListener('click',()=>{
    login_section.style.display = 'none';
    signup_section.style.display = 'none';
    option_section.style.display = 'flex';
    
})
document.getElementById('close-btn2').addEventListener('click',()=>{
    login_section.style.display = 'none';
    signup_section.style.display = 'none';
    option_section.style.display = 'flex';
    
})
service.addEventListener('click',()=>{
   service_option.style.display = 'flex';
   courses.style.display = 'none';
})
explore_btn.addEventListener('click',()=>{
    service_option.style.display = 'none';
    courses.style.display = 'flex';
})