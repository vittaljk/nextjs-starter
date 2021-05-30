import React from 'react'
import styles from './Layout.module.scss';

function Layout(props) {
    const { children } = props;

    return (
        <div className={styles.layoutContainer}>
            {children}
        </div>
    )
}

export default Layout
