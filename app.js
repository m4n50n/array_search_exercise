/**
 * Búsqueda de un número dentro de un array
 * 1. Búsqueda binaria (binary_search())
 * 2. Búsqueda desde los extremos (corners_search())
 * 3. Filter
 * 4. Find
 * 5. Map
 * 6. Includes
 * 7. IndexOf
 */

// 1.
const binary_search = (array, number) => {
    const start = performance.now();

    /**
     * Se compara el valor que estamos buscando con el valor central de un array ordenado
     * Si el valor es igual al punto medio, se ha encontrado; de lo contrario, se repite la búsqueda en la mitad inferior y superior (según el caso)
     */
    first_item = 0;
    last_item = array.length - 1;
    found = false;
    position = -1;

    while (!found && first_item <= last_item) {
        half = Math.floor((first_item + last_item) / 2);

        if (array[half] === number) {
            found = true;
            position = half;
        }
        else {
            if (number > array[half]) {
                first_item = half + 1;
            }   
            else {
                last_item = half - 1;
            }
        }        
    }

    if (found) { console.log("Encontrado en el index " + position); } else { console.log("No encontrado!"); }

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);
    
    return false;
}  

// 2.
const corners_search = (array, number) => {
    const start = performance.now();
    
    /**
     * Búsqueda desde ambas esquinas
     * Funciona con arrays no ordenados
     */
    let first = 0; // primer elemento del array
    let last = array.length - 1; // último elemento del array
        
    while (first <= array.length - 1) {
        if (array[first] === number) { // búsqueda desde el principio del array
            console.log("Se ha encontrado el número comenzando por el principio del array en el index " + first);

            const duration = performance.now();
            console.log(`Execution time: ${duration - start} ms`);

            return true;
        } 
        else if (array[last] === number) { // búsqueda desde el final del array
            console.log("Se ha encontrado el número comenzando por el final del array en el index " + last);
            
            const duration = performance.now();
            console.log(`Execution time: ${duration - start} ms`);
            
            return true;
        }
        
        first++;
        last--;
    }

    console.log("No se ha encontrado el número " + number + " dentro del array");

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);

    return false;
}

// 3.
const filter_search = (array, number) => {
    const start = performance.now();

    let found = false;
    array.filter((value, index) => {
        if (value === number) { found = index; }
    });

    if (found) { console.log("Encontrado en el index " + found); } else { console.log("No encontrado!"); }

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);

    return false;
}

// 4.
const find_search = (array, number) => {
    const start = performance.now();

    let found = false;
    array.find((value, index) => {
        if (value === number) { found = index; }
    });

    if (found) { console.log("Encontrado en el index " + found); } else { console.log("No encontrado!"); }

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);

    return false;
}

// 5.
const map_search = (array, number) => {
    const start = performance.now();

    let found = false;
    array.map((value, index) => {
        if (value === number) { found = index; }
    });

    if (found) { console.log("Encontrado en el index " + found); } else { console.log("No encontrado!"); }

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);

    return false;
}

// 6.
const includes_search = (array, number) => {
    const start = performance.now();

    if (array.includes(number)) {
        console.log("Encontrado!");
    }
    else {
        console.log("No Encontrado!");
    }

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);
}

// 7. 
const indexof_search = (array, number) => {
    const start = performance.now();

    console.log((array.indexOf(number) === -1) ? "No encontrado!" : "Encontrado!");

    const duration = performance.now();
    console.log(`Execution time: ${duration - start} ms`);

    return false;
}

const listNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
    73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
    85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100
];

let findNumber = 455;

const array_th = [];
for (i = 0; i < 10000; i++) {
    array_th.push(i);
}

console.log(array_th);

console.log("/****** Búsqueda binaria ******/")
binary_search(array_th, findNumber);

console.log("");

console.log("/****** Búsqueda por extremos ******/")
corners_search(array_th, findNumber);

console.log("");

console.log("/****** Filter ******/")
filter_search(array_th, findNumber);

console.log("");

console.log("/****** Find ******/")
find_search(array_th, findNumber);

console.log("");

console.log("/****** Map ******/")
map_search(array_th, findNumber);

console.log("");

console.log("/****** Includes ******/")
includes_search(array_th, findNumber);

console.log("");

console.log("/****** IndexOf ******/")
indexof_search(array_th, findNumber);