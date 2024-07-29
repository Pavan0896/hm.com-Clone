import { useMediaQuery } from '@chakra-ui/react';

const FontSize = () => {
    const [isSmallScreen] = useMediaQuery("max-width: 767px");
    const [isMediumScreen] = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
    const [isLargeScreen] = useMediaQuery("(min-width: 1025px)");
  
    const getFontSize = () => {
      if (isSmallScreen) {
        return "10px";
      } else if (isMediumScreen) {
        return "md";
      } else if (isLargeScreen) {
        return "lg";
      } else {
        return "md"; 
      }
    };

    return getFontSize();
}

export default FontSize;