var checkoutPage = {
	flag : true,
	jsonData : {
		product : [ {
			"productId" : 1,
			"path" : "",
			"quantity" : "",
			"productName" : "Teek Wood 4 Chairs Set",
			"price" : ""
		} ]
	},
	testJsonData : {
		product : [ {
			"SNo" : 1,
			"productId" : 1,
			"path" : "tables1.jpg",
			"quantity" : 1,
			"productName" : "Teek Wood 4 Chairs Set",
			"price" : 650
		}, {
			"SNo" : 2,
			"productId" : 3,
			"path" : "tables3.jpg",
			"quantity" : 1,
			"productName" : "Birstrom wood 6 Chairs Set",
			"price" : 800
		} ]
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
	}
}