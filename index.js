// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("masaiForm").addEventListener("submit",submit);

var submit=[]

function submit(){
    event.preventDefault();



    var submitobj={
        matchNumber:document.querySelector("#matchNum").value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        Date:document.querySelector("#date").value,
        places:document.querySelector("#venue").value,
    
    };
    submit.push(submitobj);
    console.log(submit)

    localStorage.setItem("schedule",JSON.stringify(submit))
}
