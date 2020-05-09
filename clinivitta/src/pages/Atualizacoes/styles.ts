import styled from 'styled-components';

export const Container = styled.div`
	
`;

export const Image = styled.div`
	width: 1400px;
	margin-top: 24px;
	margin: auto;
	padding: 0 20px 0px 20px;
	align-items: center;
	
	justify-content: space-between;
	border-radius: 16px;

	-webkit-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
	-moz-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219,0.55);
	box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
`;

export const Updates = styled.div`
	width: 1400px;
	height: 750px;
	margin-top: 24px;
	margin: auto;
	padding: 0 20px 0px 20px;
	align-items: center;
	
	justify-content: space-between;
	border-radius: 16px;

	-webkit-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
	-moz-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219,0.55);
	box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);

	font-family: 'Ubuntu', sans-serif;

	div.updateImg{
		
		p.main{
			
			font-size: 50px;
			margin-right: 100px;
			color: #4a9bff;
			margin-left: 600px;
			font-weight: 500;
		}

	}	

	div.update{



		max-width: 290px;
		margin-top: 54px;
		margin-left: 84px;
		transition: all 300ms;

		&:hover{
		    transform: scale(1.05);
		  }

		&:hover{
				opacity: 0.9;
			}

		a{
			text-decoration: none;

			img{
				width: 300px;
				height: 300px;
				border-radius: 16px;
				-webkit-box-shadow: 0px 0px 20px 0px rgba(0,0, 0, 0.55);
				-moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0,0.55);
				box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.55);

			}	

			p.textUpdate{
				font-size: 20px;
			}

			p{
				margin-top: 24px;
				color: #000;
			}
		}
 	}
`;