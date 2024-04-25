const comprar = ()=> {
    let totalapagar = 0; // Inicialización de la variante que acumula el total a pagar
    for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?"); // Solicitar el nombre del producto
    let cantidad = Number(prompt("¿Cuántas unidades?")); //Solicitar la cantidad y convertir a numero
    let precio = Number(prompt("¿Cuánto sale cada unidad?")); //Solicitar el precio y convertir a número

    const subtotal = cantidad * precio; // Calcular el subtotal
    totalapagar = totalapagar + subtotal; // Sumar el subtotal el total a pagar
    }

    console.log(totalapagar); // Mostrar el total a pagar
    return totalapagar;
}

//const total1 = comprar();
//const total2 = comprar();  Forma 1
//const total3 = comprar();
//const total = total1 + total2 + total3;

const total = comprar() + comprar() + comprar(); 
