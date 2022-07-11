import React from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../state-management/hooks';
import {StoryInformation} from '../../services/StoryDataService';
import './StoryDisplay.scss';
export const StoryDisplay = () => {
    let params = useParams();
    const emptyStory: StoryInformation = {
        description: 'empty',
        numberOfVotes: 0,
        storyId: 'empty',
        title: '',
        voteAverage: 0
    };
    const allStories = useAppSelector(state => state.stories.allStories);
    const storyToDisplay = allStories.find(value => value.storyId === params.storyId) ?? emptyStory;
    return (
        <div className={'StoryDisplay'}>
            <div className={'title'} title={'title'}>{storyToDisplay.title}</div>
            <div title={'description'}>{storyToDisplay.description}</div>
            <div title={'voteCount'}>{storyToDisplay.numberOfVotes}</div>
            <div title={'voteAverage'}>{storyToDisplay.voteAverage}</div>
        </div>
    );
}