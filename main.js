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
    console.debug("vérification de la trame");
}