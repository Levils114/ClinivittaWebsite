import styled from 'styled-components';

export const Container = styled.div`
	
`;

export const Appointment = styled.div`
	width: 1400px;
	margin-top: 24px;
	margin: auto;
	padding: 0 20px 0px 20px;
	display: flex;
	
	justify-content: space-between;
	border-radius: 16px;

	-webkit-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
	-moz-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219,0.55);
	box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);

	font-family: 'Ubuntu', sans-serif;

	img{
		margin-top: 16px;
	}


	div.formArea{

		background: #f2f2f2;
		border-radius: 16px;
		max-width: 450px;
		width: 100%;
		height: 500px;
		margin-top: 50px;
		margin-right: 50px;
		align-items: center;

		div.inputs{
			display: flex;
			margin-top: 24px;
		}
		
		p{
			font-size: 32px;
			font-weight: 500;
			color: #004ead;
			margin-top: 70px;
			margin-left: 50px;
		}

		input{
			border: 0;
			border-radius: 4px;

			margin: 0 16px 0px 0 ;
			padding: 10px;

			width: 210px;
			height: 60px;

			font-size: 18px;
		}

		textarea{
			margin-top: 24px;
			max-width: 438px;
			width: 100%;
			max-height: 140px;
			height: 140px;

			padding: 10px;

			font-size: 18px;

			border: 0;
			border-radius: 4px;

			&::placeholder{
				font-size: 18px;
			}
		}

		button{
			border-radius: 4px;
			border: 0;
			background: #004ead;
			color: #d1d1d1;
			font-size: 17px;
			font-weight: 500;
			align-items: center;
			justify-content: center;

			margin-top: 16px;

			height: 50px;
			width: 100px;
		}
	}
`