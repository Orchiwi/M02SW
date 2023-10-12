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
function TrameValide()
{   
    tramehexa=document.getElementById("edit").value;
    console.debug("vérification de la trame");
    if(tramehexa.length % 2==0){
        document.getElementById("longueur").classList.remove('rouge');
        document.getElementById("longueur").classList.add('vert');
    }
    else {
        document.getElementById("longueur").classList.remove('vert');
        document.getElementById("longueur").classList.add('rouge');
        
    }
   
}