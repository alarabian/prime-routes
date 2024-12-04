import React from 'react'
import StayTouch from '../home/stay-touch/StayTouch'
import GetStarted from '../home/get-started/GetStarted'
import ContactDetail from './contact-detail/ContactDetail'

const ContactCom = () => {
  return (
    <>
      <div className="contactCom">
        <ContactDetail />
        <StayTouch />
        <GetStarted />
      </div>
    </>
  )
}

export default ContactCom