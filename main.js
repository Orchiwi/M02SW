function Ecrire()
{   var valeur=document.getElementById("edit").value;
    var client = new XMLHttpRequest();
    client.open("POST","client_udp.php", false);
    donneesJson='{"univers":"0","adresse":"172.20.21.183","valeur":"'+valeur+'"}';
    client.send(donneesJson);
}
function Mon_popup()
{
    alert("Gestion de l'evenement 'mouse over' sur mon bouton");
}

document.getElementById("button").style.visibility="hidden"

function TrameValide()
{   
    tramehexa=document.getElementById("edit").value;
    console.debug("vérification de la trame");
    if(tramehexa.length % 2==0){
        
        document.getElementById("longueur").className=('vert');
        Taille = true
    }
    else {
        
        document.getElementById("longueur").className=('rouge');
        Taille = false
        
    }
    for(let i = 0; i < tramehexa.length; i++){
        if(tramehexa[i]>= 0 && tramehexa[i]<= 9 || tramehexa.charAt(i)>= "A" && tramehexa.charAt(i)<= "F"){
            
            document.getElementById("hexa").className=('vert');
          // console.log("bon");
            Type = true
        }    
        else {
            document.getElementById("hexa").className=('rouge');
        //  console.log("faux");
            Type = false
            break
        }
    }
     if (Type == false || Taille == false || document.getElementById("edit").value == ""){

    document.getElementById("button").style.visibility="hidden";
    }
    else{
    document.getElementById("button").style.visibility="visible";
    }

}
