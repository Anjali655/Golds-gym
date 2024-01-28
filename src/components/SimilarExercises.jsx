import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../components/HorizontalScrollBar";
import Loader from "../components/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log("equipmentExercises>>", equipmentExercises);
  return (
    <Box sx={{ mt: { lg: "100px" }, xs: "0" }}>
      <Typography
        variant="h3"
        mb={5}
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        variant="h3"
        mb={5}
        mt={10}
        fontWeight={700}
        color="#000"
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
