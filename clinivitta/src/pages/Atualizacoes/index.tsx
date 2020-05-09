import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Image, Updates } from './styles';

import Header from './../../components/Header/';
import Footer from './../../components/Footer/';

import image from './../../assets/2.svg';
import updateImg from './../../assets/atualizacoes.jpg'

const Atualizacoes: React.FC = () => {
	return(
		<>
			<Container>
				<Header />

				<Updates>
					<div className="updateImg">
						<p className="main">Eventos</p>
					</div>

					<div  className="update">
						<Link to="evento/dia-de-controle-de-hipertensao">
							<img src={updateImg}/>

							<p className="textUpdate">Dia de controle da hipertensão<br/></p>
							<p className="textUpdate">25/09/2018 – 25/09/2018</p>

							<p>
								A @clinivitta vai realizar mais uma vez o Dia do Controle da Hipertensão. São serviços ofertados de forma gratuita para você cuidar da sua saúde!
								#clinivitta #saúde #cariri #agosto #agosto #FJN
							</p>			
						</Link>	
					</div>
				</Updates>	

				<Footer />
			</Container>	
		</>
		);
}

export default Atualizacoes;