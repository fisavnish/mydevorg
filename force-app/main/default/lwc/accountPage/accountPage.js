import { LightningElement, track, api ,wire} from 'lwc';

export default class AccountPage extends LightningElement {
    @api recordId;
    @track contactColumns = [
        { label: 'CONTACT NAME', fieldName: 'LinkName', type: 'url', typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' } },
        { label: 'Title', fieldName: 'Title', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: "phone" }
    ]

    @track opptyColumns = [
        { label: 'OPPORTUNITY  Name', fieldName: 'LinkName', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'} },
        { label: 'Stage', fieldName: 'StageName', type: 'text' },
        { label: 'Amount', fieldName: 'Amount', type: 'currency', cellAttributes: { alignment: 'left' } },
        { label: 'Close Date', fieldName: 'CloseDate', type:"date-local", typeAttributes:{month:"2-digit", day:"2-digit"} }
    ]
    
    @track caseColumns = [
        { label: 'Case', fieldName: 'LinkName', type: 'url', typeAttributes: {label: { fieldName: 'CaseNumber' }, target: '_top'} },
        { label: 'Contact Name', fieldName: 'Contact_LinkName', type: 'url', typeAttributes: {label: { fieldName: "Contact_Name" }, target: '_top'}},
        { label: 'Subject', fieldName: 'Subject', type:"text"},
        { label: 'Priority', fieldName: 'Priority', type: 'text' }
    ]
    acccountId;
  
    customActions = [{ label: 'Custom action', name: 'custom_action' }]
    
    @api
    customHandler() {
        alert("It's a custom action!")
    }

    handleAccountIdChange(event) {
        this.accountId = event.detail.value[0]
    }
}