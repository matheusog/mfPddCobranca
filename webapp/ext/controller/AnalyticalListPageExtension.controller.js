sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./BaseController"
], function(Controller, JSONModel, BaseController) {
	"use strict";
	
	var oController = {
		
		onInit: function() {
			var oChart = this._getListReportTab(this.oView, "chart");
			this._changeChartDefaultSettings(oChart);
			
			var oTable = this._getListReportTab(this.oView, "table");
			this._changeTableDefaultSettings(oTable);
			
		},
		
		adaptNavigationParameterExtension: function(oSelectionVariant, oObjectInfo) {
			this.adaptNavigationParameter(oSelectionVariant, oObjectInfo); 
		},
		
		_changeChartDefaultSettings: function(oChart) {
            oChart.setShowDownloadButton(true);
        }, 
        
        _changeTableDefaultSettings: function(oTable) {
            oTable.setUseExportToExcel(true);
        },
        
        _getListReportTab: function(oView, sId) {
			var sChart = oView.getId() + "--" + sId;
			return oView.byId(sChart);
		}
	};
	
	$.extend(oController, BaseController.getMethods());
	
	return sap.ui.controller("com.mf.sap.fi.cobrancas.PDDAnalysis.ext.controller.AnalyticalListPageExtension", oController); 
});