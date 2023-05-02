const mensajeRandom = () => {
    const randomNum = Math.floor(Math.random()*6);
    switch(randomNum){
        case 0: 
            return 'Hoy vas a tener un buen día'
        case 1: 
            return 'Hoy vas a tener un mal día'
        case 2:
            return 'Mejor no salgas hoy de casa'
        case 3:
            return 'Buen dia para la loteria!'
        case 4:
            return 'Ten cuidado con una tortuga gigante'
        case 5:
            return 'Hoy todo te va a saber a chocolate'
        default:
            return 'Un dia cualquiera'

    }


}

console.log(mensajeRandom());