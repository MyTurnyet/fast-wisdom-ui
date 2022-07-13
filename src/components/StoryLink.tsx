import React from 'react';
import { StoryInformation } from '../services/StoryDataService';
import { NavLink } from 'react-router-dom';
import './storyLink.scss';

export interface StoryLinkParams {
	story: StoryInformation;
}

export const StoryLink = (props: StoryLinkParams) => {
	return (
		<NavLink
			className={'StoryLink'}
			to={`/story/${props.story.storyId}`}
			title={props.story.title}
		>
			<div className={'title'}>{props.story.title}</div>
			<div className={'footer'}>
				<div className={'votes'}>votes: {props.story.numberOfVotes}</div>
				<div className={'average'}>average: {props.story.voteAverage}</div>
			</div>
		</NavLink>
	);
};
