import React from 'react'
import { useParams } from 'react-router-dom'

export default function IndividualUserProfile() {

    const { id } = useParams()

    return (
        <div>
            <h1>Bireysel müşteri profil {id}</h1>
        </div>
    )
}
