import React, { useCallback, useState } from "react";
import { Alert, ImageSourcePropType } from "react-native";
import { Entypo, FontAwesome, Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Rating } from "react-native-ratings";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import YoutubePlayer from "react-native-youtube-iframe";

import { device } from "../../constants";
import Box from "../../theme/Box";
import { ImageBox } from "../../theme/ImageBox";
import Text from "../../theme/Text";
import { Theme } from "../../theme/PrimaryTheme";
import { CustomPressable } from "../../theme/CustomPressable";

interface CurrentRideCardProps {
  riderAvatar: ImageSourcePropType;
  name: string;
  tripDistance: string;
  estimatedTimeRemaining: number;
  startingLocation: string;
  destination: string;
}

export const CurrentRideCard = (props: CurrentRideCardProps) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
    if (state === "paused") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;
  const {
    riderAvatar,
    name,
    tripDistance,
    estimatedTimeRemaining,
    startingLocation,
    destination,
  } = props;
  return playing ? (
    <Box marginBottom={"m"} marginTop={"m"}>
      <YoutubePlayer
        initialPlayerParams={{ start: 22 }}
        height={220}
        width={device.width - 50}
        play={playing}
        videoId={"a8Oi5mI-mXg"}
        onChangeState={onStateChange}
      />
    </Box>
  ) : (
    <Box
      // borderWidth={1}
      borderRadius={12}
      backgroundColor="primaryLight"
      // justifyContent={"center"}
      // paddingTop={"s"}
      paddingLeft={"s"}
      flexDirection={"column"}
      marginBottom={"m"}
      marginTop={"s"}
      // alignItems={"center"}
      justifyContent={"space-around"}
      flex={0.7}
      width={device.width - 50}
    >
      <Box marginTop={"s"} padding={"s"}>
        <Text variant={"whiteText"}>Current Ride</Text>
      </Box>

      <Box padding={"s"} flexDirection={"row"} marginTop={"s"}>
        <ImageBox
          source={require("../../assets/person.jpg")}
          width={50}
          height={50}
          borderRadius={8}
        />
        <Box
          flex={1}
          justifyContent={"space-between"}
          paddingRight={"l"}
          alignItems={"center"}
          paddingBottom={"m"}
          paddingLeft={"l"}
          flexDirection={"row"}
        >
          <Box>
            <Text variant={"whiteText"}>{name}</Text>
            <Rating
              type={"custom"}
              ratingBackgroundColor={lineColor}
              tintColor={primaryLight}
              imageSize={15}
              ratingColor={neutralYellow}
              //   onFinishRating={this.ratingCompleted}
              style={{ marginTop: 5 }}
            />
          </Box>

          <Box
            flexDirection={"row"}
            flex={0.5}
            // borderWidth={1}
            justifyContent={"flex-end"}
          >
            <CustomPressable
              onPress={togglePlaying}
              height={35}
              width={35}
              backgroundColor={"primaryMid"}
              borderRadius={10}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Feather name="video" size={20} color={lineColor} />
            </CustomPressable>
            <CustomPressable
              onPress={() => console.log("pressing")}
              height={35}
              width={35}
              backgroundColor={"primaryMid"}
              borderRadius={10}
              justifyContent={"center"}
              alignItems={"center"}
              marginLeft={"s"}
            >
              <Entypo name="cross" size={24} color={lineColor} />
            </CustomPressable>
          </Box>
        </Box>
      </Box>
      <Box flexDirection={"row"}>
        <Box flex={1} padding={"s"}>
          <Text variant={"title"}>Total Distance</Text>
          <Text variant={"whiteText"}>12 Miles</Text>
        </Box>
        <Box flex={1} padding={"s"}>
          <Text variant={"title"}>Estimated Time</Text>
          <Text variant={"whiteText"}>20 Minutes</Text>
        </Box>
      </Box>
      <Box flexDirection={"row"}>
        <Box
          flex={1}
          alignItems={"center"}
          paddingTop={"s"}
          paddingBottom={"l"}
          flexDirection={"row"}
          //   justifyContent={"center"}
        >
          <Entypo name="dot-single" size={24} color={accent} />
          <Text variant={"title"}>{startingLocation}</Text>
        </Box>
        <Box
          flex={1}
          alignItems={"center"}
          paddingTop={"s"}
          paddingBottom={"l"}
          flexDirection={"row"}
          //   justifyContent={"center"}
        >
          <FontAwesome
            name="map-pin"
            size={12}
            color={neutralYellow}
            style={{ marginRight: 10 }}
          />
          <Text variant={"title"}>{destination}</Text>
        </Box>
      </Box>
    </Box>
  );
};
