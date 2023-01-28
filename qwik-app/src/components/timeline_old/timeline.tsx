import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './timeline.css?inline';

export interface TimelineItemProps {
    year: number,
    title: string,
    body: string,
    imgPath?: string,
    isLeft: boolean,
}

interface TimelineProps {
    items: Array<TimelineItemProps>;
}

export default component$((props: TimelineProps) => {
    useStylesScoped$(styles);

    return (
        <div class="timeline">
            {props.items.map((item) => (
                <div class={item.isLeft ? 'container left' : 'container right'}>
                    <div class='content'>
                        <h2>{item.year}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
});
