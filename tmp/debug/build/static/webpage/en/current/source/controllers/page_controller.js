// ==========================================================================
// Project:   Webpage.pageController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Webpage */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Webpage.pageController = SC.ObjectController.create(
/** @scope Webpage.pageController.prototype */ {

  // TODO: Add your own code here.
	contentBinding:'Webpage.pagesArrayController.selection',
	contentBindingDefault: SC.Binding.single()
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('webpage');