import theme from "../../../configuration/Theme/theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import FooterItems from "./FooterItems";


export default {
  title: "Molecules/footer",
  component:FooterItems,
} as ComponentMeta<typeof FooterItems>;

const Template: ComponentStory<typeof FooterItems> = (args) => (
  <ThemeProvider theme={theme}>
      <FooterItems />
  </ThemeProvider>
);

export const FooterList =   Template.bind({});