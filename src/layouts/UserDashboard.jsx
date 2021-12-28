import React from 'react'
import { Route } from 'react-router-dom'
import AddCarImagePage from '../pages/AddCarImagePage'
import AddCarPage from '../pages/AddCarPage'
import AddRentalPage from '../pages/AddRentalPage'
import CarDetailsPage from '../pages/CarDetailsPage'
import CarList from '../pages/CarList'
import ImagePage from '../pages/ImagePage'

export default function UserDashboard() {
    return (
        <div>
            <Route exact path="/" component={CarList} />
            <Route exact path="/addCar" component={AddCarPage} />
            <Route exact path="/carDetails/:id" component={CarDetailsPage} />
            <Route exact path="/carDetails/addRental/:id" component={AddRentalPage} />
            <Route exact path="/addCarImage" component={AddCarImagePage} />
            <Route exact path="/imagePage" component={ImagePage} />
        </div>
    )
}
