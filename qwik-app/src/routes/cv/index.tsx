import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Timeline, { TimelineItemProps } from '~/components/timeline/timeline';

export default component$(() => {
  let timelineItems = [
    { 
      year: 1998,
      title: 'Born', 
    },
    { 
      year: 2014,
      title: 'Primary School', 
      body: 'Graduated from Bjergmarkskolen Holbæk', 
    },
    { 
      year: 2014,
      title: 'High School (Gymnasium)', 
      body: 'Graduated from Stenhus Gymnasium Holbæk', 
    },
  ] as Array<TimelineItemProps>

  return (
    <Timeline items={timelineItems} />
  );

  return (<div></div>)
});

export const head: DocumentHead = {
  title: 'LVOL',
};
