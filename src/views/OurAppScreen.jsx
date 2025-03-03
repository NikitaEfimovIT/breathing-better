import { Box, useMediaQuery } from "@mui/material";
import { TitleH1 } from "../components/baseComponents.js";
import { AppFeature } from "../components/OurAppComponents/AppFeature.jsx";
import dashboard from "../assets/dashboard.svg";
import selfCheckUp from "../assets/self_check_up.svg";
import exercisePage from "../assets/exercise_page.svg";
export const OurAppScreen = () => {
  const isMdDown = useMediaQuery((theme) => theme.breakpoints.down(1200));

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: isMdDown ? "center" : "start",
        textAlign: isMdDown ? "center" : "start",
        minHeight: "100vh",
        flexShrink: 0,
      }}
      marginY={"10em"}
    >
      <TitleH1>Our app is your way to breathe better</TitleH1>
      <AppFeature
        title={"Dashboard - everything is under your control"}
        textPartOne={
          "Your personal breathing journey starts here! The Dashboard is your all-in-one space to track progress, stay consistent, and unlock new achievements."
        }
        textPartTwo={"Everything you need for better breathing is just a tap away. Ready to take control?"}
        img={dashboard}
        buttonText={"Go ahead!"}
      />
      <AppFeature
        title={"Self Check-Up – Your Breath, Your Needs, Your Journey"}
        textPartOne={
          "Every day is different, and so is your breathing. The Self Check-Up helps you tune into how you're feeling and tailors your practice to fit your current needs."
        }
        textPartTwo={"Take a moment to check in with yourself—your perfect breathing practice is just one answer away!"}
        img={selfCheckUp}
        buttonText={"Answer questions"}
        isInverse={true}
      />
      <AppFeature
        title={"Your Breathing Exercise, Explained"}
        textPartOne={
          "This page gives you everything you need to know before starting your chosen breathing exercise. Whether you're looking to reduce stress, boost focus, or calm anxiety, you'll find all the key details here."
        }
        textPartTwo={
          'Once you\'re ready, simply hit "Start Exercise" and begin your guided breathing session. Your journey to better breathing starts now!'
        }
        img={exercisePage}
        buttonText={"Start now!"}
      />
    </Box>
  );
};
