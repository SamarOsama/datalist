import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import EventsAndAttachments from '../components/EventsAndAttachments';
import HeaderDetailsForm from '../components/HeaderDetailsForm';
import Tasks from '../components/Tasks';
import Header from '../outline/Header';
import Paths from './Routes'

export default function AppNavigation() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path={Paths.Tasks} element={<EventsAndAttachments />} />
                <Route exact path={'/'} element={<HeaderDetailsForm />} />

            </Routes>
        </BrowserRouter>
    )
}
