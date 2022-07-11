import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../state-management/hooks';
import { StoryInformation } from '../../services/StoryDataService';

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
    return (<>
        <div>{storyToDisplay.title}</div>
    </>);
}