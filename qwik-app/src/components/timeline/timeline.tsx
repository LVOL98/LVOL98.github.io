import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './timeline.css?inline';

export interface TimelineItemProps {
  year: number,
  title: string,
  body: string,
}

interface TimelineProps {
  items: Array<TimelineItemProps>;
}

export default component$((props: TimelineProps) => {
  useStylesScoped$(styles);

  return (
    <section>
      <div class='wrapper'>
        <ul>
          {props.items.map((item) => (
            <li>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div class='dot'></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
