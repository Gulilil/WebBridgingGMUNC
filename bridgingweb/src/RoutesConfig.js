import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Episodes from './components/pages/Episodes';
import Quests from './components/pages/Quests';
import Committee from './components/pages/Committee';
import Quest0 from './components/pages/quests/Quest0';
import Quest1 from './components/pages/quests/Quest1';
import Quest2 from './components/pages/quests/Quest2';
import Episode0 from './components/pages/episodes/Episode0';
import Episode1 from './components/pages/episodes/Episode1';
import Episode2 from './components/pages/episodes/Episode2';
import Episode3 from './components/pages/episodes/Episode3';
import Episode4 from './components/pages/episodes/Episode4';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/episodes' element={<Episodes />}>
                <Route path='episode0' element={<Episode0 />} />
                <Route path='episode1' element={<Episode1 />} />
                <Route path='episode2' element={<Episode2 />} />
                <Route path='episode3' element={<Episode3 />} />
                <Route path='episode4' element={<Episode4 />} />
            </Route>
            <Route path='/quests' element={<Quests />}>
                <Route path='quest0' element={<Quest0 />} />
                <Route path='quest1' element={<Quest1 />} />
                <Route path='quest2' element={<Quest2 />} />
            </Route>
            <Route path='/committee' element={<Committee />} />
        </Routes>
    );
};

export default RoutesConfig;
