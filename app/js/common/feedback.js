/*Feedback js*/
$(document).ready(function(){
	if($(window).width() > 724){
		$('#feedback input[name="tel"]').inputmask("+380 (99) 999-99-99");

	 	//email mask
		$('#feedback input[name="email"]').inputmask({
			mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
			greedy: false,
			onBeforePaste: function (pastedValue, opts) {
				pastedValue = pastedValue.toLowerCase();
				return pastedValue.replace("mailto:", "");
			},
			definitions: {
				'*': {
					validator: "[0-9A-Za-z'_\-]",
					casing: "lower"
				}
			}
		});
	}
});