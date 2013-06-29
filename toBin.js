;(function(){
	'use strict'
	'as';
	var array_of_results = [];

	function getBinaryNumber(number) {
		array_of_results.push(number%2);
		return  ( number !== 0 && number!== 1 ) ? getBinaryNumber(Math.floor(number/2)) : array_of_results.reverse().join('');
	}

	function getDecimalNumber(str) {
		var  i,len,result, arr_of_dec_number;

		arr_of_dec_number = str.split('').map(function(x){ return parseInt(x,10)});
		array_of_results.reverse();
		result = 0;

		for (i = 0, len = arr_of_dec_number.length; i < len; i += 1) {
			result += arr_of_dec_number[i]*Math.pow(2,i);
		}

		return result;
	}

	function init() {
		var 	number_input,
				number_value,
				result_input,
				converter_bin_btn,
				converter_dec_btn;

		converter_bin_btn = document.querySelector("#converter-bin-btn");
		converter_dec_btn = document.querySelector("#converter-dec-btn");
		result_input = document.querySelector("#result");
		number_input = document.querySelector('#number-in-dec');

		converter_bin_btn.onclick = function () {
			number_value = parseInt(number_input.value,10);
			result_input.value = getBinaryNumber(number_value);
			array_of_results = array_of_results.slice(array_of_results.length);
		};

		converter_dec_btn.onclick = function () {
			result_input.value = getDecimalNumber(number_input.value);
		}
	}

	window.onload = init;

})();



/*

	function getBinaryNumber (number) {
		var result,
			i;

		result = [];

		if (number === 0) return '0';

		for( i = number ; i > 0 ; i = Math.floor(i/2) ){
			result.push(i%2);
		}

		return result.reverse().join('');
	}

}*/