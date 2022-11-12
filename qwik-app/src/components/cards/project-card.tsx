import { component$, qrl, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './project-card.css?inline';

interface ItemPropsProjectCard {
    title: string,
    imagePath: string,
    description: string,
    navTo?: string,
}

export default component$((props: ItemPropsProjectCard) => {
    useStylesScoped$(styles);

    return (
        <a href={props.navTo}>
            <div class='card-wrapper'>
                <img src={props.imagePath} />
                <h1 class='title-text' style='color:white;'>{props.title}</h1>
                <p class='description-text' style='color:white;'>{props.description}</p>
            </div>
        </a>
    );
});
