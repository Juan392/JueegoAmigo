var nombresListados = [];

function agregarAmigo(){
    //Obtengo el valor del input y lo agrego a una lista
    const nombre = document.getElementById('amigo').value;
    //Se valida que el imput no este vacio
    if(nombre === ''){
        alert('Agrega un nombre valido.');
        return ;
    }
    
    nombresListados.push(nombre);
    console.log(nombresListados);
    //LLamo a la funcion para mostrar el nombre de los que estan en las listas
    mostraramigo(nombre);
    //Limpio el imput
    document.getElementById('amigo').value = '';
    return nombresListados;
}

function sortearAmigo(){
    //Se hace el sorteo, con la funcion Math.random obtengo el indice del array y muestro el elemento
    let sorteo = Math.floor(Math.random()*nombresListados.length);
    //Se valida si la lista esta vacia
    if(nombresListados.length === 0){
        alert('Agregue los nombres de sus amigos.')
    }
    //Se muestra al ganador
    document.querySelector(`#resultado`).textContent = `El ganador es ${nombresListados[sorteo]}`;
    return nombresListados[sorteo];
}

function mostraramigo(nombre) {
    //Muestro a los nombres en la listaw
    let lista = document.querySelector('#listaAmigos');
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;

    lista.appendChild(nuevoAmigo);
    return;
}

