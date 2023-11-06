/* eslint-disable no-dupe-keys */
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "../ScrollToTop/scrollToTop";
// import Routes from "./routes";

let theme = createTheme({
  p: {
    fontFamily: ["Playfair Display"].join(","),
  },
});
theme = responsiveFontSizes(theme);

export default function Layout(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div className="text-[#333]">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
