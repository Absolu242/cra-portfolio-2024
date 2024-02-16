import { Box } from "@chakra-ui/react";
import { HeroSection } from "../components/first-page/HeroSection";
import { ProjectsSection } from "../components/first-page/ProjectsSection";
import { ServicesSection } from "../components/first-page/ServicesSection";

function FirstPage() {
  return (
    <Box>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
    </Box>
  );
}

export default FirstPage;
