import React from 'react';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock(props) {
    return (
        <div>
            <h1 className={styles.root}>
                <span>😕</span>
                <br/>
                Nothing to see
            </h1>
        </div>
    );
}

export default NotFoundBlock;
