/*Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, 
Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento */

function mostrar()
{
	let origen;
	let cantidad;
	let costoVuelo;
	let contadorA = 0;
	let acumuladorVacA = 0;
	let contadorE = 0;
	let contadorU = 0;
	let origenMax;
	let acumuladorVacunas = 0
	let promedio;
	let acumuladorCosto = 0;
	let descuento = 0;
	let descuentoCalculado;
	let importeFinal;

	for (let i = 0; i < 10; i = i + 1) {

		origen = prompt("Ingrese origen");
		while (!(origen == "Asia" || origen == "Europa" || origen == "USA")) {
			origen = prompt("Dato invalido. Ingrese origen");
		}

		cantidad = parseInt(prompt("Ingrese cantidad"));
		while (isNaN(cantidad) || cantidad < 1) {
			cantidad = parseInt(prompt("Dato invalido. Ingrese cantidad"));
		}

		costoVuelo = parseInt(prompt("Ingrese el costo del vuelo"));
		while (isNaN(costoVuelo) || costoVuelo < 1000000 || costoVuelo > 5000000) {
			costoVuelo = parseInt(prompt("Dato invalido. Ingrese el costo del vuelo"));
		}

		if (origen == "Asia") {

            contadorA = contadorA + 1;

			acumuladorVacA = acumuladorVacA + cantidad;

        } else if (origen = "Europa") {

            contadorE = contadorE + 1;

        } else {

            contadorU = contadorU + 1;

        }

		acumuladorVacunas = acumuladorVacunas + cantidad;

		acumuladorCosto = acumuladorCosto + costoVuelo;

	}

	if (contadorA > contadorE && contadorA > contadorU) {

        origenMax = "Asia";

    } else if (contadorE >= contadorA && contadorE > contadorU) {

        origenMax = "Europa";

    } else {

        origenMax = "USA";

    }

	if (acumuladorVacunas > 4000000) {

		descuento = 30;
	
	} else if (acumuladorVacunas > 2000000) {
	
		descuento = 20;
	
	} else {
	
		descuento = 0;
	
	}

	descuentoCalculado = acumuladorCosto * descuento / 100;

	importeFinal = acumuladorCosto - descuentoCalculado;

	promedio = acumuladorVacunas / acumuladorVacA;


	document.write("El origen que envió mayor cantidad de vacunas " + origenMax + "<br>");
	document.write("El promedio de vacunas llegadas de Asia  " + promedio + "<br>");
	document.write("El total sin descuentos a pagar por los gastos de los viajes " + acumuladorCosto + "<br>");
	document.write(importeFinal + " tuvieron un descuento de " + descuentoCalculado + "<br>");
	if (descuento == 0) {
		document.write("No hubo descuento <br>");
	}
}
