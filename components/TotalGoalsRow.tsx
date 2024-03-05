import { View, Text } from "react-native";
import SelectNativeBase from "./SelectNativeBase";

const TotalGoalsRow = (props: { completion: number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          fontFamily: "Rubik_500Medium",
        }}
      >
        Today's Goals
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Rubik_400Regular",
          }}
        >
          {/* {`${props.completion}/3 completed`} */}
        </Text>
        <SelectNativeBase />
      </View>
    </View>
  );
};

export default TotalGoalsRow;
