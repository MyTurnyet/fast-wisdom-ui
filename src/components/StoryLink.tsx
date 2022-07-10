import { StoryInformation } from '../services/StoryDataService';

export interface StoryLinkParams {
    story: StoryInformation
}

export const StoryLink = (props: StoryLinkParams) => {
    return (<div>
        <div>{props.story.title}</div>
    </div>);
}