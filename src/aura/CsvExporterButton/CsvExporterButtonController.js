/*
 * Created by Manzanit0 on 20/08/2018.
 */
({
    downloadCsv : function(component, event, helper){
        var stockData = component.get("v.records");

        // call the helper function which returns the CSV data as a String
        var csv = helper.convertArrayOfObjectsToCSV(component, stockData);
        if (csv == null){return;}

        // Create a temporal <a> html tag to download the CSV file
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_self';
        hiddenElement.download = component.get("v.fileName");
        document.body.appendChild(hiddenElement); // Required for FireFox browser
        hiddenElement.click(); // using click() js function to download csv file
    },

})