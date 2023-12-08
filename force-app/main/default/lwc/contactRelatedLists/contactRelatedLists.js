import { LightningElement, track, api ,wire} from 'lwc';
export default class ContactRelatedLists extends LightningElement {
  @api recordId;
  @track contactDetailsColumns = [
        { label: 'Id', fieldName: 'Id', type: 'url', typeAttributes: { label: { fieldName: 'Id' }, target: '_blank' } },
        { label: 'Contact', fieldName: 'Contact__c', type: 'text' },
        { label: 'Property Image', fieldName: 'ImageURL__C', type: 'customImage' }
    
    ]

   
  
    customActions = [{ label: 'Custom action', name: 'custom_action' }]
    
    @api
    customHandler() {
        alert("It's a custom action!")
    }

  
}