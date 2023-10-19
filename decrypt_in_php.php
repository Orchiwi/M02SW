<?php
    $postDataInJSON = file_get_contents ("php://input");
    $data = json_decode($postDataInJSON, true);
    // La clé
    $key = pack('H*','0123456789abcdef0123456789abcdef');
    // Le vecteur d'initialisation
    $iv = pack('H*','abcdef9876543210abcdef9876543210');
    // La méthode de cryptage utilisée
    $method = 'aes-128-cbc'; // C'est la méthode de cryptage utilisée par CryptoJS.AES.encrypt()
    $decrypted=openssl_decrypt(base64_decode($data['encrypted']),$method,$key,OPENSSL_RAW_DATA,$iv);
    echo '{"dechiffrement":"'.$decrypted.'"}'; // Sortie: 'Texte décrypté'