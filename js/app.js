window.addEventListener("load",function(){
	var area = document.getElementById("area");
	var boton = document.getElementById("boton");
	var contenedor = document.getElementById("contenedor");

	boton.addEventListener("click",function(e){
		e.preventDefault();
   		mostrarMensaje(area.value.trim());
   		area.value="";
   		boton.disabled=true;
	});

	area.addEventListener("keyup",function(){
		boton.disabled=false;
		bloquearBoton();
	});


	function mostrarMensaje(area){
		var nuevoDiv = document.createElement("div");
    	var nuevoSpan = document.createElement("span");
    	nuevoSpan.innerHTML = area;
    	nuevoDiv.classList.add("parrafo")
    	nuevoSpan.classList.add("nodoTexto");
    	nuevoDiv.appendChild(nuevoSpan);

    	var checkbox = document.createElement("input");
    	checkbox.type = "checkbox";
    	nuevoDiv.appendChild(checkbox);


    	var tacho = document.createElement("span");
    	tacho.classList.add("glyphicon", "glyphicon-trash");
       	tacho.setAttribute("aria-hidden", "true");
       	tacho.style.cssFloat = "right";
    	nuevoDiv.appendChild(tacho);

    	var contenedor = document.getElementById("contenedor");
    	contenedor.appendChild(nuevoDiv);
    	nuevoDiv.insertBefore(checkbox,nuevoDiv.childNodes[0]);
		nuevoDiv.insertBefore(tacho,nuevoDiv.childNodes[2]);


    	checkbox.addEventListener("click",function(){
    		checkbox.parentNode.classList.toggle("tachado");
    	});

    	tacho.addEventListener("click",function(){
    		contenedor.removeChild(nuevoDiv);
    	});
	}

	function bloquearBoton(){
		if (area == 0){
			boton.disabled=true;
		} 
	}
});