const questions = document.querySelectorAll(".questions-container .question-container .header");
const plusSign = document.querySelectorAll(".questions-container .question-container .header i");
const questionContent = document.querySelectorAll(".questions-container .question-container .content")

const anchors = document.querySelectorAll(".option");

anchors.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(item.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        questionContent[i].classList.toggle("active");

        if(questionContent[i].classList.contains("active")) {
            plusSign[i].classList.add("rotate")
        } else {
            plusSign[i].classList.remove("rotate")
        }
    })
}


