import React from 'react';
import {Navigate, Route, Routes} from 'react-router';
import './App.scss';
import {AppLayout} from './pages/AppLayout';
import {MainPage} from './pages/MainPage';
import {StoryDisplay} from './pages/subpages/StoryDisplay';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index={true} element={<Navigate to={'/home'}/>}/>
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/story" element={<StoryDisplay/>}>
                    <Route path=":storyId" element={<StoryDisplay/>}/>
                </Route>
                {/*<Route path="car-types" element={<CarTypesPage />} />*/}

                <Route
                    path="*"
                    element={
                        <main style={{padding: '1rem'}}>
                            <p>There&apos;s nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
