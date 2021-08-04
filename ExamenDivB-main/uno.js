/*Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada */
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	let contadorR = 0;
	let contadorCh = 0;
	let contadorAm = 0;
	let acumuladorEdadR = 0;
	let promedio;
	let nombreMMaxEdad;
	let vacunaMMaxEdad;
	let mujerMaxEdad;
	let flag = 1;
	let contadorVacunados = 0;
	let contadorV2Dosis = 0;
	let vacunaMenos;
	let porcentaje2Dosis;
	let contadorAmMas18 = 0;
	let porcentajeAmMas18;

	do {

		nombre = prompt("Ingrese su nombre"); //X

		edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("Dato invalido. Ingrese su edad"));
		}

		vacuna = prompt("Ingrese vacuna");
		while (!(vacuna == "rusa" || vacuna == "china" || vacuna == "americana")) {
			vacuna = prompt("Dato invalido. Ingrese vacuna");
		}
		while (edad >= 12 && edad <= 17 && vacuna != "americana") {
			vacuna = prompt("Dato invalido. Ingrese vacuna apta para mayores de 12 y menores de 17");
		}

		dosis = prompt("Ingrese dosis");
		while (!(dosis == 'p' || dosis == 's')) {
			dosis = prompt("Dato invalido. Ingrese dosis");
		}

		sexo = prompt("Ingrese su sexo");
		while (!(sexo == 'f' || sexo == 'm')) {
			sexo = prompt("Dato invalido. Ingrese su sexo");
		}

		if (vacuna == "rusa") {

			contadorR = contadorR + 1;

			acumuladorEdadR = acumuladorEdadR + edad;

		} else if (vacuna == "china") {

			contadorCh = contadorCh + 1;

		} else {

			if (edad >= 18) {

				contadorAmMas18 = contadorAmMas18 + 1;

			}

			contadorAm = contadorAm + 1;

		}

		if (sexo == 'f' && (flag || edad > mujerMaxEdad)) {

			mujerMaxEdad = edad;
			nombreMMaxEdad = nombre;
			vacunaMMaxEdad = vacuna;

			flag = 0;
		}

		if (dosis == 's') {

			contadorV2Dosis = contadorV2Dosis + 1;

		}

		contadorVacunados = contadorVacunados + 1;

		seguir = prompt("Desea seguir ingresando datos?");

	} while (seguir == 's');

	promedio = acumuladorEdadR / contadorR;

	porcentaje2Dosis = contadorVacunados * contadorV2Dosis / 100;

	porcentajeAmMas18 = contadorAm * contadorAmMas18 / 100;

	if (contadorR < contadorCh && contadorR < contadorAm) {

		vacunaMenos = "rusa";

	} else if (contadorCh <= contadorR && contadorCh < contadorAm) {

		vacunaMenos = "china"

	} else {

		vacunaMenos = "americana"

	}

	document.write("Promedio de edad de los que se vacunaron con la rusa: " + promedio + "<br>");
	document.write("Nombre de la mujer con más edad " + nombreMMaxEdad + " vacuna " + vacunaMMaxEdad + "<br>");
	document.write("Porcentaje de personas que recibieron la vacuna americana que son mayores de edad " + contadorAmMas18 + "<br>");
	document.write("Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados " + porcentaje2Dosis + "<br>");
	document.write("Vacuna menos inoculada " + vacunaMenos + "<br>");
}
