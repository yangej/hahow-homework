import { theme } from "@/libs/styled-components/StyledComponentsProvider";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}