import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "H&M | Online Fashion, Homeware & Kids Clothes | H&M IN";
  }, []);

  return (
    <div className="homeDiv">
      <Link to="/women">
        <Box position={"relative"}>
          <Image
            src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/ds30c/DS30C-3x2-1.jpg?imwidth=1536"
            alt="women section"
          />
          <Heading
            position={"absolute"}
            ml="40%"
            bottom="30%"
            color={"white"}
            fontWeight={800}
            sx={{
              "@media screen and (max-width: 767px)": {
                fontSize: "15px",
                bottom: "40%",
              },
            }}
          >
            Modern grunge
          </Heading>
          <Button position={"absolute"} ml="45%" bottom="15%">
            Shop now
          </Button>
        </Box>
      </Link>

      <Link to="/men">
        <Box position={"relative"}>
          <Image
            src="https://image.hm.com/content/dam/global_campaigns/season_00/men/ms40e/MS40E-NS-3x2transition-curation.jpg?imwidth=1536"
            alt="men section"
          />
          <Heading
            position={"absolute"}
            left="20%"
            bottom="20%"
            color={"white"}
            fontWeight={800}
            sx={{
              "@media screen and (max-width: 767px)": {
                fontSize: "15px",
                bottom: "35%",
              },
            }}
          >
            Transition curation
          </Heading>
          <Button position={"absolute"} left="25%" bottom="10%">
            Shop now
          </Button>
        </Box>
      </Link>

      <Link to="/kids">
        <Box position={"relative"}>
          <Image
            src="https://image.hm.com/content/dam/global_campaigns/season_00/kids/4080a/4080A-3x2-1-back-to-school-kids.jpg?imwidth=1536"
            alt=""
          />
          <Heading
            position={"absolute"}
            right="20%"
            bottom="20%"
            color={"white"}
            fontWeight={800}
            sx={{
              "@media screen and (max-width: 767px)": {
                fontSize: "15px",
                bottom: "35%",
              },
            }}
          >
            BACK TO SCHOOL
          </Heading>
          <Button position={"absolute"} right="25%" bottom="10%">
            Shop now
          </Button>
        </Box>
      </Link>
    </div>
  );
};

export default React.memo(Home);
