//button
var btEcran1 = document.getElementById("btEcran1");
var btRetour2 = document.getElementById("btRetour2");
var btEcran2 = document.getElementById("btEcran2");
var btEcran3 = document.getElementById("btEcran3");
var btRetour3 = document.getElementById("btRetour3");
var btRetour4 = document.getElementById("btRetour4");

btEcran1.addEventListener("click", clickBt1, false);
btRetour2.addEventListener("click", clickBt2R, false);
btEcran2.addEventListener("click", clickBt, false);
btEcran3.addEventListener("click", clickBt3, false);
btRetour3.addEventListener("click", clickBt3R, false);
btRetour4.addEventListener("click", clickBt4R, false);
//passage aux différents écran
var ecran1 = document.getElementById("ecran1");
var ecran2 = document.getElementById("ecran2");
var ecran3 = document.getElementById("ecran3");
var ecran4 = document.getElementById("ecran4");
let inputNb = document.getElementById("inputNb");

//element des div, pour changer le fond quand on click
var divCouleur = ecran1.children[1].firstChild.nextElementSibling
var divCouleur2 = ecran1.children[2].firstChild.nextElementSibling
var divCouleur3 = ecran1.children[3].firstChild.nextElementSibling
var divCouleur4 = ecran1.children[4].firstChild.nextElementSibling
var divCouleur5 = ecran1.children[5].firstChild.nextElementSibling
divCouleur.addEventListener("click", div1, false)
divCouleur2.addEventListener("click", div2, false)
divCouleur3.addEventListener("click", div3, false)
divCouleur4.addEventListener("click", div4, false)
divCouleur5.addEventListener("click", div5, false)


var divEcran3C1 = ecran3.children[2].firstChild.nextElementSibling
var divEcran3C2 = ecran3.children[3].firstChild.nextElementSibling
var divEcran3C3 = ecran3.children[4].firstChild.nextElementSibling
divEcran3C1.addEventListener("click", divC1, false)
divEcran3C2.addEventListener("click", divC2, false)
divEcran3C3.addEventListener("click", divC3, false)

window.addEventListener("load", onLoad);

inputNb.addEventListener("click", clickBt2, false)
console.log(inputNb.value)



function onLoad() {

    btEcran1.setAttribute('disabled', true);
    btEcran3.setAttribute('disabled', true);
    btEcran2.setAttribute('disabled', true)


    /*
        btRetour2.setAttribute('disabled', true);

        btRetour3.setAttribute('disabled', true);
        btRetour4.setAttribute('disabled', true);
        */
    ecran1.style.display = "block"
    ecran2.style.display = "none";
    ecran3.style.display = "none";
    ecran4.style.display = "none";
    ecran1.classList.add('image');

}

function divC1() {
    if (divEcran3C1.classList.toggle("selected")) {
        divEcran3C2.classList.remove("selected")
        divEcran3C3.classList.remove("selected")
        btEcran3.removeAttribute('disabled');
    } else {
        divEcran3C1.classList.remove("selected")
        divEcran3C2.classList.remove("selected")
        divEcran3C3.classList.remove("selected")
        btEcran3.setAttribute('disabled', true);
    }
}

function divC2() {
    if (divEcran3C2.classList.toggle("selected")) {
        divEcran3C1.classList.remove("selected")
        divEcran3C3.classList.remove("selected")
        btEcran3.removeAttribute('disabled');
    } else {
        btEcran3.setAttribute('disabled', true);
    }
}


function divC3() {
    if (divEcran3C3.classList.toggle("selected")) {
        divEcran3C1.classList.remove("selected")
        divEcran3C2.classList.remove("selected")
        btEcran3.removeAttribute('disabled');
    } else {
        divEcran3C2.classList.remove("selected")
        divEcran3C1.classList.remove("selected")
        divEcran3C3.classList.remove("selected")
        btEcran3.setAttribute('disabled', true);
    }
}

function div1() {
    if (divCouleur.classList.toggle("selected")) {
        divCouleur2.classList.remove("selected")
        divCouleur3.classList.remove("selected")
        divCouleur4.classList.remove("selected")
        divCouleur5.classList.remove("selected")
        btEcran1.removeAttribute('disabled');
    } else {
        btEcran1.setAttribute('disabled', true);
    }


}

function div2() {
    if (divCouleur2.classList.toggle("selected")) {
        divCouleur.classList.remove("selected")
        divCouleur3.classList.remove("selected")
        divCouleur4.classList.remove("selected")
        divCouleur5.classList.remove("selected")
        btEcran1.removeAttribute('disabled');
    } else {
        btEcran1.setAttribute('disabled', true);
    }

}

function div3() {
    if (divCouleur3.classList.toggle("selected")) {
        divCouleur.classList.remove("selected")
        divCouleur2.classList.remove("selected")
        divCouleur4.classList.remove("selected")
        divCouleur5.classList.remove("selected")
        btEcran1.removeAttribute('disabled');
    } else {
        btEcran1.setAttribute('disabled', true);
    }
}

function div4() {
    if (divCouleur4.classList.toggle("selected")) {
        divCouleur.classList.remove("selected")
        divCouleur2.classList.remove("selected")
        divCouleur3.classList.remove("selected")
        divCouleur5.classList.remove("selected")
        btEcran1.removeAttribute('disabled');
    } else {
        btEcran1.setAttribute('disabled', true);
    }

}

function div5() {
    if (divCouleur5.classList.toggle("selected")) {
        divCouleur.classList.remove("selected")
        divCouleur2.classList.remove("selected")
        divCouleur3.classList.remove("selected")
        divCouleur4.classList.remove("selected")
        btEcran1.removeAttribute('disabled');
    } else {
        btEcran1.setAttribute('disabled', true);
    }
}

function clickBt1() {
    ecran1.style.display = "none";
    ecran2.style.display = "block";
}


function clickBt2R() {

    ecran1.style.display = "block";
    ecran2.style.display = "none";
}

function clickBt2() {
    if (inputNb.value <= 0) {
        btEcran2.setAttribute('disabled', true)


    } else
    if (inputNb.value > 0) {
        btEcran2.removeAttribute('disabled')
    }
}

function clickBt() {
    ecran2.style.display = "none";
    ecran3.style.display = "block";
}

function clickBt3() {

    ecran3.style.display = "none";
    ecran4.style.display = "block";
}

function clickBt3R() {

    ecran3.style.display = "none";
    ecran2.style.display = "block";
}

function clickBt4R() {

    ecran3.style.display = "block";
    ecran4.style.display = "none";
}

//