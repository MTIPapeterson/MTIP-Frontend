"use client"
import HubspotForm from 'react-hubspot-form'
import "./hubspotStyle.css"

const HubspotContactForm = () => {
   
    return (
        <HubspotForm 
        portalId='7363995'
        formId='8348a667-1fa9-47b2-867f-4adbcdea725e'
        cssClass='hubspotForm'
        />
    );

}

export default HubspotContactForm;
