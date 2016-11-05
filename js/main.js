function tareas(){
	//contenedor tareas
	var contenedorTareas=document.getElementById('tareas');
	//agregar nuevas tareas
	var agregarTareas=document.createElement('div');
	//ingreso info usuario 
	var nuevoTexto=document.getElementById('area');
	//creacion nodo texto 
	var nodoNew=document.createTextNode('nuevoTexto');
	// clase del div 
	agregarTareas.setAttribute('class','agregar');
	//crear input para ok tarea
	var ok=document.createElement('input');
	//atributos de ok 
	ok.setAttribute('type','checkbox');
	// crear funcionalidad corazon  
	var cajaCorazon=document.createElement('span');
	//atributos corazon
	cajaCorazon.setAttribute('type','button');
	// icono corazon
	var corazon=document.createElement('i');
	corazon.setAttribute('class','fa fa-gratipay');
	// crear funcionalidad basurero
	var cajaBasurero=document.createElement('span'); 
	//atributos basurero
	cajaBasurero=setAttribute('type','button');
	cajaBasurero=setAttribute('id','eliminar');
	cajaBasurero=setAttribute('onclick','eliminarTarea()');
	//icono basurero 
	var basurero=document.createElement('i');
	basurero.setAttribute('class','fa fa-trash');
	// conectar los nodos de iconos
	//nodo corazon  
	cajaCorazon.appendChild(corazon);
	//nodo basurero 
	cajaBasurero.appendChild(basurero);

	agregarTareas.appendChild(ok);
	agregarTareas.appendChild(nodoNew);
	agregarTareas.appendChild(corazon);
	agregarTareas.appendChild(basurero);
	contenedorTareas.appendChild(agregarTareas);

	//evento cambio de color icono corazon 
	cajaCorazon.addEventListener('click',function(){
		agregarTareas.classList.toggle.('tachar');
	});
}
function borrarTarea(){
	var borrar=document.getElementById("eliminar");
	var suprimir=borrar.parentNode;
	suprimir.parentNode.removeChild(suprimir);
}







