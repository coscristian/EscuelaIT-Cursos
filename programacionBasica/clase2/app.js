function solve3() {
    var nombre = prompt('Ingrese su nombre');
    var apellido1 = prompt('Ingrese su apellido');
    var apellido2 = prompt('Ingrese su segundo apellido');
    if(nombre.length == 0 || apellido1.length == 0 || apellido2.length == 0)
        return alert("Campo vacío");
    alert(`${nombre} ${apellido1} ${apellido2}`);
}

function solve2() {
    var input = prompt('Ingrese una cadena');
    var longitud = input.length;
    if(longitud == 0) alert("Cadena vacía");
    else alert(`Caracter en la ultima posición ${input.charAt(longitud-1)}`);
}

function solve1() {
    var num1 = parseInt(prompt("Ingrese un número:"))
    var num2 = parseInt(prompt("Ingrese otro número:"))
    if(num2 == 0) throw new Error("División entre 0 no es valida");
    alert(`${num1} % ${num2} = ${num1 % num2}`);
}

function mainMenu() {
    var salir = false;
    var menuString =
        `
            1. Resto división \n
            2. Ultimo caracter \n
            3. Nombre, apellidos \n
            4. Salir \n
            Selecciona una opción
        `;

    while (!salir) {
        try {
            var userInput = parseInt(prompt(menuString));
            switch (userInput) {
                case 1:
                    solve1(); break;
                case 2:
                    solve2(); break;
                case 3:
                    solve3(); break;
                case 4: 
                    salir = true; break;        
                default:
                    console.log("Invalid Input");
                    break;
            }
        } catch (error) {
            alert(error);
        }
    }
}

mainMenu();
// Cambio ultima hora