import { Children } from 'react';
import styles from './container.module.css';

const Container = ({ children }) => {
	const containerStyle = styles.container;
	return <div className={containerStyle}>{children}</div>;
};

export default Container;
