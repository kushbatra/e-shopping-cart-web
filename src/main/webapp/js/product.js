var productPage = {
	flag : true,
	init : function() {
		this.setUpEvents();
	},

	setUpEvents : function() {
		$("#tables_quick_view_0").click(
				function(e) {
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
					var data = {
						"productId" : "2"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#beds_quick_view_0").click(
				function(e) {
					var data = {
						"productId" : "3"
					};
					utility.getData("GET", "product/getProductInfo", data,
							"html/description.html", "#description-template",
							"#main-body");
					e.preventDefault();
				});
		$("#beds_quick_view_1").click(
				function(e) {
					var data = {
						"productId" : "4"
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
															"price" : 650, "totalprice":650};
					productPage.addCart(data);
					e.preventDefault();
				}
			);
			$("#tables_cart_1").click(
				function(e) {
					var data = {"productId" : 2,"path" : "tables2.jpg", "quantity" : 1,
															"productName" : "Hard Wood 6 Chairs",
															"price" : 700, "totalprice":700};
					productPage.addCart(data);
					e.preventDefault();
				}
			);
			$("#beds_cart_0").click(
				function(e) {
					var data = {"productId" : 3,"path" : "beds3.jpg", "quantity" : 1,
															"productName" : "Sleigh bed",
															"price" : 950, "totalprice":950};
					//alert('cart click before: ' + JSON.stringify(checkoutPage.cartData));
					productPage.addCart(data);
					//alert('cart click after: ' + JSON.stringify(checkoutPage.cartData));
					
					//e.preventDefault();
				}
			);
			$("#beds_cart_1").click(
				function(e) {
					var data = {"productId" : 4,"path" : "beds4.jpg", "quantity" : 1,
															"productName" : "Trundle bed",
															"price" : 1100, "totalprice":1100};
					productPage.addCart(data);
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
							this.price = this.totalprice + data.price;
							flag=false;
						} else {
							if(counter == checkoutPage.cartData.product.length && flag) {
								checkoutPage.cartData['product'].push(data);
							}
						}
					});
				}
		checkoutPage.cartData.total = checkoutPage.cartData.total + data.price;
	}
}