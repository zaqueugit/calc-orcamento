$(function() {

$("#valorinicial, #ipi, #st, #icms, #lucro").keyup(function(){


var total = 0;    	
var valorInicial = Number($("#valorinicial").val());
var ipi = Number($("#ipi").val());
var st = Number($("#st").val());
var icms = Number($("#icms").val());
var lucro = Number($("#lucro").val());

var ipiSoma = (valorInicial * (ipi / 100)) + valorInicial
var stSoma = (ipiSoma * (st / 100)) + ipiSoma
var icmsSoma = (stSoma * (icms / 100)) + stSoma

var total = icmsSoma * lucro

$('#total').val(parseFloat((total.toFixed(2))));

});
});

