var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

// Create a table for 'Dozer' with default settings
mobileApp.tables.add('DozerStatusData');
mobileApp.tables.add('MobileEquipmentDB');
mobileApp.tables.add('CheckListDB');
mobileApp.tables.add('Employee_Data');
mobileApp.tables.add('UserReport');
mobileApp.tables.add('TransactionID');


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
