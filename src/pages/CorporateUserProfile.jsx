import React from 'react'
import { useParams } from 'react-router-dom'

export default function CorporateUserProfile() {

    const { id } = useParams()

    return (
        <div>
            <h1>Kurumsal müşteri profil {id}</h1>
        </div>
    )
}
