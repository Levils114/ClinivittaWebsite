import styled from 'styled-components';

export const Container = styled.div`
	header{
		width: 1400px;
	    margin: 0 auto;
	    padding: 0 20px 0px 20px;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    background: #f5f5f5;

		


		img{
			width: 128px;
			height: 128px;
			margin-top: 10px;
			margin-left: 20px;
		}

		ul{
			list-style-type: none;
			display: flex;
			justify-content: space-between;


			li{
				margin: 0 0 0 6px;
				border: 0;
				border-radius: 8px;
				padding: 24px;
				background: transparent;
				align-items: center;
				justify-content: center;
				display: flex;

				&:hover{
					border: 0 1px 1px 0;
					color: #000;
				}
					

				a{
					text-decoration: none;
					color: #000;
					font-size: 20px;
					
				}

				 a.hvr-underline-from-center {
			        display: inline-block;
			        vertical-align: middle;
			        -webkit-transform: perspective(1px) translateZ(0);
			        transform: perspective(1px) translateZ(0);
			        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
			        position: relative;
			        overflow: hidden;
			        padding: 8px;
			      }
			      a.hvr-underline-from-center:before {
			        content: "";
			        position: absolute;
			        z-index: -1;
			        left: 51%;
			        right: 51%;
			       	top: 34px;
			        background: #005994;
			        height: 4px;
			        -webkit-transition-property: left, right;
			        transition-property: left, right;
			        -webkit-transition-duration: 0.3s;
			        transition-duration: 0.3s;
			        -webkit-transition-timing-function: ease-out;
			        transition-timing-function: ease-out;
			      }
			      a.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
			        left: 0;
			        right: 0;
			      }

			}
		}		
	}
`