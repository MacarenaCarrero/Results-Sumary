import styles from './principalCard.module.css';

const PrincipalCard = ({}) => {
	const cardStyles = styles.card;
	const h2Styles = styles.h2;
	const circleStyles = styles.circle;
	const greatStyles = styles.great;
	const textStyles = styles.text;
	return (
		<div className={cardStyles}>
			<h2 className={h2Styles}>Your Result</h2>
			<div className={circleStyles}></div>
			<span className={greatStyles}>Great</span>
			<p className={textStyles}>
				Your performance exceed 65% of the people conducting the test here!
			</p>
		</div>
	);
};

export default PrincipalCard;
