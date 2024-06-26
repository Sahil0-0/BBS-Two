import { Box, Button, Card, HStack, Stack, Text } from "@chakra-ui/react";

import ProfilePicSmaller from "../../assets/icon-component/ProfilePicSmaller";
import MenuButtonIcon from "../../assets/icon-component/MenuButtonIcon";
import InstaLogoFilled from "../../assets/icon-component/InstagramIconFilled";

const Card2 = () => {
  return (
    <Card
      p={"14px"}
      borderRadius={"12px"}
      boxShadow={"null"}
      borderWidth={"1px"}
      borderColor={"E2E2E2"}
      variant={"outline"}
      position={"relative"}
    >
      <Card
        position={"absolute"}
        top={1}
        left={2}
        zIndex={2}
        px={"6px"}
        py={"2px"}
        borderRadius={"full"}
        borderColor={"#A4A4A4"}
      >
        <Text
          fontWeight={"regular"}
          fontStyle={"Montserrat"}
          fontSize={"12px"}
          textColor={"#6C5606"}
        >
          Alpha Creator
        </Text>
      </Card>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <Card
            flex={"1"}
            p={"14px"}
            borderRadius={"12px"}
            boxShadow={"null"}
            borderWidth={"1px"}
            borderColor={"E2E2E2"}
            variant={"outline"}
          >
            <Stack gap={"12px"}>
              <Box className={"profile image"}>
                <HStack gap={"8px"}>
                  <ProfilePicSmaller />
                  <Stack gap={"null"}>
                    <Text
                      fontWeight={"regular"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"Black"}
                    >
                      Sahil Singh
                    </Text>
                    <Text
                      fontWeight={"regular"}
                      fontStyle={"Montserrat"}
                      fontSize={"12px"}
                      textColor={"#808080"}
                    >
                      @sahill.0_0
                    </Text>
                  </Stack>
                </HStack>
              </Box>

              <Box>
                <HStack gap={"10px"}>
                  <InstaLogoFilled />
                  <InstaLogoFilled />
                </HStack>
              </Box>
            </Stack>
          </Card>
        </Box>
        <Box width={"80%"}>
          <Stack>
            <Box>
              <HStack
                gap={"20px"}
                display={"flex"}
                alignItems={"start"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Stack gap={"8px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Deliverables
                    </Text>
                    <Box>
                      <Text
                        fontWeight={"regular"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"black"}
                        width={"fit-content"}
                      >
                        Instagram reel X1
                      </Text>
                      <Text
                        fontWeight={"regular"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"black"}
                        width={"fit-content"}
                      >
                        Youtube Short
                      </Text>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Followers
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      410K
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Reach
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      3M
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Views
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      3.4k
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Engagement
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      3.4K
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack gap={"4px"}>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#666666"}
                      width={"fit-content"}
                    >
                      Last Bid
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      ₹22.4K
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <MenuButtonIcon />
                </Box>
              </HStack>
            </Box>

            <HStack justifyContent={"space-between"} display={"flex"}>
              <Box
                alignItems={"end"}
                borderBottomWidth={"1px"}
                borderBottomColor={"black"}
              >
                <Text
                  fontWeight={"bold"}
                  fontStyle={"Montserrat"}
                  fontSize={"13px"}
                  textColor={"black"}
                  width={"fit-content"}
                >
                  Veiwing bidding history
                </Text>
              </Box>
              <Box>
                <Stack direction={"row"} gap={"14px"} align={"bottom"}>
                  <HStack gap="4px">
                    <Text
                      fontWeight={"semibold"}
                      fontStyle={"Montserrat"}
                      fontSize={"11px"}
                      textColor={"#808080"}
                      width={"fit-content"}
                    >
                      Mode of Payment{" "}
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontStyle={"Montserrat"}
                      fontSize={"13px"}
                      textColor={"black"}
                      width={"fit-content"}
                    >
                      Expedited
                    </Text>
                  </HStack>
                  <Button
                    size="xs"
                    borderRadius={"full"}
                    borderColor={"#EBDFBA"}
                    bgColor={"#F9EECE"}
                    borderWidth={"1px"}
                  >
                    Pending Post approval
                  </Button>
                </Stack>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default Card2;
