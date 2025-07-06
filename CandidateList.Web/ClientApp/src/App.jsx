import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import ViewDetails from './Pages/ViewDetails';
import Accepted from './Pages/Accepted';
import Rejected from './Pages/Rejected';
import CandidateStatusCountContext from './components/CandidateStatusContext';

const App = () => {
    return (
        <CandidateStatusCountContext>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/viewdetails/:id' element={<ViewDetails />} />    
                    <Route path='/accepted' element={<Accepted />} />
                    <Route path='/rejected' element={<Rejected />} />
                </Routes>
            </Layout>
        </CandidateStatusCountContext>
    );
}

export default App;