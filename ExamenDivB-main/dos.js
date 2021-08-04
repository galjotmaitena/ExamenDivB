/*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta */

function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let porcentajeN;
    let porcentajeP;
    let cepaMax;
    let contadorPersonas = 0;
    let acumuladorP = 0;
    let acumuladorN = 0;
    let contadorD = 0;
    let contadorA = 0;
    let contadorB = 0;
    let maxEdadInf;
    let flag = 1;
    let contadorArgDel = 0;

    for (let i = 0; i < 8; i = i + 1) {

        nacionalidad = prompt("Ingrese nacionalidad");
		while (!(nacionalidad == "argentina" || nacionalidad == "extranjero")) {
			nacionalidad = prompt("Dato invalido. Ingrese nacionalidad");
		}

        resultado = prompt("Ingrese resultado");
		while (!(resultado == "positivo" || resultado == "negativo")) {
			resultado = prompt("Dato invalido. Ingrese resultado");
		}

        edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad) || edad < 18 || edad > 65) {
			edad = parseInt(prompt("Dato invalido. Ingrese su edad"));
		}

        cepa = prompt("Ingrese cepa");
		while (!(cepa == "delta" || cepa == "alfa" || cepa == "beta")) {
			cepa = prompt("Dato invalido. Ingrese cepa");
		}
        while ((cepa == "delta" || cepa == "alfa" || cepa == "beta") && resultado == "negativo" ) {
			cepa = prompt("Dato invalido. Ingrese ninguna");
		}

        if (resultado == "positivo") {

            acumuladorP = acumuladorP + 1;

            if (nacionalidad == "extranjero" && (flag || edad > maxEdadInf)) {

                maxEdadInf = edad;

                flag = 0;
            }

        } else {

            acumuladorN = acumuladorN + 1;

        }

        if (cepa == "delta") {

            contadorD = contadorD + 1;

            if (nacionalidad == "argentina") {

                contadorArgDel = contadorArgDel + 1;

            }

        } else if (cepa = "alfa") {

            contadorA = contadorA + 1;

        } else {

            contadorB = contadorB + 1;

        }

        contadorPersonas = contadorPersonas + 1;

    }

    porcentajeP = acumuladorP * contadorPersonas / 100;

    porcentajeN = acumuladorN * contadorPersonas / 100;

    if (contadorD > contadorA && contadorD > contadorB) {

        cepaMax = "delta";

    } else if (contadorA >= contadorD && contadorA > contadorB) {

        cepaMax = "alfa";

    } else {

        cepaMax = "beta";

    }

    document.write("Porcentaje de positivos: " + porcentajeP + "<br>");
	document.write("Porcentaje de positivos:  " + porcentajeN + "<br>");
	document.write("Cepa más encontrada " + cepaMax + "<br>");
	document.write("Edad del mayor extranjero contagiado " + maxEdadInf + "<br>");
	document.write("Cantidad de personas argentinas contagiadas con la delta " + contadorArgDel + "<br>");
}
