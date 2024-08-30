"use client"
import HubspotForm from 'react-hubspot-form'
import "./hubspotStyle.css"

const HubspotContactForm = () => {
   
    return (
        <HubspotForm 
        portalId='20251044'
        formId='98d9eb5f-370d-44aa-a184-b977834180b9'
        cssClass='hubspotForm'
        />
    );

}

export default HubspotContactForm;
