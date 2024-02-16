import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ServiceRow from "./ServiceRow";

export function ServicesSection() {
  const servicesList = [
    {
      name: "Website Design",
      price: "Contact for pricing",
      link: "https://airtable.com/appV0NnHNbQrtErjN/shrhzeFXX2rrXiHj0",
      tools: "Webflow , Framer , Shopify",
    },
    {
      name: "Social Media Design",
      price: "Contact for pricing",
      link: "https://airtable.com/appV0NnHNbQrtErjN/shrP8mQ5cg2orOOuV",
      tools: "Banners , Content Creation , etc",
    },
    {
      name: "Custom Web Development",
      price: "Contact for pricing",
      link: "https://airtable.com/appV0NnHNbQrtErjN/shrhzeFXX2rrXiHj0",
      tools: "Html , React , Next, etc",
    },
    {
      name: "Social Media Management / Marketing",
      price: "Contact for pricing",
      link: "https://airtable.com/appV0NnHNbQrtErjN/shrP8mQ5cg2orOOuV",
      tools: "LinkedIn , Instagram , Facebook , etc",
    },
    {
      name: "Frontend Developer Role",
      price: "Send me a DM on LinkedIn",
      link: "https://www.linkedin.com/in/therahanbakala/",
      tools:
        "Full-time , Contractor or Freelance ( Open for relocation or remote work)",
    },
  ];

  return (
    <Box
      width={"100%"}
      paddingTop={{
        base: "5rem",
        md: "8rem",
        lg: "15rem",
      }}
      id="services"
    >
      <Box className="center-layout">
        <Box textAlign={"center"} marginBottom={"5rem"}>
          <Heading
            // fontFamily={"Calistoga"}
            fontFamily={"Playfair Display, serif"}
            fontSize={{
              base: "2.5rem",
              md: "4rem",
              lg: "5.5rem",
            }}
            letterSpacing={".2rem"}
          >
            Services
          </Heading>
        </Box>

        <Box w={"100%"}>
          {servicesList.map((service, index) => {
            let c = index + 1 === servicesList.length;

            return (
              <ServiceRow
                hideBorder={c}
                key={index}
                service={service}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
