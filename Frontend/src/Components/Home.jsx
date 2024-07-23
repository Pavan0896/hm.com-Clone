import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeDiv">
      <Link>
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
          >
            Modern grunge
          </Heading>
          <Button position={"absolute"} ml="45%" bottom="15%">
            Shop now
          </Button>
        </Box>
      </Link>
      <Link>
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
          >
            Transition curation
          </Heading>
          <Button position={"absolute"} left="25%" bottom="10%">
            Shop now
          </Button>
        </Box>
      </Link>
      <Link>
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

export default Home;
