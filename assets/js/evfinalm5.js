let myRequest = request();
document.getElementById("box_personajes_principales").addEventListener('click', async function () {


    let data = await myRequest.next();
    console.log(data)
    if (data.value) {

        injectHtml(data.value);
    }

})

function injectHtml(json) { 
    const { name, height, mass } = json

    // let card = `
    //         <div class="box">
    //             <h1>${name}</h1>
    //             <h3>Estatura ${height}. Peso ${mass}.</h3>
               
    //         </div>
    //         `
    // document.getElementById("personajes_principales").innerHTML += card
    let newCard = document.createElement('div')
    newCard.innerHTML =`
    <h1>${name}</h1>
    <h3>Estatura ${height}. Peso ${mass}. </h3>
    `
newCard.setAttribute('class','box1')
document.getElementById("personajes_principales").appendChild(newCard)
}

async function* request() {

    let url = "https://swapi.dev/api/people/"

    for (let i = 1; i < 6; i++) {
        try {
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }
        catch (e) {
            console.log(e);
        }
    }
}

//--------------------------------------------------------//

let myRequest2 = request2();
document.getElementById("box_personajes_secundarios").addEventListener('click', async function () {


    let data = await myRequest2.next();
    console.log(data)
    if (data.value) {

        injectHtml2(data.value);
    }

})

function injectHtml2(json) {
    const { name, height, mass } = json

    // let card = `
    //         <div class="box">
    //             <h1>${name}</h1>
    //             <h3>Estatura ${height}. Peso ${mass}.</h3>
               
    //         </div>
    //         `
    // document.getElementById("personajes_secundarios").innerHTML += card

    let newCard = document.createElement('div')
    newCard.innerHTML =`
    <h1>${name}</h1>
    <h3>Estatura ${height}. Peso ${mass}. </h3>
    `
newCard.setAttribute('class','box2')
document.getElementById("personajes_secundarios").appendChild(newCard)
}

async function* request2() {

    let url = "https://swapi.dev/api/people/"

    for (let i = 6; i < 11; i++) {
        try {
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }
        catch (e) {
            console.log(e);
        }
    }
}


//--------------------------------------------------------//

let myRequest3 = request3();
document.getElementById("box_personajes_terciarios").addEventListener('click', async function () {


    let data = await myRequest3.next();
    console.log(data)
    if (data.value) {

        injectHtml3(data.value);
    }

})

function injectHtml3(json) {
    const { name, height, mass } = json

    // let card = `
    //         <div class="box">
    //             <h1>${name}</h1>
    //             <h3>Estatura ${height}. Peso ${mass}.</h3>
               
    //         </div>
    //         `
    // document.getElementById("personajes_terciarios").innerHTML += card

    let newCard = document.createElement('div')
    newCard.innerHTML =`
    <h1>${name}</h1>
    <h3>Estatura ${height}. Peso ${mass}. </h3>
    `
newCard.setAttribute('class','box3')
document.getElementById("personajes_terciarios").appendChild(newCard)
}

async function* request3() {

    let url = "https://swapi.dev/api/people/"

    for (let i = 11; i < 16; i++) {
        try {
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }
        catch (e) {
            console.log(e);
        }
    }
}


