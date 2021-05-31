import React from 'react'
import styles from './Layout.module.scss';

function Layout(props) {
    const { children } = props;

    return (
        // TODO: header
        <div className={styles.layoutContainer}>
            {children}
        </div>
        // TODO: footer
    )
}

export default Layout
