import SafeViewAndroid from "@/components/SafeViewAndroid";
import { router } from "expo-router";
import { View, Text, SafeAreaView, Pressable } from "react-native";

import { useRouter } from "expo-router";

export default function Notification() {
  const router = useRouter();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Text>Back</Text>
      </Pressable>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Notification</Text>
      </View>
    </SafeAreaView>
  );
}
