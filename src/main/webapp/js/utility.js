//Custom namespace handler
var utility = {
		//get data from REST service and apply on page based on htmlPath, templateName and divId
	getData : function(type, url, data, htmlPath, templateName, divId) {
		$.ajax({
			type : type,
			url : url,
			data : data,
			dataType : "json",
			asyc : true,
			contentType : "application/json",
			success : function(jsonData) {
				pageContent = '';
				//alert('Success Data Here:' + JSON.stringify(jsonData));
				var afterAjax = function() {
					var menubarTemplate = $(pageContent).html();
					var theTemplate = Handlebars.compile(menubarTemplate);
					if (htmlPath == 'html/checkout.html') {
						jsonData = data;
					}
					var theCompiledHtml = theTemplate(jsonData);
					$(divId).html(theCompiledHtml);
					// Required so that js is not initialized multiple times
					if (homePage.flag && htmlPath == 'html/menubar.html') {
						homePage.init();
						homePage.flag = false;
					}
					if (htmlPath == 'html/products.html') {
						productPage.init();
						productPage.flag = false;
					}
				}
				var content = utility.getTemplate(htmlPath, afterAjax);
			}
		});
	},
	getTemplate : function(htmlPath, callback) {
		$.ajax({
			url : htmlPath,
			success : function(content) {
				//alert("GetTemplateContent:" + content);
				pageContent = content;
				callback.call();
			}
		});
	},
	setTemplate : function(path, divId) {
		$.ajax({
			url : path,
			success : function(content) {
				var template = $(content).html();
				//alert(template);
				var theTemplate = Handlebars.compile(template);
				var theCompiledHtml = theTemplate(checkoutPage.cartData);
				$(divId).html(theCompiledHtml);
				if(path=='html/confirmation.html') {
					$('#empty_cart').click();
					checkoutPage.cartData.total=0;
				}
				checkoutPage.init();
			}
		});
	}
}