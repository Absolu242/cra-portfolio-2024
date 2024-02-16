import { Box } from "@chakra-ui/react";
import { HeroSection } from "../components/second-page/HeroSection";
import { ProjectsSection } from "../components/second-page/ProjectsSection";
import { ServicesSection } from "../components/second-page/ServicesSection";
import { AboutMeSection } from "../components/second-page/AboutMeSection";

function SecondPage() {
  return (
    <Box>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ServicesSection />
    </Box>
  );
}

export default SecondPage;
