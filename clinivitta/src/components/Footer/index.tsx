import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from './../../assets/logo.png';
import bradescoImg from './../../assets/bradesco.jpg';
import pasImg from './../../assets/pas.jpg';
import livImg from './../../assets/liv.jpg';
import hapvidaImg from './../../assets/hapvida.jpg';
import { FiPhone, FiHome, FiCalendar, FiEdit, FiImage } from 'react-icons/fi';

const Footer: React.FC = () => {
	return(
		<Container>
			<div className="footer">
				<div className="map">
					<p className="main">Onde Nos Encontrar:</p>
					<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAZ2A2Jl5uChOVRTM9u_PJpg_exXebati4&amp;language=pt-BR&amp;q=Rua+do+Cruzeiro,+378,+Centro.+Juazeiro+do+Norte+-+CE&amp;maptype=roadmap&amp;zoom=14" />
				</div>	

				<div className="convenios">
					<p className="mainConv">Convênios:</p>
					<p className="descriptionConv">Planos de saúde que trabalhamos:</p>
					<img src={bradescoImg}/>
					<img src={pasImg}/>
					<img src={livImg}/>
					<img src={hapvidaImg}/>
				</div>


				<div className="aboutUs">
					<p className="main">Sobre Nós:</p>
					<p className="description">A CLINIVITTA está há 4 anos levando saúde à população com preços que cabem no seu bolso.</p>
					<p className="description">Nosso lema é prestar um atendimento de qualidade aos nossos pacientes.</p>
					<p className="description">Clínica completa com mais de 20 especialidades e mais de 30 Profissionais.</p>
					<p className="description">Nova unidade, na Rua São Pedro, agora com atendimento em odontologia e oftalmologia.</p>
				</div>
			</div>
		</Container>	
		);
};

export default Footer;