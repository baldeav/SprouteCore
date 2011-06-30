// ==========================================================================
// Project:   Webpage - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Webpage */

// This page describes the main user interface for your application.  
Webpage.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'mainView BottomView'.w(),    

 topView:  SC.ToolbarView.design({
 	layout: {top:0, right:0,left:0, height:36},
 	anchorLocation: SC.ANCHOR_TOP,
 	childViews: 'labelView addButton'.w(),
 	labelView: SC.LabelView.design({
 		layout: {centerY: 0, height: 24, left:8, width:200},
 		controlSize: SC.LARGE_CONTROL_SIZE,
 		fontWeight: SC.BOLD_WEIGHT,
 		value: 'Pages'
 	}),
 	addButton: SC.ButtonView.design({
 	layout: { centerY: 0, height: 24, right:12, width: 100},
 	title:'add yourself'	
 	}),
 }),
	
  mainView: SC.ScrollView.design({
  	layout: {top: 36, left: 0, right: 0, bottom: 100},
  	backgroundColor: 'white',
  	contentView: SC.GridView.design({
  		layout: {top: 10, left:10, right:10, bottom:10},
  		rowHeight: 20,
  		columnWidth:100,
  		contentValueKey:'title',
  		contentBinding: 'Webpage.pagesArrayController.arrangedObjects',
  		selectionBinding: 'Webpage.pagesArrayController.selection'
  	}),
  }),

  BottomView: SC.LabelView.design({
  	layout: {top: 136, left: 0, right: 0, bottom: 0},
	valueBinding: 'Webpage.pageController.article',
	})		
   
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('webpage');