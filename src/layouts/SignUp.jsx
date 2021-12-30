import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import CorporateCustomerSignUp from './Users/CorporateCustomerSignUp'
import IndividualCustomerSignUp from './Users/IndividualCustomerSignUp'

export default function SignUp() {

    const [key, setKey] = useState('individual')

    return (
        <div>
            <Tabs
                variant='pills'
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="individual" title="Bireysel Müşteri">
                    <IndividualCustomerSignUp></IndividualCustomerSignUp>
                </Tab>
                <Tab eventKey="corporate" title="Kurumsal Müşteri">
                    <CorporateCustomerSignUp></CorporateCustomerSignUp>
                </Tab>
            </Tabs>
        </div>
    )
}
