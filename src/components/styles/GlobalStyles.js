'use client';

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  *{
		background: red; /* changing this value doesn't reload page */
	}
`;

const GlobalStyles = createGlobalStyle`
	${styles}
`;

export default GlobalStyles;
