$(function() {

$("#valorInicial, #ipi, #st, #icms, #porcentagemLucro").keyup(function(){

var total = 0;    	
var valorInicial = Number($("#valorInicial").val());
var ipi = Number($("#ipi").val());
var st = Number($("#st").val());
var icms = Number($("#icms").val());
var porcentagemLucro = Number($("#porcentagemLucro").val());

var total = (valorInicial + (ipi / 100) + (st / 100) + (icms / 100)) * porcentagemLucro;
$('#total').val(parseFloat(total.toFixed(2)));

});
});