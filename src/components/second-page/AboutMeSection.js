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
              Every line of code I write is about more than just
              pixels and logic.
              <br />
              <span className="green">
                It's about unlocking possibilities, overcoming
                challenges, and making a positive impact.
              </span>
              <br />
              <br />
              Through personal projects and professional
              experiences, I've honed not only my technical skills
              but also my creativity, problem-solving, and
              collaboration abilities.
              <br />
              <br />
              Today, I'm not just a developer; I'm a problem-solver
              with a developer's toolkit.
              <br />
              <br />I see beyond lines of code to the potential they
              hold –{" "}
              <span className="green">
                the power to streamline processes, boost engagement,
                and ultimately, drive success.{" "}
              </span>
              <br />
              <br />
              I'm passionate about building for impact.
              <br />
              <br />
              Whether it's helping established businesses scale new
              heights or empowering startups to launch their dreams,
              I thrive on seeing my skills translate into tangible
              results that make a difference.
              <br />
              <br />
              Are you facing a challenge that needs a creative,
              solution-oriented developer on your team?
              <br />
              <br />
              <span className="green">Let's chat.</span>
              <br />
              <br />
              I'm eager to understand your needs, leverage my
              expertise, and craft a solution that propels your
              business forward.
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
