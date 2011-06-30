// ==========================================================================
// Project:   Webpage.pagesArrayController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Webpage */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Webpage.pagesArrayController = SC.ArrayController.create(
/** @scope Webpage.pagesArrayController.prototype */ {

  // TODO: Add your own code here.
	orderBy: 'title'

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('webpage');