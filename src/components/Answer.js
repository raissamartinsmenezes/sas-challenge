import React from "react";
import { TouchableHighlight, Text, Dimensions } from "react-native";

const Answer = ({ onClick, answer, isSelected }) => {
  return (
    <TouchableHighlight onPress={onClick} underlayColor="none">
      <Text style={getButtonStyles(isSelected)}>{answer}</Text>
    </TouchableHighlight>
  );
};

const getButtonStyles = (isSelected) =>
  ({
    width: Dimensions.get("window").width - 48,
    padding: 19,
    marginBottom: 16,
    textAlign: "left",
    alignSelf: "center",
    color: "#000",
    fontSize: 14,
    backgroundColor: '#fff', 
    borderRadius: 8,
    shadowColor: "#000",
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? '#78809A' : "transparent",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  });

export default Answer;
