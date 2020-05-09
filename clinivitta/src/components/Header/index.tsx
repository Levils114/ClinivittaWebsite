import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from './../../assets/logo.png';
import { FiPhone, FiHome, FiCalendar, FiEdit, FiBookOpen} from 'react-icons/fi';

const Header: React.FC = () => {
	return(
		<Container>
			<header>
						<Link to="/">
	  						<img src={logoImg}/>
	  					</Link>	
	  					

	  					
	  						<ul> 

	  							<li>
	  								<FiHome size={20}/>
	  								<Link to="/" className="hvr-underline-from-center">Home</Link>
	  							</li>

	  							<li>
	  								<FiCalendar size={20}/>
	  								<Link to="/eventos" className="hvr-underline-from-center">Eventos</Link>
	  							</li>
	  							<li>
	  								<FiEdit size={20}/>
	  								<Link to="/services" className="hvr-underline-from-center">Serviços</Link>
	  							</li>

	  							<li>
	  								<FiBookOpen size={20}/>
	  								<Link to="/agendamentos" className="hvr-underline-from-center">Agende Sua Consulta</Link>
	  							</li>
	  							
	  							
	  						</ul>
	  					

	  					
	  						<ul>
	  							<li>
	  								<FiPhone size={20}/>
	  								<Link to="/contato" className="hvr-underline-from-center">Contato</Link>
	  							</li>
	  						</ul>	
	  					
  	

  					
			</header>
		</Container>	
		);
};

export default Header;