$(function() {

$("#valorinicial, #ipi, #st, #icms, #porcentagemlucro").keyup(function(){

var total = 0;    	
var valorInicial = Number($("#valorinicial").val());
var ipi = Number($("#ipi").val());
var st = Number($("#st").val());
var icms = Number($("#icms").val());
var porcentagemLucro = Number($("#porcentagemlucro").val());

var total = (valorInicial + (ipi / 100) + (st / 100) + (icms / 100)) * porcentagemLucro;
$('#total').val(parseFloat(total.toFixed(2)));