// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

let convierte = (monto, moneda) =>{
    if (moneda=="USD"){
        return ((monto/1.2)*127.9).toFixed(2)
    }else if(moneda == "EUR"){
        return (monto*1.2).toFixed(2)
    }else if(moneda == "JPY"){
        return ((monto/127.9)*.08).toFixed(2) }
}


// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log(convierte(50,"USD"))
console.log(convierte(50,"EUR"))
console.log(convierte(50,"JPY"))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,convierte };