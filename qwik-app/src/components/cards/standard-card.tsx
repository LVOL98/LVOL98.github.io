import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './standard-card.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class='card-wrapper'>
            <Slot />
        </div>
    );
});
