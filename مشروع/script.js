
document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.querySelector(".form-section");
    const infoSection = document.querySelector(".info-section");

    function handleScroll() {
        const triggerPoint = window.innerHeight * 0.75; // نقطة التفعيل

        if (formSection.getBoundingClientRect().top < triggerPoint) {
            formSection.classList.add("active");
        }

        if (infoSection.getBoundingClientRect().top < triggerPoint) {
            infoSection.classList.add("active");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // استدعاء الوظيفة فورًا في حالة كان القسم مرئيًا بالفعل
});

