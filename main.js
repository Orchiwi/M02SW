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


var s1 = document.getElementById("scrollbar1");
s1.addEventListener('change',function () {
    var tramehexa=document.getElementById("edit")
    trame = tramehexa.value
    var entier=Math.abs(s1.value).toString(16).toUpperCase();
    var numeroCanal = 1;
    if(s1.value<16) entier="0"+entier;
    var indice= (numeroCanal-1)*2;
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value=trame;
    Ecrire();

}, false);




var s2 = document.getElementById("scrollbar2");
s2.addEventListener('change',function () {
    var tramehexa=document.getElementById("edit")
    trame = tramehexa.value
    var entier=Math.abs(s2.value).toString(16).toUpperCase();
    var numeroCanal = 2;
    if(s2.value<16) entier="0"+entier;
    var indice= (numeroCanal-1)*2;
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value=trame;
    Ecrire();

}, false);


var s3 = document.getElementById("scrollbar3");
s3.addEventListener('change',function () {
    var tramehexa=document.getElementById("edit")
    trame = tramehexa.value
    var entier=Math.abs(s3.value).toString(16).toUpperCase();
    var numeroCanal = 3;
    if(s3.value<16) entier="0"+entier;
    var indice= (numeroCanal-1)*2;
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value=trame;
    Ecrire();

}, false);



var s4 = document.getElementById("scrollbar4");
s4.addEventListener('change',function () {
    var tramehexa=document.getElementById("edit")
    trame = tramehexa.value
    var entier=Math.abs(s4.value).toString(16).toUpperCase();
    var numeroCanal = 4;
    if(s4.value<16) entier="0"+entier;
    var indice= (numeroCanal-1)*2;
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value=trame;
    Ecrire();

}, false);




var s5 = document.getElementById("scrollbar5");
s5.addEventListener('change',function () {
    var tramehexa=document.getElementById("edit")
    trame = tramehexa.value
    var entier=Math.abs(s5.value).toString(16).toUpperCase();
    var numeroCanal = 5;
    if(s5.value<16) entier="0"+entier;
    var indice= (numeroCanal-1)*2;
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value=trame;
    Ecrire();

}, false);


var s6 = document.getElementById("scrollbar6");
s6.addEventListener('change',function () {
    var tramehexa=document.getElementById("edit")
    trame = tramehexa.value
    var entier=Math.abs(s6.value).toString(16).toUpperCase();
    var numeroCanal = 6;
    if(s6.value<16) entier="0"+entier;
    var indice= (numeroCanal-1)*2;
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value=trame;
    Ecrire();

}, false);
