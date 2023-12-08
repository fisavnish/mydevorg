// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

// string tempvar = 'Enter_your_name_here';
// System.debug('Hello World!');
// System.debug('My name is ' + tempvar);
/*
Schema.sObjectType contactsObjectType=ContactDetails__C.getSObjectType();
Schema.DescribeSObjectResult  contactsObjectTypeResult=contactsObjectType.getDescribe();

System.debug('Api Name = ' + contactsObjectTypeResult.getName());

System.debug('Api Name = ' + contactsObjectTypeResult.isCustom());

System.debug('Api Name = ' + contactsObjectTypeResult.isAccessible());
System.debug('Api Name = ' + contactsObjectTypeResult.getLabel());
*/
// get all object name and metadata instance
Map<string,Schema.sObjectType> sObjectMap=Schema.getGlobalDescribe();



// for(string key:sObjectMap.keySet())
// {
//     system.debug(key);
// }

Schema.sObjectType objectType=sObjectMap.get('ContactDetails__C');
Schema.sObjectType objectTypeInstance=sObjectMap.get('ContactDetails__C');
Map<String,Schema.SObjectField> objectFields=
    objectTypeInstance.getDescribe().fields.getMap();
for(Schema.SObjectField  field:objectFields.values())
{
    Schema.DescribeFieldResult fieldResult=field.getDescribe();
    
    System.debug(fieldResult.getName() );
}


