/*Enunciado: Simulación de una encuesta de satisfacción

Descripción: Imagina que trabajas en un restaurante y se realizó una encuesta de satisfacción con los clientes. Las respuestas de la encuesta se registran como números enteros entre 1 y 10, donde:

1 significa "muy insatisfecho"
10 significa "muy satisfecho"
Las respuestas ya estan cargadas en el siguiente array, respuestas: [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]

Debes procesar las respuestas de la encuesta para obtener las siguientes métricas:

El promedio de satisfacción.
Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).
Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).
El porcentaje de clientes que están satisfechos e insatisfechos.
La calificación que se repitió más veces (moda).*/

const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];

let suma = 0;

for (let i = 0; i < respuestas.length; i++) {
  suma += respuestas[i];
}

let promedio = suma / respuestas.length;

document.write(`<br>El promedio de satisfaccion es:  ${promedio}</br>`);

let satisfechos = respuestas.filter(
  (calificaciones) => calificaciones >= 7
).length;

document.write(`Clientes satisfechos:  ${satisfechos}`);

let insatisfechos = respuestas.filter(
  (calificaciones) => calificaciones <= 4
).length;

document.write(`<br>Clientes insatisfechos:  ${insatisfechos}</br>`);

let porcentajeSatisfechos = (satisfechos / respuestas.length) * 100;
let porcentajeInsatisfechos = (insatisfechos / respuestas.length) * 100;

document.write(
  `<br>Porcentaje de clientes satisfechos: 
  ${porcentajeSatisfechos} %</br>`
);
document.write(
  `<br>Porcentaje de clientes insatisfechos: 
  ${porcentajeInsatisfechos} %</br>`
);

let moda = respuestas[0];
let maxRepeticiones = 0;

for (let i = 0; i < respuestas.length; i++) {
  let cuentaRepeticiones = 0;

  for (let j = 0; j < respuestas.length; j++) {
    if (respuestas[i] === respuestas[j]) {
      cuentaRepeticiones++;
    }
  }

  if (cuentaRepeticiones > maxRepeticiones) {
    maxRepeticiones = cuentaRepeticiones;
    moda = respuestas[i];
  }
}

document.write("La calificación más repetida (moda):" + moda);
