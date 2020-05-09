import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './../pages/Dashboard';
import Atualizacoes from './../pages/Atualizacoes';
import Post from './../pages/Post';
import Services from './../pages/Services';
import Contacts from './../pages/Contacts';
import Appointments from './../pages/Appointment';

const Routes: React.FC = () => {
	return(
		<>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/eventos" component={Atualizacoes} />
				<Route path="/evento/dia-de-controle-de-hipertensao" component={Post} />
				<Route path="/services" component={Services} />
				<Route path="/contato" component={Contacts} />
				<Route path="/agendamentos" component={Appointments} />
			</Switch>
		</>
		);
}

export default Routes;