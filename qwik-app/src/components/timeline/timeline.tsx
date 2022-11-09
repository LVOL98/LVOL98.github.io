import { component$, useStylesScoped$ } from '@builder.io/qwik';
import TimelineItem, { TimelineItemProps } from './timeline-item';
import styles from './timeline.css?inline';

interface TimelineProps {
    items: Array<TimelineItemProps>;
}

export default component$((props: TimelineProps) => {
    useStylesScoped$(styles);

    return (
        <div class="timeline-container">
            {props.items.map((item) => (
                <TimelineItem
                    headline={item.headline}
                    body={item.body}
                />
            ))}
        </div>
    );
});
