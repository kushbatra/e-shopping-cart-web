var checkoutPage = {
	flag : true,
	cartData : {
		product : [],
		total:0
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
		$('.value-plus').on('click', function(){
			var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
			var productId = $(this).parent().find('.value').attr('id');
			//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
			checkoutPage.addCart(productId);
			//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
			if(newVal<=3) divUpd.text(newVal);
		});
		$('.value-minus').on('click', function(){
			var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
			var productId = $(this).parent().find('.value').attr('id');
			//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
			checkoutPage.removeCart(productId);
			//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
			if(newVal>=1) divUpd.text(newVal);
		});
		$('.close1').on('click', function(c){
			//alert('close1: ' + JSON.stringify(checkoutPage.cartData.product));
			var productId = $(this).attr('id');
			checkoutPage.deleteCart(productId);	  
		});
		$('.close2').on('click', function(c){
			//alert('close2: ' + JSON.stringify(checkoutPage.cartData.product));
			var productId = $(this).attr('id');
			checkoutPage.deleteCart(productId);  
		});
		$('.close3').on('click', function(c){
			//alert('close3: ' + JSON.stringify(checkoutPage.cartData.product));
			var productId = $(this).attr('id');
			checkoutPage.deleteCart(productId);  
		});
		$('.close4').on('click', function(c){
			//alert('close4: ' + JSON.stringify(checkoutPage.cartData.product));
			var productId = $(this).attr('id');
			checkoutPage.deleteCart(productId);	  
		});
		$('#place_order').on('click', function(e) {
			if(checkoutPage.cartData.product.length!=0)
				utility.setTemplate("html/confirmation.html","#main-body");
			else
				alert('Add atleast 1 item in your cart to place order.');
			e.preventDefault();
		});
		$('#_back').on('click', function(e) {
			alert('Back');
			$("#main-body").load("html/default.html");
			e.preventDefault();
		});
	},
	addCart: function(productId) {
		$.each (checkoutPage.cartData.product, function() {
				if(this.productId == productId && this.quantity<3) {
					this.quantity = this.quantity + 1;
					this.totalprice = this.totalprice + this.price;
					checkoutPage.cartData.total = checkoutPage.cartData.total + this.price;
				}
			});
			utility.setTemplate("html/checkout.html","#main-body");
		},
	removeCart: function(productId) {
		$.each (checkoutPage.cartData.product, function() {
				if(this.productId == productId && this.quantity>1) {
					this.quantity = this.quantity - 1;
					this.totalprice = this.totalprice - this.price;
					checkoutPage.cartData.total = checkoutPage.cartData.total - this.price;
				}
			});
			utility.setTemplate("html/checkout.html","#main-body");
	},
	deleteCart: function(productId) {
			$.each (checkoutPage.cartData.product, function(i) {
				if(this.productId == productId) {
					checkoutPage.cartData.total = checkoutPage.cartData.total - this.totalprice;
					delete checkoutPage.cartData.product[i];
				}
			});
		utility.setTemplate("html/checkout.html","#main-body");
	}
}