import BodyWrapper from "@/components/BodyWrapper";
import TypingH1 from "@/components/TypingH1";
import { Box, Menu, Stack, Typography } from "@mui/material";
import React from "react";
import { HeaderTwo } from "src/Fixed/Header";
import Menus from "src/Fixed/Menus";
import Profile from "src/Views/Profile";

const Index = () => {
  return (
    <>
      <BodyWrapper>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box>
            <Profile />
          </Box>
          <Box>
            <Box
              sx={{
                width: { xs: "80%", sm: "100%" },
                margin: "0 auto",
              }}
            >
              {/* <HeaderTwo /> */}
              <Menus />
              <Box
                sx={{
                  mb: "56px",
                  mt: "2px",
                }}
              >
                <TypingH1 />
              </Box>
              <Typography variant="body1" fontSize={"1em"}>
                I am a PhD student at University of Hokkaido, advised by Daisuke
                Sakamoto at the HCI-lab.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </BodyWrapper>
    </>
  );
};

export default Index;
