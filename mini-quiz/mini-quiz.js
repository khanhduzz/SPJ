const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

let questions = [
  {
    id: uid(),
    title: "In CSS 1, what property is used to set the background color?",
    choices: ["color", "bgcolor", "background-color", "background-image"],
    ans: "background-color",
  },
  {
    id: uid(),
    title: "In CSS 2, what property is used to set the background color?",
    choices: ["color", "bgcolor", "background-color", "background-image"],
    ans: "background-color",
  },
  {
    id: uid(),
    title: "In CSS 3, what property is used to set the background color?",
    choices: ["color", "bgcolor", "background-color", "background-image"],
    ans: "background-color",
  },
];

function addInitialData(questions) {
  questions.forEach((q) => {
    addSingleQuestion(q);
  });
}

function addSingleQuestion(question) {
  let questionArea = document.querySelector(".quiz-container");

  let value = "";

  value += `
        <div class="question" id='${question.id}'>
            <h2>${question.title}</h2>`;

  question.choices.forEach((q) => {
    value += `            
            <label>
                <input  onclick="selectAnswer('${question.id}')" type="radio" name="${question.id}" value="${q}">
                <code>${q}</code>
            </label>
            <br>
        `;
  });
  value += `
    </div>
    `;
  questionArea.innerHTML += value;
}

function selectAnswer(id) {
  let question = document.querySelectorAll(`#${id} input`);
  const selected = Array.from(question).find(radio => radio.checked);
  const q = questions.find(q => q.id == id); 
  
  if (selected && selected.value == q.ans) {
    let answer = document.querySelector(`input[name="${q.id}"][value="${selected.value}"]`).closest('label');
    console.log("answer ", answer);
    
    answer.classList.add('answer-correct');
    answer.closest('div').childNodes.forEach((c) => c.childNodes.forEach((c) => c.disabled = true))
  }
  console.log(selected.value);
}

window.onload = addInitialData(questions);
