import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Episodes from './components/pages/Episodes';
import Quests from './components/pages/Quests';
import Committee from './components/pages/Committee';
import Quest0 from './components/pages/quests/Quest0';
import Episode0 from './components/pages/episodes/Episode0';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/episodes' element={<Episodes />} >
                <Route path='episode0' element={<Episode0 />} />
            </Route>
            <Route path='/quests' element={<Quests />}>
                <Route path='quest0' element={<Quest0 />} />
            </Route>
            <Route path='/committee' element={<Committee />} />
        </Routes>
    );
};

export default RoutesConfig;
