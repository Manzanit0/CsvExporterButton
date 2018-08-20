/*
 * Created by Manzanit0 on 20/08/2018.
 */

({
    convertArrayOfObjectsToCSV : function(component, objectRecords){
        if (objectRecords == null || !objectRecords.length) {
            return null;
        }

        var csvStringResult, counter, keys, columnDivider, lineDivider;

        // CSV file parameters.
        columnDivider = ',';
        lineDivider =  '\n';

        // Get the CSV header from the object keys.
        keys = Object.keys(objectRecords[0]); // FIXME: If the first record has empty fields, then they won't appear in header.
        console.log(keys);

        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;

        for(var i=0; i < objectRecords.length; i++){
            counter = 0;

            for(var sTempkey in keys) {
                var skey = keys[sTempkey] ;

                // add , [comma] after every String value except the first.
                if(counter > 0){
                    csvStringResult += columnDivider;
                }

                csvStringResult += '"'+ objectRecords[i][skey]+'"';

                counter++;

            }

            csvStringResult += lineDivider;
        }

        return csvStringResult;
    },
})