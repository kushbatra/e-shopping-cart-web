var homePage = {
	flag : true,
	init : function() {
		//alert('homePage-init');
		this.setUpEvents();
		$('#empty_cart').click();
	},

	setUpEvents : function() {
		$("#Tables").click(
				function(e) {
					//alert('tables-a');
					var data = JSON.stringify({
						"subCat" : "TABLES",
						"productId" : "1"
					});
					utility.getData("POST", "product/getCategoryProductsInfo",
							data, "html/products.html", "#products-template",
							"#main-body");
					e.preventDefault();
				});
		$("#Beds").click(
				function(e) {
					//alert('beds-a');
					var data = JSON.stringify({
						"subCat" : "BEDS",
						"productId" : "3"
					});
					utility.getData("POST", "product/getCategoryProductsInfo",
							data, "html/products.html", "#products-template",
							"#main-body");
					e.preventDefault();
				});
		$("#home_a").click(function(e) {
			//alert('home_a');
			$("#main-body").load("html/default.html");
			e.preventDefault();
		});
		$("#checkout").click(function(e) {
			//alert('checkout');
			utility.setTemplate("html/checkout.html","#main-body");
			e.preventDefault();
		});
		$("#empty_cart").click(function(e) {
			checkoutPage.cartData.product = [];
			checkoutPage.cartData.total = 0;
			e.preventDefault();
		});
	}
}