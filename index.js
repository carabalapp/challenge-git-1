// 1)  seleccionar las primeras letras de los 3 elementos y mostrar: "far"

function showFAR(){
    const a = ["foo", "alfa", "ram"];
    let b = ''
    a.forEach(a => {
        b = b + a[0]
    })
    console.log(b)
}

// 2)  mostrar por pantalla: "hola - mundo, desde vscode."

function showHelloWorld(){
    const b = ["hola", "mundo", "desde", "vscode"];
    console.log(`${b[0] + '-' + b[1] + ', ' + b[2] + ' ' + b[3]}`)
}

// 3) Hacer 3 procedimientos de iteración mediante los ciclos: map, while y for.

function threeBucle(){
    const nombres = [
        {nombre:"foo"},
        {nombre:"bar"},
        {nombre:"qux"},
        {nombre:"ram"}
       ];
    console.log('*********** map ***********')
    nombres.map((a, i) => {
        console.log(i+1,' - nombre:', a.nombre)
    })
    let size = nombres.length
    let acum = 0
   
    console.log('*********** while ***********')

    while(size > 0){
        size -= 1
        console.log(acum+1,' - nombre:', nombres[acum].nombre)
        acum += 1
    }

    console.log('*********** for ***********')
    for(i=0; i < nombres.length; i++){
        console.log(i+1,' - nombre:', nombres[i].nombre)
    }
}

// showFAR();
// showHelloWorld();
threeBucle();