import { Box } from "@chakra-ui/react";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";

function App() {
  return (
    <Box>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
    </Box>
  );
}

export default App;
