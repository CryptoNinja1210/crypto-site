import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, AppBar, Toolbar, IconButton } from "@mui/material";
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

  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scrollbar has triggered and update the state accordingly
      if (window.scrollY > 20) {
        setScrollTriggered(true);
      } else {
        setScrollTriggered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleClickSignIn = () => {
  //   return
  // }

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <AppBar
            sx={{
              bgcolor: scrollTriggered ? "white" : "transparent",
              boxShadow: scrollTriggered ? "" : "none",
            }}
            // {
            //   scrollTriggered
            //     ? "bg-white text-black w-full h-16  flex lg:items-center justify-between "
            //     : "text-white w-full h-16  flex lg:items-center justify-between"
            // }
          >
            <Toolbar className="flex justify-center">
              <div className="flex h-16 w-full lg:w-[1170px] px-4 justify-between items-center">
                <p
                  className={` whitespace-nowrap ${
                    scrollTriggered ? "text-[#033360]" : "text-[16px]"
                  }`}
                >
                  P & A
                </p>
                <div className="flex md:justify-center items-cneter ">
                  <div className="md:flex md:visible hidden items-cneter">
                    {HeaderPages.map((page) => (
                      <Button
                        key={page.name}
                        onClick={() => goToPage(page.url)}
                        sx={{
                          z: 1,
                          fontFamily: "sans-serif",
                          fontWeight: "600",
                          textTransform: "none",
                          px: "21px",
                          fontSize: "14px",
                          color: scrollTriggered ? "#033360" : "white",
                          "&:hover": { color: "gray", bgcolor: "transparent" },
                          "&:active": { color: "gray" },
                          "&:focus": { color: "gray" },
                          display: "block",
                        }}
                      >
                        {page.name}
                      </Button>
                    ))}
                    <p
                      className={
                        scrollTriggered
                          ? "text-[#033360] py-2 mx-2"
                          : "text-white py-2 mx-2"
                      }
                    >
                      |
                    </p>
                  </div>
                  <div
                    className="mx-4 my-auto p-2 rounded-md bg-blue-600 hover:bg-blue-500 duration-300 cursor-pointer"
                    onClick={() => goToPage("/sign-in")}
                  >
                    Investors Sign In
                  </div>
                  {/* //IconButton */}
                  {/* <div className="flex mx-[14px]">
                    <IconButton sx={{ px: "10px", pb: "3.5px" }}>
                      <TwitterIcon
                        className={
                          scrollTriggered
                            ? "w-[14px] h-[14px] text-[#033360]  hover:text-gray-600"
                            : "w-[14px] h-[14px]  text-white hover:text-gray-600"
                        }
                      />
                    </IconButton>
                    <IconButton sx={{ px: "10px", pb: "3.5px" }}>
                      <LinkedInIcon
                        className={
                          scrollTriggered
                            ? "w-[14px] h-[14px] text-[#033360]  hover:text-gray-600"
                            : "w-[14px] h-[14px]  text-white hover:text-gray-600"
                        }
                      />
                    </IconButton>
                    <IconButton sx={{ px: "10px" }}>
                      <MailIcon
                        className={
                          scrollTriggered
                            ? "w-[14px] h-[14px] text-[#033360]  hover:text-gray-600"
                            : "w-[14px] h-[14px]  text-white hover:text-gray-600"
                        }
                      />
                    </IconButton>
                    <IconButton sx={{ px: "21px", pb: "3.5px" }}>
                      <PhoneIcon
                        className={
                          scrollTriggered
                            ? "w-[14px] h-[14px] text-[#033360]  hover:text-gray-600"
                            : "w-[14px] h-[14px]  text-white hover:text-gray-600"
                        }
                      />
                    </IconButton>
                  </div> */}
                  <div className="flex md:hidden visible">
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleClickOpen}
                      color="inherit"
                      sx={{
                        marginRight: "10px",
                      }}
                    >
                      <MenuIcon
                        sx={{ color: scrollTriggered ? "#033360" : "white" }}
                      />
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
