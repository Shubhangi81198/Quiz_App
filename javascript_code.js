window.onload = function () {
    show(0);
}
//Questions
let questions =
    [
        {
            id: 1,
            question: "What is a correct syntax to output 'Hello World' in Python?",
            answer: "print('Hello World')",
            options: [
                "print('Hello World')",
                "echo('Hello World')",
                "echo('Hello World');",
                "p('Hello World')"
            ]
        },

        {
            id: 2,
            question: "How do you insert Comments in Python code ?",
            answer: "#This is Comment",
            options: [
                "!This is Comment",
                "//This is Comment",
                "#This is Comment",
                "/*This is Comment*/"
            ]
        },
        {
            id: 3,
            question: "What is the correct file extension for Python File ?",
            answer: ".py",
            options: [
                ".pt",
                ".pyt",
                ".pyth",
                ".py"
            ]
        },
        {
            id: 4,
            question: "Which Operator is used to multiply numbers ?",
            answer: "*",
            options: [
                "%",
                "*",
                "/",
                "x"
            ]

        }



    ];


function submitForm(event) {
    event.preventDefault();
    let name = document.forms["Welcome_Form"]["name"].value;
    //store user name
    location.href = "quiz.html";
    sessionStorage.setItem("Name", name);
}
let question_count = 0;
let Your_Points = 0;
function Next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    //check answer  given by user
    if (user_answer == questions[question_count].answer) {
        Your_Points += 10;
        sessionStorage.setItem("Score", Your_Points);
    }
    if (question_count == questions.length - 1) 
    {
        
sessionStorage.setItem("Time",`${minutes}minutes and ${seconds}seconds`);
clearInterval(mytime);
        location.href = "End.html";
        return;
    }


    question_count++;
    show(question_count);
}
function Prev() {
    question_count--;
    show(question_count);
}
function show(count) {
    let question = document.getElementById("questions");
    //question.innerHTML="<h2>"+ questions[count].question +"</h2>";
    question.innerHTML = `<h2>Q${question_count+1}.${questions[count].question}</h2>
<ul class="option-group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
    
                </ul>`;
    toggleActive();


}
function toggleActive() {

    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {


                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }

                option[i].classList.add("active");
            }

        }
    }
}
