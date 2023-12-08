import { LightningElement } from 'lwc';
const COLUMNS=[

    {label:'title',fieldName:'title'},
    {label:'description',fieldName:'description'},
    {label:'price',fieldName:'price',type:'currency'},
    {label:'image',fieldName:'image',type:'customImage',typeAttributes:{title:'Avnish'}},
]
export default class Products extends LightningElement {

    products=[];
    columns=COLUMNS;
    connectedCallback (){
        this.getProducts();

    }
    async getProducts()
    {
        const response= await fetch('https://fakestoreapi.com/products');
        if (response.ok)
        {
            this.products=await response.json();
        }

    }
}