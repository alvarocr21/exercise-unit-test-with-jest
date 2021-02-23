// importar la función sum del archivo app.js
const { sum, convierte} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('Vamos a enviar 50 dolares esto debe dar 5329.17',()=>{
    //enviamos el valor y llamamos a la funcion con el monto y el tuipo de moneda
    let total = convierte(50,"USD");

    //esperemos que el resultado sea 5329.17
    expect(total).toBe(5329.17)

})

test('Vamos a enviar 50 euros esto debe dar 60',()=>{
    //enviamos el valor y llamamos a la funcion con el monto y el tuipo de moneda
    let total = convierte(50,"EUR");

    //esperemos que el resultado sea 60
    expect(total).toBe(60)

})

test('Vamos a enviar 50 Yenes esto debe dar 0.03',()=>{
    //enviamos el valor y llamamos a la funcion con el monto y el tuipo de moneda
    let total = convierte(50,"JPY");

    //esperemos que el resultado sea 0.03
    expect(total).toBe(0.03)

})