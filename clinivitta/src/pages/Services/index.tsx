import React from 'react';

import { Link } from 'react-router-dom';

import { Container, ServicesWeHave } from './styles';

import Header from './../../components/Header/';
import Footer from './../../components/Footer/';

const Services: React.FC = () => {
	return(
		<>
			<Container>
				<Header />

				

				<ServicesWeHave>

				

				
						<div className="Especialidades">
							<p className="main">Especialidades médicas:</p>
							<p className="sub">Cardiologia</p>
							<p className="sub">Clinico geral</p>
							<p className="sub">Dermatologista</p>
							<p className="sub">Endocrinologista</p>
							<p className="sub">Fisioterapia</p>
							<p className="sub">Gastroenterologia</p>
							<p className="sub">Ginecologia</p>
							<p className="sub">Hepatologia</p>
							<p className="sub">Mastologia</p>
							<p className="sub">Nutrição</p>
							<p className="sub">Obstetrícia</p>
							<p className="sub">Ortopedia</p>
							<p className="sub">Otorrinolaringologia</p>
							<p className="sub">Pediatria</p>
							<p className="sub">Psicologia / infantil , adulto ,idoso.</p>
							<p className="sub">Psiquiatria</p>
							<p className="sub">Reumatologia</p>
						</div>

						<div className="ExamesImagens">
							<p className="main">Exames de imagem:</p>
							<p className="sub">Mamografia digital</p>
							<p className="sub">Ultrassonografia</p>
						</div>

						<div className="Exames">
							<p className="main">Exames:</p>
							<p className="sub">Biópsias</p>
							<p className="sub">Doppler de carotidas</p>
							<p className="sub">Ecocardiograma</p>
							<p className="sub">Eletro cardiograma</p>
							<p className="sub">Endoscopia digestiva</p>
							<p className="sub">M.A.P.A 24 horas</p>
						</div>
						
				</ServicesWeHave>

				<Footer />

			</Container>	
		</>
		);
}

export default Services;