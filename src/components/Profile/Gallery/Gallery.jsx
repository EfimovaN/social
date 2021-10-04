import React from 'react';
import classes from './Gallery.module.css';

const Gallery = () => {
    return (
        <div className={classes.gallery}>
            <div className={classes.photos}>
                <h3>Photos</h3>
                <ul className={classes.photos__list}>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                </ul>
            </div>

            <div className={classes.video}>
                <h3>Video</h3>
                <ul className={classes.video__list}>
                    <li className={classes.video__item}>
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/tAgVINdc_o0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                    </li>
                    <li className={classes.video__item}>
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/GNrdg3PzpJQ"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </li>
                </ul>
            </div>

            <div className={classes.members}>
                <h3>Latest Members</h3>
                <ul className={classes.members__list}>
                    <li className={classes.members__item}></li>
                    <li className={classes.members__item}></li>
                    <li className={classes.members__item}></li>
                    <li className={classes.members__item}></li>
                    <li className={classes.members__item}></li>
                    <li className={classes.members__item}></li>
                </ul>
                <div>


                </div>
            </div>
        </div>
    );
}

export default Gallery;
