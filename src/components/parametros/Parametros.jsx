import { SUMMARY_INFO } from '../../constants/summary-info';
import styles from './parametros.module.css';

const Parametros = ({}) => {
	const parametrosStyle = styles.parametros;
	const senseStyle = styles.sense;
	
	

	return (
		<>
		{SUMMARY_INFO.map (parametros => {
			return (
				<div key={SUMMARY_INFO.id}>
				</div>
			)
		}) }
		</>
	)
	//return (
	//	<>
	//<div className={parametrosStyle}>
		//<img src="" alt="" />
		//<span className={senseStyle}></span>
	//</div>);
	//</>
//
 };

export default Parametros;
