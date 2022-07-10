import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state-management/hooks';
import { StoryInformation } from '../services/StoryDataService';
import { getAllStories } from '../state-management/thunks/getAllStories';
import { StoryLink } from '../components/StoryLink';

export const AppLayout = () => {
    const dispatch = useAppDispatch();
    const storiesArray: StoryInformation[] = useAppSelector(state => state.stories.allStories);
    useEffect(() => {
        dispatch(getAllStories());
    }, [storiesArray])

    return <>
        <div className="App HardLine">
            <div className={'App-header'}>Something</div>
        </div>
        <div title={'content'} className={'app-layout'} style={{}}>
            <div title={'leftNav'} className={'left-nav'}>
                {storiesArray.map((value, index) => {
                    return (<StoryLink story={value} key={index}></StoryLink>)
                })}
            </div>
            <div title={'pageView'} className={'page-view'}>
                <Outlet></Outlet>
            </div>
        </div>
    </>;
};