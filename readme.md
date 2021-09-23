# Heading

## SSL installation Local

####  Mac
 
 1.  utiliser la commande a la racine du projet, pour générer les clé de ca propre autorité de certification :
	 ```shell
	 ./tools/dev/gnerateCA.sh
	 ``` 
 
2.  Une fois les fichiers générés, vous devrez commencer par ajouter le root-ca.pem dans le trousseau d'accès:
![root-ca into keychain](https://cdn.discordapp.com/attachments/279569245489070080/890536505389482004/Capture_decran_2021-09-23_a_10.40.40.png)

3.  Quand vous avez mit le fichier vous devrez lui attribuer votre confiance, conne si dessous:
![give a trust](https://cdn.discordapp.com/attachments/279569245489070080/890536493540577300/Capture_decran_2021-09-23_a_10.42.29.png)

4. Ensuite vous pouvez rajouter les certificat ssl de myfinance.com dans le trousseau d'accès:
![add ssl certificate](https://cdn.discordapp.com/attachments/279569245489070080/890536481272238121/Capture_decran_2021-09-23_a_10.46.56.png)
5. Vous devrez normalement avoir ce résultat comme quoi votre certificat et valide pour sub.myfinance.com et myfinance.com:
![result certificate ssl approved](https://cdn.discordapp.com/attachments/279569245489070080/890565983650082916/Capture_decran_2021-09-23_a_13.49.46.png)

6. Pour finir vous devez ajouter dans hosts les dns pour ceci un script a était crée, utiliser le en `sudo`:
	```bash
	sudo ./tools/dev/setHost.sh
	```

**Rendue finale :**
![enter image description here](https://cdn.discordapp.com/attachments/279569245489070080/890576248558989322/Capture_decran_2021-09-23_a_14.29.32.png)

####  Linux
WIP

####  Windows
WIP