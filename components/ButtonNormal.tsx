import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonNormal = ({
  title,
  onPress,
  style,
  active,
  color,
  width,
  height,
}: {
  title: string;
  onPress: () => void;
  style?: object;
  active: boolean;
  color: string;
  width?: number | string;
  height: number;
}) => {
  const buttonStyle = StyleSheet.create({
    button: {
      backgroundColor: active ? color : "#fff",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 1,

      paddingHorizontal: 80,
      paddingVertical: 10,
      borderRadius: 30,

      borderColor: "#5C5D72",
      borderWidth: active ? 0 : 1,

      display: "flex",
      height: height,
      width: width as any,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style, buttonStyle.button]}>
        <Text
          style={{
            color: "#5C5D72",
            fontFamily: "Rubik_500Medium",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonNormal;
