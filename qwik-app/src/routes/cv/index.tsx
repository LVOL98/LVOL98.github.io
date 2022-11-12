import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Timeline from '~/components/timeline/timeline';
import { TimelineItemProps } from '~/components/timeline/timeline';

export default component$(() => {
  let timelineItems = [
    { 
      year: 1998,
      title: 'Born', 
      isLeft: true,
    },
    { 
      year: 2014,
      title: 'Primary School', 
      body: 'Graduated from Bjergmarkskolen Holbæk', 
      isLeft: false, 
    },
    { 
      year: 2014,
      title: 'High School (Gymnasium)', 
      body: 'Graduated from Stenhus Gymnasium Holbæk', 
      isLeft: true, 
    },
  ] as Array<TimelineItemProps>

  return (
    <Timeline items={timelineItems} />
  );
});

export const head: DocumentHead = {
  title: 'LVOL',
};
