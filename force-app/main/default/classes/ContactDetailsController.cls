public without sharing class ContactDetailsController {
    public ContactDetailsController() {

    }

    @AuraEnabled
    public static List<ContactDetailsDTO> GetContactDetailsData(Id contactId){
    
        List<ContactDetails__C> cds = [Select Id,Contact__r.Name,ImageURL__C from ContactDetails__C where Contact__C=:contactId];
        ContactDetailsDTO cd=null;
        List<ContactDetailsDTO> contactDetails=new List<ContactDetailsDTO>();

        for(ContactDetails__C c:cds)
        {
            cd= new ContactDetailsDTO();
            cd.Name=c.Contact__r.Name;
            cd.Photo=c.ImageURL__C;
            cd.Id=c.Id;
            contactDetails.add(cd);
        }

        return contactDetails;

    }
}