// ==========================================================================
// Project:   Webpage.Page Fixtures
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Webpage */

sc_require('models/page_model');

Webpage.Page.FIXTURES = [
	{
		guid: "page-1",
		title: "about",
	 	article: "Kudaw es una empresa",
	 	image: "http://www.exceleratesystems.com/latinoamerica/socios/images/Kudaw.gif" },
	{
			guid: "page-2",
			title: "products",
		 	article: "Splunk",
		 	image: "http://www.n8agrin.com/images/portfolio/splunk/splunk_logo.jpg" }
	
//			Ejemplo de Query
//			var q=SC.Query.local(Webpage.Page,"title='about'")
//  		undefined
//  		var page = Webpage.store.find(q)
//  		undefined
//  		page.getEach('title')
];
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('webpage');