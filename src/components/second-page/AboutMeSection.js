import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export function AboutMeSection() {
  return (
    <Box
      width={"100%"}
      paddingTop={{
        base: "5rem",
        md: "8rem",
        lg: "15rem",
      }}
      id="aboutme"
    >
      <Box className="center-layout">
        <Box textAlign={"center"} marginBottom={"5rem"}>
          <Heading
            //fontFamily={"Calistoga"}
            fontFamily={"Playfair Display, serif"}
            fontWeight={"bold"}
            fontSize={{
              base: "2.5rem",
              md: "4rem",
              lg: "5.5rem",
            }}
            letterSpacing={".2rem"}
          >
            {/* About Me */}
          </Heading>
        </Box>

        <Flex
          w={"100%"}
          //  h="100vh"
          justifyContent={"space-around"}
          // wrap={"wrap"}
        >
          <Box
            width={{
              base: "100%",
              md: "80%",
              lg: "90%",
            }}
            borderRadius={"10px"}
            border=".5px solid #cccccc"
            padding={{
              base: "3rem 2rem",
              md: "5rem 2rem",
              lg: "8rem 10rem",
            }}
            className="aboutbox"
          >
            <Text
              fontSize={{
                base: "1.2rem",
                md: "1.5rem",
                lg: "2rem",
              }}
              textAlign={"justify"}
              //fontWeight={"black"}
            >
              Every line of code I write isn't just about pixels and
              logic, it's about{" "}
              <span className="green">
                {" "}
                unlocking possibilities, overcoming challenges, and
                ultimately, making a positive impact.{" "}
              </span>
              <br />
              <br />
              With each personal project and enterprise experiences,
              I honed my skills, not just technically, but also in
              <span className="green">
                {" "}
                creativity, problem-solving, and collaboration.{" "}
              </span>
              <br />
              <br />
              Today, I'm not just a developer ; I'm a
              <span className="green">
                {" "}
                problem-solver with a developer's toolkit.
              </span>
              <br />I see beyond lines of code to the potential they
              hold – the power to{" "}
              <span className="green">
                streamline processes, boost engagement, and
                ultimately, drive success.{" "}
              </span>
              I'm{" "}
              <span className="green">
                not just passionate about building, but about
                building for impact.
              </span>
              <br />
              <br />
              Whether it's helping established businesses scale new
              heights or empowering startups to launch their dreams,
              I thrive on seeing{" "}
              <span className="green">
                my skills translate into tangible results that make
                a difference.
              </span>
              <br />
              <br />
              Are you facing a challenge that needs a{" "}
              <span className="green">
                creative, solution-oriented developer
              </span>{" "}
              on your team ?
              <br />
              <br />
              <span className="green">Let's chat. </span>
              <br />
              <br />
              I'm eager to{" "}
              <span className="green">
                {" "}
                understand your needs, leverage my expertise, and
                craft a solution that propels your business forward.{" "}
              </span>
            </Text>
            <Flex alignItems={"center"} marginTop={"5rem"}>
              <Image
                src="./profile2.png"
                width="7rem"
                height="7rem"
                borderRadius={"50%"}
              />
              <Box marginLeft={"2rem"}>
                <Text fontWeight={"bold"} fontSize={"1.4rem"}>
                  Rahan Bouess
                </Text>
                <Text fontWeight={"medium"} fontSize={"1.2rem"}>
                  Web Developer |{" "}
                  <span className="green">Frontend</span>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
