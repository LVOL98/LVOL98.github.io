import { component$, qrl, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './project-card.css?inline';

interface ItemPropsProjectCard {
    title: string,
    description: string,
    textColor?: string,
    imagePath: string,
    navTo?: string,
    imgObjectFitOverride?: string,
}

export default component$((props: ItemPropsProjectCard) => {
    useStylesScoped$(styles);
    let textColorStyle = `color:${props.textColor ? props.textColor : 'white'};` 
    let objectFit = props.imgObjectFitOverride
        ? `object-fit:${props.imgObjectFitOverride};`
        : ''

    return (
        <a href={props.navTo}>
            <div class='card-wrapper' style={textColorStyle}>
                <img src={props.imagePath} style={objectFit} />
                <h1 class='title-text'>{props.title}</h1>
                <p class='description-text'>{props.description}</p>
            </div>
        </a>
    );
});
