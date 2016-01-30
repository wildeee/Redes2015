module.exports = function(app){

	app.get('/soma/:n1/:n2', function(req, res){
		var num1 = parseInt(req.params.n1);
		var num2 = parseInt(req.params.n2);
		res.send(
			functions.soma(num1, num2).toString()
		);
	});

	app.get('/subtrai/:n1/:n2', function(req, res){
		var num1 = parseInt(req.params.n1);
		var num2 = parseInt(req.params.n2);
		res.send(
			functions.subtracao(num1, num2).toString()
		);
	});

	app.get('/multiplica/:n1/:n2', function(req, res){
		var num1 = parseInt(req.params.n1);
		var num2 = parseInt(req.params.n2);
		res.send(
			functions.multiplicacao(num1, num2).toString()
		);
	});

	app.get('/divide/:n1/:n2', function(req, res){
		var num1 = parseInt(req.params.n1);
		var num2 = parseInt(req.params.n2);
		res.send(
			functions.divisao(num1, num2).toString()
		);
	});

	app.get('/raiz/:n1', function(req, res){
		var num1 = parseInt(req.params.n1);
		res.send(
			functions.raizQuadrada(num1).toString()
		);
	});

	app.get('/potencia/:n1/:n2', function(req, res){
		var num1 = parseInt(req.params.n1);
		var num2 = parseInt(req.params.n2);
		res.send(
			functions.potencia(num1, num2).toString()
		);
	});

	app.get('/fatorial/:n1', function(req, res){
		var num1 = parseInt(req.params.n1);
		res.send(
			functions.fatorial(num1).toString()
		);
	});

};