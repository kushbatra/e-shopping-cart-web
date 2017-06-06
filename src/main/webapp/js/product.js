var productPage = {
	flag : true,
	init : function() {
		//alert('product-init');
		this.setUpEvents();
	},

	setUpEvents : function() {
		$("#tables_quick_view_0").click(
				function(e) {
					//alert('ts1_quick_view');
					var data = {
						"productId" : "1"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#tables_quick_view_1").click(
				function(e) {
					//alert('ts1_quick_view');
					// $("#main-body").load("html/description.html");
					var data = {
						"productId" : "2"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#tables_quick_view_2").click(
				function(e) {
					//alert('ts1_quick_view');
					// $("#main-body").load("html/description.html");
					var data = {
						"productId" : "3"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#beds_quick_view_0").click(
				function(e) {
					//alert('ts1_quick_view');
					// $("#main-body").load("html/description.html");
					var data = {
						"productId" : "4"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#beds_quick_view_1").click(
				function(e) {
					//alert('ts1_quick_view');
					// $("#main-body").load("html/description.html");
					var data = {
						"productId" : "5"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#beds_quick_view_2").click(
				function(e) {
					//alert('ts1_quick_view');
					//$("#main-body").load("html/description.html");
					var data = {
						"productId" : "6"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#tables_cart_0").click(
				function(e) {
					var data = {"productId" : 1,"path" : "tables1.jpg", "quantity" : 1,
															"productName" : "Teek Wood 4 Chairs",
															"price" : 650};
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					
					e.preventDefault();
				}
			);
			$("#tables_cart_1").click(
				function(e) {
					var data = {"productId" : 2,"path" : "tables2.jpg", "quantity" : 1,
															"productName" : "Hard Wood 6 Chairs",
															"price" : 700};
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					
					e.preventDefault();
				}
			);
			$("#tables_cart_2").click(
				function(e) {
					var data = {"productId" : 3,"path" : "tables3.jpg", "quantity" : 1,
															"productName" : "Birstrom wood 6 Chair",
															"price" : 800};
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					//e.preventDefault();
				}
			);
			$("#beds_cart_0").click(
				function(e) {
					var data = {"productId" : 4,"path" : "beds4.jpg", "quantity" : 1,
															"productName" : "Sleigh bed",
															"price" : 950};
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					
					//e.preventDefault();
				}
			);
			$("#beds_cart_1").click(
				function(e) {
					var data = {"productId" : 5,"path" : "beds5.jpg", "quantity" : 1,
															"productName" : "Trundle bed",
															"price" : 1100};
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					
					e.preventDefault();
				}
			);
			$("#beds_cart_2").click(
				function(e) {
					var data = {"productId" : 6,"path" : "beds6.jpg", "quantity" : 1,
										"productName" : "Four-poster Bed", "price" : 1200};
										
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					
					e.preventDefault();
				}
			);
	},
	addCart: function(data) {
		var flag = true;
		var counter =0;
		if(checkoutPage.cartData.product.length==0) {
			checkoutPage.cartData['product'].push(data);
		} else {
			$.each (checkoutPage.cartData.product, function() {
				counter++;
						if(this.productId == data.productId) {
							this.quantity = this.quantity + 1;
							this.price = this.price + data.price;
							flag=true;
						} else {
							if(counter == checkoutPage.cartData.product.length && flag) {
								checkoutPage.cartData['product'].push(data);
							}
						}
					});
				}
	}
}