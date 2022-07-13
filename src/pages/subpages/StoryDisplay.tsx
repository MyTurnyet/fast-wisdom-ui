import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../state-management/hooks';
import { StoryInformation } from '../../services/StoryDataService';
import './StoryDisplay.scss';

export const StoryDisplay = () => {
	const params = useParams();
	const emptyStory: StoryInformation = {
		description: 'empty',
		numberOfVotes: 0,
		storyId: 'empty',
		title: '',
		voteAverage: 0,
	};
	const allStories = useAppSelector((state) => state.stories.allStories);
	const storyToDisplay =
		allStories.find((value) => value.storyId === params.storyId) ?? emptyStory;
	return (
		<div className={'StoryDisplay'}>
			<div className={'text-data'}>
				<span className={'label'}>Title:</span>
				<span title={'title'}>{storyToDisplay.title}</span>
			</div>
			<div className={'text-data'}>
				<div className={'label'}>Description:</div>
				<span title={'description'}>{storyToDisplay.description}</span>
			</div>
			<div className={'text-data'}>
				<span className={'label'}>Number of Votes:</span>
				<span title={'voteCount'}>{storyToDisplay.numberOfVotes}</span>
			</div>
			<div className={'text-data'}>
				<span className={'label'}>Average:</span>
				<span title={'voteAverage'}>{storyToDisplay.voteAverage}</span>
			</div>
		</div>
	);
};
