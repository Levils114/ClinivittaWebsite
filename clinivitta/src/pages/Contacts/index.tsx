import React from 'react';

import { Container, ContactsContainer } from './styles';

import Header from './../../components/Header/';
import Footer from './../../components/Footer/';

import image from './../../assets/5.svg';
import logoImg from './../../assets/logo.png';

const Contacts: React.FC = () => {
	return(
		<>
			<Container>
				<Header />

				<ContactsContainer>
					<div>
						<img src={image}/>
					</div>

					<div>
						<p className="toRepair">Números:</p>
						<p>(88) 3512-2354<br />(88) 99809-4821</p>

						<span>Endereço:</span>
						<p>Rua do Cruzeiro, 378<br />São Miguel<br/>Juazeiro do Norte - CE<br/>63010-212<br/>Brasil</p>

						<span>Horários de funcionamento:</span>
						<p>seg.:	07:00 – 18:00<br/>
							ter.:	07:00 – 18:00<br/>
							qua.:	07:00 – 18:00<br/>
							qui.:	07:00 – 18:00<br/>
							sex.:	07:00 – 18:00<br/>
							sáb.:	07:00 – 00:00<br/>
							dom.:	Fechado</p>
					</div>

				</ContactsContainer>

				<Footer />
			</Container>	
		</>
		);
}

export default Contacts;