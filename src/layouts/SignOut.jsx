import React from 'react'
import { Button } from 'react-bootstrap'

export default function SignOut({ handleSignUp, handleLogIn }) {
    return (
        <div>
            <Button onClick={handleSignUp} variant="outline-light" className='me-2'>Üye Ol</Button>
            <Button onClick={handleLogIn} variant="outline-light" >Üye Girişi</Button>
        </div>
    )
}
