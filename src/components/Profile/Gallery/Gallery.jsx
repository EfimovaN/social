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
