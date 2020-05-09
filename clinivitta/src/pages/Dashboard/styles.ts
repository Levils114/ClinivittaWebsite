import styled from 'styled-components';

export const Container = styled.div`
	
`;

export const Launch = styled.div`
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



	div{

		img.main{
			height: 400px;
			widht: 400px;
			margin-left: 150px;
			margin-top: 90px;
		}

		span{
			font-size: 30px;
			font-weight: 500;
			color: #004ead;
			margin-left: 170px;
		}

		p{
			font-size: 22px;
			font-weight: 500;
			color: #004ead;
			margin-left: 170px;
			margin-top: 24px;
		}
	}	
	    
`;