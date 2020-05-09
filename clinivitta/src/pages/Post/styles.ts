import styled from 'styled-components';

export const Container = styled.div`
	
`;


export const Services = styled.div`
	width: 1400px;
	height: 690px;
	margin-top: 24px;
	margin: auto;
	padding: 0 20px 0px 20px;

	justify-content: center;
	border-radius: 16px;

	-webkit-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
	-moz-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219,0.55);
	box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);

	font-family: 'Ubuntu', sans-serif;

	div.eventText{
		p.event{
			font-size: 40px;
			color: #4a9bff;
			margin-left: 430px;
			font-weight: 500;
		}
	}	

	div.services{
		padding: 4px 80px 4px 80px;
		max-height: 390px;
		max-width: 1000px;
		width: 100%;
		border-radius: 20px;
		justify-content: space-between;
		align-items: center;
		margin-top: 120px;
		margin-left: 240px;
		display: flex;
		transition: all 300ms;

		-webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.55);
		-moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0,0.55);
		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.55);

		&:hover{
			transform: scale(1.05);
		}

		img{
			width: 300px;
			height: 300px;
			border-radius: 16px;
			margin-top: 10px;
		}

		div.textService{
			flex-direction: column;
			width: 390px;
			height: 500px;
			background: tranparent;
			margin-top: 290px;
			font-weight: 500;

			p{
				& + p{
					margin-top: 16px;
				}
			}

			p.name{
				font-size: 30px;

			}

			p.date{
				font-size: 18px;
			}


			p.description{
				font-size: 17px;
			}
		}
	}
`;

