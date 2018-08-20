# CsvExporterButton

### A reusable button packaged as a lightning component to export JS objects as a CSV

## Use

```
<aura:component description="ExampleComponent" controller="ExampleController">
    <!-- 
    - In your code, implement an Apex Controller which retrieves some records, 
    - as well as the init action to populate the table.
    -->
    
    <!-- attributes -->
    <aura:attribute type="Object[]" 	name="allRecords" />
    <aura:attribute type="List" 		name="columns" />

    <!-- handlers-->
    <aura:handler name="init"   value="{! this }"       action="{! c.init }"/>
    <aura:handler name="change" value="{!v.allRecords}" action="{!c.renderPage}" />

    <lightning:card title="Example">
        <aura:set attribute="actions">
            <!-- Simply give the button the records and the export file name -->
            <c:CsvExporterButton records="{!v.allRecords}" fileName="export.csv" />
        </aura:set>

        <p class="slds-p-horizontal_small">
            <lightning:datatable
                    keyField="id"
                    data="{! v.allRecords }"
                    columns="{! v.columns }"
                    hideCheckboxColumn="true"/>
        </p>
    </lightning:card>
</aura:component>
```