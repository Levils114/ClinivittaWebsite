import styled from 'styled-components';

export const Container = styled.div`
	
`;

export const ContactsContainer = styled.div`
	width: 1400px;
	height: 810px;
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
		margin: 85px ;
		width: 700px;
		height: 700px;
	}

	p.toRepair{
		font-size: 22px;
		margin-top: 175px;
	}

	span{
		font-size: 22px;
		margin-right: 100px;
	}

	p{
		margin-top: 16px;
		margin-bottom: 16px;
	}
`;