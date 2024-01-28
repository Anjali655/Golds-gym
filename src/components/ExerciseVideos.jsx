import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log("exerciseVideos>", exerciseVideos);

  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        variant="h3"
        mb="33px"
        sx={{ color: "#000", fontWeight: "bold" }}
      >
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map(
          (item, index) => (
            console.log("item>", item),
            (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography
                    variant="h6"
                    color="#000"
                    textTransform="capitalize"
                  >
                    {item.video.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#000"
                    textTransform="capitalize"
                  >
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            )
          )
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
