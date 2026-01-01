import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">
                {CONTACT.address}
            </p>

            <p className="my-4">
                {CONTACT.phoneNo}
            </p>
            <a href={`mailto:${CONTACT.email}?subject=Portfolio%20Inquiry&body=Hello%20Banuka,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20contact%20you.`} className='border-b'>
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact