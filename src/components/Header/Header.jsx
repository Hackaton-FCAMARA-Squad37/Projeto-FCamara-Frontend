import { MenuBurger } from "../MenuBurger/MenuBurger.jsx";
import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "../Navbar/Navbar.jsx";
import { LogoButton } from "../LogoButton/LogoButton.jsx";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin.jsx";
import { ButtonCreateAccount } from "../ButtonCreateAccount/ButtonCreateAccount.jsx";
import useUserState from "../../hook/useUserState.jsx";
import { MenuDropdown } from "../MenuDropdown/MenuDropdown.jsx";

export const Header = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const notebook = useMediaQuery("(max-width:1024px)");
  const loged = useUserState();

  return (
    <Box
      pr={mobile ? "1.5rem" : notebook ? "1rem" : "4.5rem"}
      pl={mobile ? "1.5rem" : notebook ? "1rem" : "4.5rem"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "vitamin.main",
        height: `${mobile ? "3.5rem" : "6rem"}`,
      }}
    >
      <Box pt={mobile ? "0.25rem" : "1rem"}>
        <LogoButton />
      </Box>

      {mobile ? (
        <MenuBurger />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Navbar />
          <Box
            pt="1.25rem"
            pl="3.125rem"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "21.5rem",
            }}
          >
            {loged.nome ? (
                <Box>
                  <MenuDropdown nome={loged.nome} />
                </Box>
            ) : (
              <>
                <Box pt="1rem" mr='2.5rem'>
                  <ButtonLogin />
                </Box>
                <ButtonCreateAccount />
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
