import { LightningElement,api } from 'lwc';
import getContactDetails from '@salesforce/apex/ContactDetailsController.GetContactDetailsData';

const COLUMNS=[

    {label: "Id", fieldName:'Id',type:'text'},
    {label: "Name", fieldName:'Name',type:'text'},
    {label: "Photo", fieldName:'Photo',type:'text'},
    {label: "Photo Image", fieldName:'Photo',type:'customImage',typeAttributes:{title:'Avnish'}},
]
export default class ContactDetails extends LightningElement {

    columns=COLUMNS;
    records=[];
    @api recordId
    connectedCallback(){
        this.GetContactDetails();
    }

    async GetContactDetails(){
        debugger;
        await getContactDetails({ contactId: this.recordId })
        .then((result)=>{
            console.log(result.data);
            console.log(JSON.parse(JSON.stringify(result)));
            this.records=JSON.parse(JSON.stringify(result));
            console.log(this.records);
        })
        .catch((error)=>{
            console.log(error);
        }
        )
    }

}