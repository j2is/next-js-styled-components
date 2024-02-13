import StyledComponentsRegistry from '../lib/registry';
import { Providers } from '../lib/providers';
import GlobalStyles from '../components/styles/GlobalStyles';

export const metadata = {
	title: "Test Styled Components Hot Reloading",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<StyledComponentsRegistry>
						<GlobalStyles />
						{children}
					</StyledComponentsRegistry>
				</Providers>
			</body>
		</html>
	);
}
