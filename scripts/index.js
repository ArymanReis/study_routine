let numberMather = document.querySelector("#number-mather");
const nameMather = document.querySelector("#mather");
const startDate = document.querySelector("#date-start");
const endDate = document.querySelector("#date-conclusion");
const completedNumber = document.querySelector("#goals-completed");
const dataGraphic = document.querySelector("#data-graphic");
let graphicProgress = document.querySelector("#graphic-progress");

let count = 0;
let anotherCount = 0;
let countProgress = 0;

const startBtn = document.querySelector("#start");
const addBtnCompleted = document.querySelector("#to-add");
const subtractBtnCompleted = document.querySelector("#subtract");

function summary() {

    const goalName = (nameMather.value);
    let numberClasses = Number(numberMather.value);
    const targetStartDate = (startDate.value);
    const targetEndDate = (startDate.value);

    const summaryRegisteredGoals = document.querySelector("#select-goals");

    const newGoalLocation = document.createElement("span");

    const goalSummary = (`Nome da meta: ${goalName} | Total de aulas: ${numberClasses} | Data de início: ${targetStartDate} | Previsão de conslusão: ${targetEndDate}`); 

    newGoalLocation.appendChild(document.createTextNode(goalSummary));

    summaryRegisteredGoals.appendChild(newGoalLocation);

};

//Validação de aulas feitas
function accomplishedClasses() {
//    let numberGoalsValue = countProgress;
    

//    const fragmentClasse = document.createDocumentFragment();
    
//    while(countProgress < numberGoalsValue) {

//        const iconOpen = document.createElement("img");

//        iconOpen.src = "assets/graduation.svg";
//        iconOpen.alt = "Icone de aula com seleção fechada";
 //       iconOpen.className = "icon-open";

//        fragmentClasse.appendChild(iconOpen);
    //}

//    document.querySelector(".conclusion").appendChild(fragmentClasse);
    
    }



function numberClasse() {

    let numberOfClasses = Number(numberMather.value);

    const fragmentClasse = document.createDocumentFragment();


    while(count < numberOfClasses) {

        const imgClose = document.createElement("img");

        imgClose.src = "assets/graduation_close.svg";
        imgClose.alt = "Icone de aula com seleção fechada";
        imgClose.className = "icon-close";

        fragmentClasse.appendChild(imgClose);

        count++;
        console.log(imgClose);
    }

    document.querySelector(".conclusion").appendChild(fragmentClasse);
    

};

function updateClasses() {

    let upNumberClasses = Number(numberMather.value);

    const studyGoal = document.querySelector("#study-goal");

    const newStudyGoal = document.createElement("p");
    
    newStudyGoal.appendChild(document.createTextNode(upNumberClasses));

    studyGoal.appendChild(newStudyGoal);

}

//Gráfico
function progress() {

    countProgress ++;
    let showProgress = dataGraphic;

    let numberMatherValue = numberMather.value;
    let calcGoalsValue = (countProgress * 100) / numberMatherValue; 
    let graphicProgressCalc = (340 - (340 * calcGoalsValue) / 100);

    if ( countProgress <= numberMatherValue ) {
    completedNumber.innerHTML = countProgress;
    showProgress.innerHTML = calcGoalsValue + "%";

    graphicProgress.style.strokeDashoffset = graphicProgressCalc;
    } 

};

function progressSubtract() {

    countProgress--;
    let showProgress = dataGraphic;

    let numberMatherValue = numberMather.value;
    let calcGoalsValue = (countProgress * 100) / numberMatherValue; 
    let graphicProgressCalc = (340 - (340 * calcGoalsValue) / 100);

    if (countProgress <= numberMatherValue) {
    completedNumber.innerHTML = countProgress;
    showProgress.innerHTML = calcGoalsValue + "%";

    graphicProgress.style.strokeDashoffset = graphicProgressCalc;
    }  
    
};

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    numberClasse();

    summary();

    updateClasses();

});

addBtnCompleted.addEventListener("click", () => {

    progress();
    accomplishedClasses();

});

subtractBtnCompleted.addEventListener("click", () => {
    progressSubtract();

});




