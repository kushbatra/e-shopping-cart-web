var checkoutPage = {
	flag : true,
	cartData : {
		product : []
	},
	init : function() {
		//alert('checkout-init');
		this.setUpEvents();
	},

	setUpEvents : function() {
		/*$("#checkout").click(
				function(e) {
					alert("checkout2");
					utility.getData("GET", "home/getCategories",
							checkoutPage.testJsonData, "html/description.html",
							"#description-template", "#main-body");
					e.preventDefault();
				});*/
		$("#tables_cart_0").click(function(e) {
			//alert('ts1_cart');

			e.preventDefault();
		});
		$("#tables_cart_1").click(function(e) {
			//alert('ts1_cart');

			e.preventDefault();
		});
		$("#tables_cart_2").click(function(e) {
			//alert('ts1_cart');

			e.preventDefault();
		});
		$("#beds_cart_0").click(function(e) {
			//alert('ts1_cart');
			// $("#main-body").load("html/description.html");
			// var data = {"productId": "4"};
			// utility.getData("GET", "home/getProductInfo", data,
			// "html/description.html", "#description-template", "#main-body");
			e.preventDefault();
		});
		$("#beds_cart_1").click(function(e) {
			//alert('ts1_cart');

			e.preventDefault();
		});
		$("#beds_cart_2").click(function(e) {
			alert('ts1_cart');

			e.preventDefault();
		});
		$('.value-plus').on('click', function(){
			var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
			if(newVal<=3) divUpd.text(newVal);
		});
		$('.value-minus').on('click', function(){
			var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
			if(newVal>=1) divUpd.text(newVal);
		});
		$('.close1').on('click', function(c){
			alert('close1');
			$('.rem1').fadeOut('slow', function(c){
				$('.rem1').remove();
			});	  
		});
		$('.close2').on('click', function(c){
			$('.rem2').fadeOut('slow', function(c){
				$('.rem2').remove();
			});	  
		});
		$('.close3').on('click', function(c){
			$('.rem3').fadeOut('slow', function(c){
				$('.rem3').remove();
			});	  
		});
		$('.close4').on('click', function(c){
			$('.rem4').fadeOut('slow', function(c){
				$('.rem4').remove();
			});	  
		});
		$('.close5').on('click', function(c){
			$('.rem5').fadeOut('slow', function(c){
				$('.rem5').remove();
			});	  
		});
		$('.close6').on('click', function(c){
			$('.rem6').fadeOut('slow', function(c){
				$('.rem6').remove();
			});  
		});
	}
}