let element = document.querySelectorAll('.list')
let navdiv = document.querySelector('.navdiv')


document.getElementById("bars").addEventListener("click", function (){
    document.getElementById('xmark').style.display= "inline-block";
   this.style.display= "none";
    navdiv.style.display= "inline-block";

    for(let i = 0; i<element.length; i++){
        let list = document.createElement("li");
        list.setAttribute('class', 'lists')
        list.innerHTML= element[i].innerHTML;
        navdiv.appendChild(list);
    //    console.log(list);
    }
    
}) 



document.getElementById("xmark").addEventListener("click", function (){
    document.getElementById('bars').style.display= "inline-block";
    this.style.display= "none";
    let newList = document.querySelectorAll('.lists');
    for(let i = 0; i<newList.length; i++){
    navdiv.removeChild(newList[i]);
    }
    navdiv.style.display= "none"

}) 