import React from 'react';
import { useGetResults } from '../services/hooks/useGetResults';
import { StyleSheet, FlatList, View } from 'react-native';
import { Badge, Box, Flex, HStack, Heading, Pressable, Spacer, Text } from 'native-base';
import { TWUC_CALC } from '../constant';

export default function Results() {
  const { results } = useGetResults(TWUC_CALC);

  const renderItem = ({ item, index }) => {
    return item.patient ? (
      <Box alignItems="center">
        <Pressable maxW="96">
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  margin: 5,
                }}
                p="5"
                rounded="8"
                shadow={3}
                borderWidth="1"
                borderColor="coolGray.300"
              >
                <HStack alignItems="center">
                  <Badge
                    colorScheme="darkBlue"
                    _text={{
                      color: 'white',
                    }}
                    variant="solid"
                    rounded="4"
                  >
                    {`# ${item?.patient?.room}`}
                  </Badge>
                  <Spacer />
                  <Text fontSize={10} color="coolGray.800">
                    {item?.date}
                  </Text>
                </HStack>
                <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                  {`${item?.patient?.firstName} ${item?.patient?.lastName}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'eqClearance'}  ${item?.eqClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'stClearance'} ${item?.stClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'stDiaClearance'} ${item?.stDiaClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'nativeClearance'} ${item?.nativeClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'cNativeClearance'} ${item?.cNativeClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'stWeeklyClearance'} ${item?.stWeeklyClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'twucClearance'} ${item?.twucClearance}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'wUrineVolume'} ${item?.wUrineVolume}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'removeFluid'} ${item?.removeFluid}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'distributionUrea'} ${item?.distributionUrea}`}
                </Text>
                <Text mt="2" fontSize="sm" color="coolGray.700">
                  {`${'cPlasmaUrea'} ${item?.cPlasmaUrea}`}
                </Text>
                <Flex>
                  {isFocused ? (
                    <Text
                      mt="2"
                      fontSize={12}
                      fontWeight="medium"
                      textDecorationLine="underline"
                      color="darkBlue.600"
                      alignSelf="flex-start"
                    >
                      
                    </Text>
                  ) : (
                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                      
                    </Text>
                  )}
                </Flex>
              </Box>
            );
          }}
        </Pressable>
      </Box>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading></Heading>
      </View>

      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        data={results}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  resultWrapper: {
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 1,
  },
});
