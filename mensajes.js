//Generamos un numero aleatorio en base a la longitud del array
const indexRandom = num => Math.floor(Math.random() * num);

//Creamos el objeto con las cosas en mente que tiene la persona
const lectorDeMentes = {
    animal: ['El perro', 'El gato', 'La jirafa', 'La rana', 'La hiena', 'La ballena'],
    comida: ['La pasta', 'La pizza', 'La hamburguesa', 'El sushi', 'Los tacos'],
    pensamiento: ['Irte de viaje', 'Cambiar de trabajo', 'Ganar la loteria', 'Conseguir pareja', 'Ser un superheroe']
}
//Guardamos cada item seleccionado en el siguiente array
const menteLeida = [];
//Recorremos el objeto
for (item in lectorDeMentes) {

    //Almacenamos el index del array generado aleatoriamente en una variable
    let menteInd = indexRandom(lectorDeMentes[item].length);

    switch(item){
        case 'animal':
            menteLeida.push(`Tu animal favorito es: ${lectorDeMentes[item][menteInd]}`);
            break
        case 'comida':
            menteLeida.push(`Tu comida favorita es: ${lectorDeMentes[item][menteInd]}`);
            break
        case 'pensamiento':
            menteLeida.push(`Estas pensando en: ${lectorDeMentes[item][menteInd]}`);
            break
        default :
            menteLeida.push('Tienes la mente algo borrosa');
    }
}

//Pasamos a string menteLeida y le agregamos un salto de linea para cada elemento del array
const leidaString = () => menteLeida.join('\n');

console.log(leidaString());