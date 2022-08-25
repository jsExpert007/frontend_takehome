import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HomeStyle } from "../screens/AppStyles";

export const AccordianSingleSelect = ({ data, stateControl, defaultEmpty }) => {
  const [expanded, setExpanded] = useState(false);

  const selected = (dataToCheck) => {
    return dataToCheck.filter((item) => item.selected === true);
  };

  const title = (trueSelections) => {
    const selections = selected(trueSelections);
    if (selections.length === 0) {
      return defaultEmpty || "none";
    } else if (selections.length <= 3) {
      return `${selections.map((item) => " " + item.name)}`;
    } else {
      return `${selections[0].name}, ${selections[1].name}, ${selections[2].name} ...`;
    }
  };

  return (
    <View style={AccordianStyles.container}>
      <TouchableOpacity
        onPress={() => {
          setExpanded(!expanded);
        }}
        activeOpacity={0.6}
        style={AccordianStyles.accordianToggle}
      >
        <View>
          <View>
            <Text>{title(data)}</Text>
            <Icon
              name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={30}
              color={"gray"}
            />
          </View>
        </View>
      </TouchableOpacity>

      {/*------ THESE ARE ALL THE SELECTIONS ------*/}
      <ScrollView
        style={{
          height: expanded ? 100 : 0,
          borderColor: "gray",
          marginTop: 2,
          borderWidth: expanded ? 1 : 0,
        }}
      >
        {expanded &&
          data.map(({ id, name, selected, testID }, index) => (
            <TouchableOpacity
              testID={testID}
              value={name}
              onPress={() => {
                let newObject = [...data];
                newObject.forEach((item) => (item.selected = false));
                newObject[index] = {
                  ...newObject[index],
                  selected: !newObject[index].selected,
                };
                stateControl(newObject);
                setExpanded(false);
              }}
              key={id || name}
              style={[
                selected
                  ? AccordianStyles.childActive
                  : AccordianStyles.childInActive,
              ]}
            >
              {/*----- THIS IS EACH INDIVIDUAL ITEM ----*/}
              <View>
                <Text
                  style={[
                    selected
                      ? AccordianStyles.childTextActive
                      : AccordianStyles.childTexIntActive,
                    { textAlignVertical: "center" },
                  ]}
                >
                  {name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const AccordianStyles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "white",
  },
  container: {
    height: 200,
    width: "75%",
    borderColor: "blue",
  },
  accordianToggle: {
    borderColor: "gray",
    borderWidth: 1,
  },
  childActive: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginHorizontal: 1,
  },
  childInActive: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 1,
  },
});
