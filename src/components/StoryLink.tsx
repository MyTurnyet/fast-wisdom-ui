import { StoryInformation } from '../services/StoryDataService';

export interface StoryLinkParams {
    story: StoryInformation
}

export const StoryLink = (props: StoryLinkParams) => {
    return (<div>
        <div>{props.story.title}</div>
        <div>votes: {props.story.numberOfVotes}</div>
        <div>average: {props.story.voteAverage}</div>
    </div>);
}