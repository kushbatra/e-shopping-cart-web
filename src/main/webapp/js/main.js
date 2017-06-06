//Fires when the page is loaded completely
$(window).load(function() {

});

jQuery(document).ready(
		function($) {
			$("#header").load("html/header.html");
			$("#banner-grids").load("html/banner-grid.html");
			$("#main-body").load("html/default.html");
			$("#footer").load("html/footer.html");
			// homePage.init();

			utility.getData("GET", "product/getCategories", {},
					"html/menubar.html", "#menubar-template", "#menubar");
		});

Handlebars.registerHelper('toLowerCase', function(str) {
	return str.toLowerCase();
});

Handlebars.registerHelper('counter', function (index){
    return index + 1;
});