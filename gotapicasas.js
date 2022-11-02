// trabajo con QuerySelector para activar en click de img

// Cambiar cuadro horiz2 leyente API
let txt_stark=document.querySelector(".horiz-img-stark");
txt_stark.addEventListener("click",stark);
function stark() {
   //let imagen2=document.querySelector(".Discover2-img").src="images/assets/succulents-2.jpg";
   getGithub("stark")
   //alert("paso por Stark")
}

let txt_targaryen=document.querySelector(".horiz-img-targaryen");
txt_targaryen.addEventListener("click",targaryen);
function targaryen() {
   //let imagen2=document.querySelector(".Discover2-img").src="images/assets/succulents-2.jpg";
   getGithub("targaryen")
//   alert("paso por targaryen")
}

let txt_lannister=document.querySelector(".horiz-img-lannister");
txt_lannister.addEventListener("click",lannister);
function lannister() {
   //let imagen2=document.querySelector(".Discover2-img").src="images/assets/succulents-2.jpg";
   getGithub("lannister")
//   alert("paso por lannister")
}

let txt_baratheon=document.querySelector(".horiz-img-baratheon");
txt_baratheon.addEventListener("click",baratheon);
function baratheon() {
   //let imagen2=document.querySelector(".Discover2-img").src="images/assets/succulents-2.jpg";
   getGithub("baratheon")
//   alert("paso por baratheon")
}




//trabajo con API para rescatar datos JSON
let nombreDiv = document.querySelector("#horiz2");
function makeNombreApi(data) {
    var res = `
                    <br><h4>Nombre Casa : ${data.name}</h4>
                    <br><h4>libro George RR Martin : ${data.words}</h4>
                    <br><br><h4>Titulos de la Casa : ${data.titles}</h4>
                    <br><br><h4>Region : ${data.region}</h4>
                `;
    return res;
}
async function getGithub(casa) {
    let response;
    if (casa == "stark"){
        response = await fetch("https://anapioficeandfire.com/api/houses/362");
    }else if (casa == "targaryen") {
        response = await fetch("https://anapioficeandfire.com/api/houses/378");
    }else if (casa == "lannister") {
        response = await fetch("https://anapioficeandfire.com/api/houses/229");
    }else {  //if (casa == "baratheon") {
        response = await fetch("https://anapioficeandfire.com/api/houses/17");
    }
    let dataApi = await response.json();
console.log(dataApi);
   nombreDiv.innerHTML= makeNombreApi(dataApi);
//alert(dataApi.name);
}

