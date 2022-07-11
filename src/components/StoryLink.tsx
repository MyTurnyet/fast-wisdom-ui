import { StoryInformation } from '../services/StoryDataService';
import { NavLink } from 'react-router-dom';

export interface StoryLinkParams {
    story: StoryInformation
}

export const StoryLink = (props: StoryLinkParams) => {
    return (
        <NavLink to={`/story/${props.story.storyId}`} title={`storylink${props.story.storyId}`}>
            <div>{props.story.title}</div>
            <div>votes: {props.story.numberOfVotes}</div>
            <div>average: {props.story.voteAverage}</div>
        </NavLink>);
}