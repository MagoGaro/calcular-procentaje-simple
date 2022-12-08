function calcular(){
	let valor1 = document.porcentaje.valor1.value;
	let valor2 = document.porcentaje.valor2.value;
	let r1 = parseInt(valor1);
	let r2 = parseInt(valor1);
	let resultado = (valor1*valor2)/100;
	
	r1 += resultado;
	r2 -= resultado;
	document.getElementById("r1").innerHTML = "<strong>"+"el "+valor2+"% de "+valor1+" es: "+resultado+"</strong>";
	document.getElementById("r2").innerHTML = "<strong>"+"el "+valor2+"% mas de "+valor1+" es: "+r1+"</strong>";
	document.getElementById("r3").innerHTML = "<strong>"+"el "+valor2+"% menos de "+valor1+" es: "+r2+"</strong>";

	document.getElementById("r4").innerHTML = "<strong>"+"Gracias por usar este mini calculador de porcentaje"+"</strong>";
}

function limpiar(){
  document.porcentaje.valor1.value = "";
  document.porcentaje.valor2.value = "";
  document.getElementById("r1").innerHTML = "";
	document.getElementById("r2").innerHTML = "";
	document.getElementById("r3").innerHTML = "";
	document.getElementById("r4").innerHTML = "";
}