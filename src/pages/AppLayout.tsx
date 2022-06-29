import React from 'react';
import { Outlet } from 'react-router-dom';
export const AppLayout = () => {
    return (
        <>
            <div className="App HardLine">
                <div className={'App-header'}>Something</div>
            </div>
            <div title={'content'} className={'app-layout'} style={{}}>
                <div title={'leftNav'} className={'left-nav'}>Left Nav
                </div>
                <div title={'page view'} className={'page-view'}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};