import React from 'react';

import { Container, Launch } from './styles';

import Header from './../../components/Header/';
import Footer from './../../components/Footer/';

import image from './../../assets/undraw_browsing_urt9.svg';
import logoImg from './../../assets/logo.png';

const Dashboard: React.FC = () => {
	return(
		<>
			<Container>
				<Header />

				<Launch>
					<div>
						<img src={image}/>
					</div>

					<div>
						<img className="main" src={logoImg} />
						<span>Seja Bem-vindo ao nosso site!</span>
						<p>Saiba um pouco mais sobre nós e <br />veja nosso excelente trabalho.</p>
					</div>

				</Launch>

				<Footer />
			</Container>	
		</>
		);
}

export default Dashboard;