import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Services } from './styles';

import Header from './../../components/Header/';
import Footer from './../../components/Footer/';

import updateImg from './../../assets/atualizacoes.jpg'

const Post: React.FC = () => {
	return(
		<>
			<Container>
				<Header />

				<Services>
					<div className="eventText">
						<p className="event">Dia de controle da hipertensão</p>
					</div>		
					<div className="services">
						<img src={updateImg} />

						<div className="textService">
							<p className="name">CLINIVITTA</p>	
							<p className="postDate">Postado em 17/09/2018</p>	
							<p className="date">Data:  25/09/2018</p>	
							<p className="description">A @clinivitta vai realizar mais uma vez o Dia do Controle da Hipertensão. São serviços ofertados de forma gratuita para você cuidar da sua saúde!
							   #clinivitta #saúde #cariri #agosto #agosto #FJN</p>	
						</div>	   
					</div>
					

				</Services>

				<Footer />
			</Container>	
		</>
		);
}

export default Post;