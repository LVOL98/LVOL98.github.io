import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import StandardCard from '../cards/standard-card';
import styles from './timeline-item.css?inline';

export interface TimelineItemProps {
    headline: string;
    body: string;
}

export default component$((props: TimelineItemProps) => {
    useStylesScoped$(styles);

    return (
        <div class='timeline-item'>
            <StandardCard>
                <h1>{props.headline}</h1>
                <p>{props.body}</p>
            </StandardCard>
        </div>
    );
});
