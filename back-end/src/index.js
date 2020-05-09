const express = require('express');
const {uuid} = require('uuidv4');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const appointments = [];

app.listen('3333', () => {
	console.log('Servidor rodando na porta 3333');
});

app.post('/appointments', (request, response) => {
	const { id, name, email, consult, phone, message } = request.body;

	const appointment = { id: uuid(), name, email, consult, phone, message };

	appointments.push(appointment);

	return response.json(appointment);
});

app.get('/appointments', (request, response) => {
	const { name } = request.query;
	
	const result = name ? appointments.filter(appointment => appointment.name.includes(appointment)) : appointments;

	return response.json(result);
});

app.delete('/appointments/:id', (request, response) => {
	const { id } = request.params;

	const appointmentIndex = appointments.findIndex(appointment => appointment.id === id);

    if (appointmentIndex < 0){
        return response.status(400).json({error : "Appointment not found"});
    } 

    appointments.splice(appointmentIndex, 1);

    return response.status(204).send();
})