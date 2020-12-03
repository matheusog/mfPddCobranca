sap.ui.define([
	"sap/ui/base/Object"
], function(BaseObject) {
	"use strict";
	return { 
		
		getMethods: function() {
			return {
				adaptNavigationParameter: function(oSelectionVariant, oObjectInfo) {
					if(oSelectionVariant.getSelectOptionsPropertyNames())  {
						oSelectionVariant.getSelectOptionsPropertyNames().forEach(function (sSeloptName, iIndex, aSelOptions) { 
							switch(oObjectInfo.semanticObject) { 
								case 'MFCobranca': 
									if(	/\b(\w*Amount\w*)\b/.test(sSeloptName) || /\b(\w*Taxes\w*)\b/.test(sSeloptName) ||
										/\b(\w*Unit\w*)\b/.test(sSeloptName) || /\b(\w*Currency\w*)\b/.test(sSeloptName)) {
										oSelectionVariant.removeSelectOption(sSeloptName);
									}
									break;
			            	}
						}.bind(this));
					}
				}
			};
		}
	};
});