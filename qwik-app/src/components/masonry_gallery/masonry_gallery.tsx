import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './masonry_gallery.css?inline';

interface GalleryProps {
    imagePaths: Array<string>,
}

export default component$((props: GalleryProps) => {
    useStylesScoped$(styles);

    return (
        <div class='gallery'>
            {props.imagePaths.map((imagePath) =>
                <div
                    onClick$={(event, element: Element) => {
                        // toggle zoomed container on element
                        element.classList.toggle('zoomed-container')

                        // toggle the zoomed class on the image
                        if (element.firstChild) {
                            (element.firstChild as HTMLElement).classList.toggle('zoomed')
                        }
                    }}
                >
                    <img id={imagePath} src={imagePath} />
                </div>
            )}
        </div>
    );
});
