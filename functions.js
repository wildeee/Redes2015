module.exports = {

	soma: function(operando1, operando2){
		return operando1 + operando2;
	}

	,subtracao: function(operando1, operando2){
		return operando1 - operando2;
	}

	,multiplicacao: function(fator1, fator2){
		return fator1 * fator2;
	}

	,divisao: function(dividendo, divisor){
		return dividendo / divisor;
	}

	,raizQuadrada: function(num){
		return Math.sqrt(num);
	}

	,potencia: function(base, expoente){
		var resultado = base;
		for (var i = 1; i < expoente; i++) {
			resultado *= base;
		}
		return resultado;
	}

	,fatorial: function(num){
		var resultado = num;
		for (var countdown = num - 1; countdown > 0; countdown--){
			resultado *= countdown;
		}
		return resultado;
	}
};