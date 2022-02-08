// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import theme from '../src/configuration/Theme/theme'

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
        <Router>

      <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
 
      </Router>
    </MUIThemeProvider>
  ),
];