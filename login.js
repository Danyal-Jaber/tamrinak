document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // التحكم في الانتقال عند فتح الصفحة بناءً على معلمات URL
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");

    if (section === "register") {
        container.classList.add('active'); // إظهار نموذج التسجيل
    } else {
        container.classList.remove('active'); // إظهار نموذج تسجيل الدخول
    }
});
