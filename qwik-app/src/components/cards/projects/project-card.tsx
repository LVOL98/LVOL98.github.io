import { component$, qrl, Slot, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
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
    <Link href={props.navTo}>
      <div class='card-wrapper' style={textColorStyle}
        onMouseEnter$={(event, element) => { element.classList.add('card-wrapper-enlarge') }}
        onMouseLeave$={(event, element) => { element.classList.remove('card-wrapper-enlarge') }}
      >
        <img src={props.imagePath} style={objectFit}
        />
        <h1 class='title-text'>{props.title}</h1>
        <p class='description-text'>{props.description}</p>
      </div>
    </Link>
  );
});
