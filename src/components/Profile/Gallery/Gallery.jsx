import React from 'react';
import classes from './Gallery.module.css';

const Gallery = () => {
    return (
        <div className={classes.gallery}>
            <div className={classes.photos}>
                <ul className={classes.photos__list}> Photos
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                    <li className={classes.photos__item}></li>
                </ul>
            </div>

            <div className={classes.members}>
                <ul className={classes.members__list}> PLast Members
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
