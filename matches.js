// write js code here corresponding to matches.html
var submit=JSON.parse(localStorage.getItem("schedule"));
displaydata(submit);

var favarr=JSON.parse(localStorage.getItem("schedule")) || []


var ata=JSON.parse(localStorage.getItem("schedule"))

displaydata(ata)

var bata=JSON.parse(localStorage.getItem("favourite"))

function displaydata(data){
    data.forEach(function(ele){
        var tr=document.createElement("tr")

        var td1=document.createElement("td");
        td1.innerText=ele.matchNumber;

        var td2=document.createElement("td");
        td2.innerText=ele.teamA;

        var td3=document.createElement("td");
        td3.innerText=ele.teamB;

        var td4=document.createElement("td");
        td4.innerText=ele.date;

        var td5=document.createElement("td");
        td5.innerText=ele.places;

        var td6=document.createElement("td");
        td6.innerText="favorites"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            data(ele)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
         document.querySelector("tbody").append(tr)


    })
    function data(ele){
        bata.push(ele)
        console.log(bata)
        localStorage.setItem("favourites",JSON,strongify(bata))
        window.location.href="favourites.html"
    }
}