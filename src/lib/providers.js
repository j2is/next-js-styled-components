'use client';

import { ThemeProvider } from "styled-components";
import theme from "../components/styles/Theme";

const ThemeWrapper = (props) => (
	<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export function Providers({ children }) {
	return (
		<ThemeWrapper>
			{children}
		</ThemeWrapper>
	);
}