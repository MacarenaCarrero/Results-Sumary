import Container from './components/container/Container';
import Parametros from './components/parametros/Parametros';
import PrincipalCard from './components/principalcard/PrincipalCard';

const App = () => {
	return (
		<>
			<Container>
				<PrincipalCard></PrincipalCard>
				<Parametros></Parametros>
			</Container>
		</>
	);
};

export default App;
