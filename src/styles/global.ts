import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		html,
	 	main {
	  	scroll-behavior: smooth;

	   	::-webkit-scrollbar {
	    	width: 4px;
	   	}

	   	::-webkit-scrollbar-thumb {
	     	background: var(--gray-700);

	     	border-radius: 4px;
	   	}

	   	::-webkit-scrollbar-thumb:hover {
	     	background: var(--gray-600);
	   	}
	 	}

  		body {
			background-image: ${({ theme }) => `url(${theme.backgroundImage.src})`};
			background-size: cover;
			background-repeat: no-repeat;
			background-color: ${({ theme }) => theme.colors.backgroundPrimary};

			width: 100%;
			height: 100vh;

			font-size: 16px;
			line-height: 1.5;
			overflow-x: hidden;

			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			position: relative;
    	}

		#__next {
			width: 100%;
			height: 100%;

			display: flex;
			align-items: center;
			justify-content: center;
	 	}

		body,
		input,
		textarea,
		select,
		button {
		  font: 400 1rem "Inconsolata", monospace;
		}

		a {
		  color: inherit;
		  text-decoration: none;
		}

		@media (max-width: 1080px) {
		  html {
		    font-size: 93.65%;
		  }
		}

		@media (max-width: 720px) {
		  html {
		    font-size: 87.5%;
		  }
		}
  `;
