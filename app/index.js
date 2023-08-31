import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import PropTypes from "prop-types";
//Validating component properties
/*const MyComponent = function ({
  myString,
  myNumber,
  myBool,
  myFunc,
  myArray,
  myObject,
}) {
  return (
    <View>
      <Text>{myString}</Text>
      <Text>{myNumber}</Text>
      <TextInput editable={myBool} placeholder="Enter text" />
      <Text>{myFunc()}</Text>
      <Text>
        {myArray.map((i) => (
          <Text key={i}>{i}</Text>
        ))}
      </Text>
      <Text>{myObject.myProp}</Text>
    </View>
  );
};

MyComponent.propTypes = {
  myString: PropTypes.string.isRequired,
  //myNumber: PropTypes.number.isRequired,
  myNumber: (props, name, component) =>
    Number.isFinite(props[name]) && props[name] >= 10 && props[name] <= 99
      ? null
      : new Error(`${component}.${name} expects a number between 10 and 99`),
  myBool: PropTypes.bool.isRequired,
  myFunc: PropTypes.func.isRequired,
  myArray: PropTypes.array.isRequired,
  myObject: PropTypes.object.isRequired,
};
*/
export default function App() {
  //Event Handling
  const [status, setStatus] = useState("Waiting");
  return (
    //Validating component properties
    /* <MyComponent
      myString="String"
      myNumber={42}
      myBool={"false"}
      myFunc={() => "Function"}
      myArray={["A", "B", "C"]}
      myObject={{ myProp: "Object.myProp" }}
    />
    */
    //Event Handling
    <View>
      <Text>Status: {status}</Text>
      <Button title="Click Me" onPress={(e) => setStatus("Clicked")} />
    </View>
  );
}
