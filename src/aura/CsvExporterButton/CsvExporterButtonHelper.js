/*
 * Created by Manzanit0 on 20/08/2018.
 */

({
    convertArrayOfObjectsToCSV : function(component, objectRecords){
        if (objectRecords == null || !objectRecords.length) {
            return null; // TODO: give feedback to the user instead of returning null.
        }

        // CSV file parameters.
        var columnDivider = ',';
        var lineDivider =  '\n';

        // Get the CSV header from the object keys.
        var keys = new Set();
        objectRecords.forEach(function (record) {
            Object.keys(record).forEach(function (key) {
                keys.add(key);
            });
        });

        // The Set class doesn't have a "join" method.
        keys = Array.from(keys);

        var csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;

        for(var i=0; i < objectRecords.length; i++){
            var counter = 0;

            for(var sTempkey in keys) {
                var skey = keys[sTempkey] ;

                // add , [comma] after every String value except the first.
                if(counter > 0){
                    csvStringResult += columnDivider;
                }

                // If the column is indefined, leave it as blank in the CSV file.
                var value = objectRecords[i][skey] === undefined ? '' : objectRecords[i][skey];
                csvStringResult += '"'+ value +'"';

                counter++;

            }

            csvStringResult += lineDivider;
        }

        return csvStringResult;
    },
})