import styled from 'styled-components';

export const Container = styled.div`
		width: 1400px;
	    margin: 0 auto;
	    padding: 0 20px 0px 20px;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    background: rgba(59, 147, 255, 0.3);
	    border-radius: 16px 16px 0 0 ;
	    margin-top: 24px;
	    font-family: 'Ubuntu', sans-serif;

	    -webkit-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
		-moz-box-shadow: 0px 0px 90px 0px rgba(0, 99, 219,0.55);
		box-shadow: 0px 0px 90px 0px rgba(0, 99, 219, 0.55);
	    
	    p.main{
	    		font-size: 26px;
	    		font-weight: 500;
	    		margin-bottom: 16px;
	    	}

	     p.mainConv{
	    		font-size: 26px;
	    		font-weight: 500;
	    		margin-bottom: 2px;
	    	}

	    div.footer{
	    	width: 1400px;
	    	display: flex;
	    	justify-content: space-between;
	    }

	    div.map{
	    	margin-left: 30px;
	    	margin-top: 30px;
	    	
	    }

	    div.convenios{
	    	margin-top: 30px;
	    	max-width: 400px;
	    	margin-left: 120px;

	    	p.descriptionConv{
	    		font-size: 18px;
	    		margin-bottom: 16px;
	    		margin-top: 0;
	    	}
	    }

	    div.aboutUs{
	    	max-width: 250px;
	    	margin-top: 30px;
	    	margin-right: 24px;

	    	p.description{
	    		font-size: 16px;

	    		& + p{
	    			margin-top: 8px;
	    		}
	    	}
	    }

	  

	    

	    iframe{
	    	width: 380px;
	    	height: 380px;
	    	border-radius: 16px;
	    	border: 0;
	    }
`;