import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { car_data_type, accordian_type } from "./types/appTypes";
import { AccordianSingleSelect } from "../components/Accordian"
import { Strings } from "./constants";
import styles from './styles';

// sample data of vehicle models
const carData: car_data_type[] = require("../sample_data/sample_vehicle_data.json");

const MyCars = () => {
  //strongly recommended to use the hooks useState and useEffect to complete the #1 transforming data task
  const [carInfo, setCarInfo] = useState<accordian_type[]>([]);

  useEffect(() => {
    //Ready New Car Information
    var _carData: accordian_type[] = []
    carData.map((item, index) => {
      _carData[index] = {
        id: item.id,
        name: item.model,
        selected: false
      }
    })
    setCarInfo(_carData)
  }, [carData]);

  return (
    <View style={styles.container}>
      {/* Replace this line with an AccordianSingleSelect component (found in components folder)*/}
      <AccordianSingleSelect
        data={carInfo}
        defaultEmpty={Strings.PleaseSelectCar}
        stateControl={(v: accordian_type[]) => setCarInfo(v)}
      />
    </View>
  );
};

export default MyCars;
