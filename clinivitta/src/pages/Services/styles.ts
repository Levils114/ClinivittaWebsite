import styled from 'styled-components';

export const Container = styled.div`
	
`;

export const ServicesWeHave = styled.div`
	width: 1400px;
	height: 810px;
	margin-top: 24px;
	margin: auto;
	padding: 0 20px 0px 20px;
	align-items: center;
	display: flex;
	
	justify-content: space-between;
	border-radius: 16px;

	-webkit-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
	-moz-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219,0.55);
	box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);

	font-family: 'Ubuntu', sans-serif;

	p{

		& + p{
			margin-top: 16px;
		}

	}

	p.sub{

		transition: all 0.2s;
		cursor: default;
		font-size: 18px;

		&:hover{
			transform: translateX(10px);
		}
	}

	p.main{
		font-size: 24px;
		font-weight: 500;
	}

	div.Especialidades{
		margin-left: 100px;
		margin-top: 15px;

	}

	div.ExamesImagens{
		margin-top: -553px;
	}

	div.Exames{
		margin-right: 100px;
		margin-top: -390px;
	}
`;

