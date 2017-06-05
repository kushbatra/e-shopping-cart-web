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
	}
}