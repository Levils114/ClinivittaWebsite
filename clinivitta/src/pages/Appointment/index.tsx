import React, {useState, useCallback, FormEvent} from 'react';
import api  from './../../services/api';

import { Container, Appointment } from './styles';

import Header from './../../components/Header/';
import Footer from './../../components/Footer/';

import image from './../../assets/2.svg';
import logoImg from './../../assets/logo.png';

interface AppointmentsProps{
	name: string;
	email: string;
	consult: string;
	phone: string;
	message: string;
}

const Appointments: React.FC = () => {

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ consult, setConsult ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ message, setMessage ] = useState('');
	
	async function handleSubmit(event: FormEvent<HTMLFormElement>){
		event.preventDefault();

		const data = { name, email, consult, phone, message };

		const response = await api.post('/appointments', data);

		setName('');
		setEmail('');
		setConsult('');
		setPhone('');
		setMessage('');
	}

	return(
		<>
			<Container>
				<Header />

				<Appointment>
					<div>
						<img src={image}/>
					</div>

					<div className="formArea">
						<p>Agende Sua Consulta</p>

						<form onSubmit={handleSubmit}>
							<div className="inputs">
								<input value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Nome (Obrigatório)"/>								
								<input name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail (Obrigatório)"/>								
							</div>

							<div className="inputs">
								<input name="consulta" value={consult} onChange={e => setConsult(e.target.value)} placeholder="Consulta (Obrigatório)"/>
								<input name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefone (Obrigatório)"/>
							</div>

							<div>
								<textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Mensagem (Opcional)"/>
							</div>


							<div>
								<button type="submit">Enviar</button>
							</div>
						</form>
					</div>

				</Appointment>

				<Footer />
			</Container>	
		</>
		);
}

export default Appointments;