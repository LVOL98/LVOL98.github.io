import { component$, qrl, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './gallery.css?inline';

interface GalleryProps {
    imagePaths: Array<string>,
}

export default component$((props: GalleryProps) => {
    useStylesScoped$(styles);

    return (
        <div class='gallery'>
            {props.imagePaths.map((imagePath) => 
                <div class='img-container'> 
                    <img src={imagePath} />
                    {/* <img src={imagePath} class='img-popup' /> */}
                </div>
            )}
        </div>
    );
});
