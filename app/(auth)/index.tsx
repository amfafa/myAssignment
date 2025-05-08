import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface OnboardingItem {
  id: string;
  image: any; // Using 'any' for require() image source
  title: string;
  description: string;
  nextScreen: string;
}

const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<OnboardingItem>>(null);

  const onboardingData: OnboardingItem[] = [
    {
      id: "1",
      image: require("../../assets/images/image1.png"),
      title: "BEST BOOKING APP",
      description: "Explore The Best Booking App To Meet The ExtraOrdinary",
      nextScreen: "/(tabs)",
    },
    {
      id: "2",
      image: require("../../assets/images/image2.png"),
      title: "Events With Love",
      description: "Explore The Best Booking App To Meet The ExtraOrdinary",
      nextScreen: "/onBoard03",
    },
    {
      id: "3",
      image: require("../../assets/images/image3.png"),
      title: "Book Near You",
      description: "Explore The Best Booking App To Meet The ExtraOrdinary",
      nextScreen: "/home_scroll",
    },
  ];

  const handleSkip = (): void => {
    // Skip to the destination of the last screen
    router.push("/(tabs)");
  };

  const handleNext = (): void => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      // Navigate to the destination of the current screen
      router.push("/(tabs)");
    }
  };

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<OnboardingItem>): React.ReactElement => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={item.image}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View style={styles.dotsContainer}>
              {onboardingData.map((_, dotIndex) => (
                <View
                  key={dotIndex}
                  style={[
                    styles.dot,
                    {
                      backgroundColor: dotIndex === index ? "#ffffff" : "gray",
                    },
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>
                {index === onboardingData.length - 1 ? "Get Started" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item: OnboardingItem) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(
          _: OnboardingItem | null | undefined,
          index: number
        ) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    height: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  skipButton: {
    alignSelf: "flex-end",
    marginTop: 70,
    marginRight: 10,
  },
  skipText: {
    fontSize: 20,
    color: "gray",
  },
  textContainer: {
    marginTop: 600,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: "gray",
    textAlign: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 40,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
