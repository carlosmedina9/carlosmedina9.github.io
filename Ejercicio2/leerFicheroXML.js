function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let derecha = xmlDoc.querySelectorAll("emisor")
	let izquierda = xmlDoc.querySelectorAll("receptor")
	let fondo = xmlDoc.querySelectorAll("conversacion")

	for(let i=0; i<derecha.length&&izquierda.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='emisor'>" + derecha[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='receptor'>" + izquierda[i].textContent + "</p>"
	}
}
	loadDocA("libros.xml","xml");