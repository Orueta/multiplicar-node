// Al inicio se colcoan todos los require
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`==== Tabla de ${base} ====`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //* Guardar archivos al ejecutar el codigo
        // Para guardar los archivos dentro de una carpeta se especifica el path nombreCarpeta
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

// Para exportar las funciones y poder usarlas en otras partes de la aplicación
module.exports = {
    crearArchivo,
    listarTabla
}