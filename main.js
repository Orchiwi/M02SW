function Ecrire()
{   var valeur=document.getElementById("edit").value;
    var client = new WMLHttpRequest();
    client.open("POST","client_udp.php", false);
    donneesJson='{"univers":"0","adresse":"0","valeur":"'+valeur+'"}';
    client.send(donneesJson);


}