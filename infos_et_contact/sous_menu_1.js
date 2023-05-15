function main(){

    disableButton()
    setInterval(disableButton,1000)         //Il y a t'il un autre moyen de voir si disableButton est vrai (sans l'appeler toutes les secondes)

}
    

function disableButton(){

    document.getElementById("button").disabled = true
    
    if(checkCommentary() == true && checkName() == true && checkMail() == true){
        document.getElementById("button").disabled = false
    }

}

function checkName(){

    let nb_space = document.getElementById("name").value.split(" ").length          //Ptit bug, "Nathan " est compté comme 2 mots a cause de l'espace

    if(nb_space == 2){
        return true
    }
    else{
        return false
    }

}

let nb_arobase = 0
let nb_point = 0

function checkMail(){

    let nb_arobase = document.getElementById("email").value.split('@').length - 1;
    let nb_point = document.getElementById("email").value.split('.').length - 1;
    
    if(nb_point == 1 && nb_arobase == 1){
        return true
    }
    else{
        return false
    }

}

function checkCommentary(){

    let nb_char = document.getElementById("commentary").value.length
    
    
    if(nb_char >= 20 && nb_char <= 1000){
        return true
    }
    else{
        return false
    }

}

window.onload = () => {
    main();
}