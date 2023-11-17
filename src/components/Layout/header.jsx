import * as React from "react";
import { useNavigate } from "react-router";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@emotion/react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { HeaderPages } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Header = () => {
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToPage = (e) => {
    navigate(e);
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  dark: "#000",
                  light: "#999",
                  main: "#0000",
                },
                divider: "#000",
                background: {
                  default: "#333",
                  paper: "#fff",
                },
                text: {
                  primary: "#000",
                  secondary: "#333",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  dark: "#000",
                  light: "#999",
                  main: "#0009",
                },
                divider: "#000",
                background: {
                  default: "#333",
                  paper: "#fff",
                },
                text: {
                  primary: "#000",
                  secondary: "#000",
                },
              }),
        },
      }),
    [mode]
  );

  // const [scrollTriggered, setScrollTriggered] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the scrollbar has triggered and update the state accordingly
  //     if (window.scrollY > 20) {
  //       setScrollTriggered(true);
  //     } else {
  //       setScrollTriggered(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleClickSignIn = () => {
  //   return
  // }

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <AppBar>
            <Toolbar className="flex justify-center">
              <div className="flex h-16  w-full lg:w-[1470px] px-4 justify-between items-center">
                <div
                  onClick={() => goToPage("/")}
                  className="hover:text-blue-700 font-bold whitespace-nowrap cursor-pointer text-[#033360] text-[16px]"
                >
                  P & A
                </div>
                <div className="flex md:justify-center items-cneter ">
                  <div className="md:flex md:visible hidden items-cneter">
                    {HeaderPages.map((page) => (
                      <div
                        key={page.name}
                        onClick={() => goToPage(page.url)}
                        className={`duration-200 hover:border-b-blue-800 hover:border-b-4 ${
                          page.url == window.location.pathname
                            ? "border-b-4 border-b-blue-900 text-blue-900"
                            : ""
                        } active:to-blue-400 focus:text-blue-600 font-bold text-black self-center cursor-pointer z-10 font-sans py-5 px-4 hover:text-blue-900 visited::border-b-2`}
                      >
                        {page.name}
                      </div>
                    ))}
                    <p className="self-center text-[#033360] py-2 mx-2">|</p>
                  </div>
                  <div
                    className="mx-4 my-auto p-2 rounded-md bg-blue-600 hover:bg-blue-500 duration-300 cursor-pointer"
                    onClick={() => goToPage("/sign-in")}
                  >
                    Sign In
                  </div>

                  <div className="flex md:hidden visible">
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleClickOpen}
                      color="black"
                      sx={{
                        marginRight: "10px",
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Dialog
                      fullScreen
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Transition}
                    >
                      <AppBar sx={{ position: "relative" }}>
                        <Toolbar>
                          <p className="` text-[#033360]">P & A</p>
                          <IconButton
                            edge="start"
                            color="#033360"
                            onClick={handleClose}
                            aria-label="close"
                            sx={{ position: "absolute", right: "20px" }}
                          >
                            <CloseIcon className="text-[#033360]" />
                          </IconButton>
                        </Toolbar>
                        <hr style={{ color: "#033360", width: "100%" }} />
                      </AppBar>
                      <List>
                        {HeaderPages.map((page, i) => (
                          <ListItem
                            button
                            key={page.name + "_" + i}
                            onClick={() => goToPage(page.url)}
                          >
                            <ListItemText
                              sx={{ fontFamily: "sans-serif" }}
                              className="text-[#033360]"
                              primary={page.name}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <div className="flex">
                        <IconButton sx={{ px: "21px" }}>
                          <TwitterIcon className="w-[34px] h-[23.5px] text-[#033360] hover:text-gray-600" />
                        </IconButton>
                        <IconButton sx={{ px: "21px" }}>
                          <LinkedInIcon className="w-[34px] h-[23.5px] text-[#033360] hover:text-gray-600" />
                        </IconButton>
                        <IconButton sx={{ px: "21px" }}>
                          <MailIcon className="w-[34px] h-[23.5px] text-[#033360] hover:text-gray-600" />
                        </IconButton>
                        <IconButton sx={{ px: "21px" }}>
                          <PhoneIcon className="w-[34px] h-[23.5px] text-[#033360] hover:text-gray-600" />
                        </IconButton>
                      </div>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </ColorModeContext.Provider>
      <div className="flex justify-center">
        <hr
          className="h-[1px] w-full lg:w-[1170px] relative mx-4 top-[64px]"
          style={{
            border: 0,
            height: "1px",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
          }}
        />
      </div>
    </div>
  );
};
export default Header;
