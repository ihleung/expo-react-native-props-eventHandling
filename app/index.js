import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class PlayerList extends Component {
  // Initially, the user has not picked their favourite player.
  state = {
    favouritePlayer: null,
    favouritePlayerNumber: null,
  };

  // Event handler for the button onPress event.
  // We only define a single function, it will handle the onPress
  // event for all of the buttons. It accepts an argument.
  onPlayerSelected(number) {
    // Find the object associated to the number of the player.
    const { name } = this.props.players.find((i) => i.number === number);

    this.setState({ favouritePlayer: name });
    this.setState({ favouritePlayerNumber: number });
  }

  render() {
    const { favouritePlayer } = this.state;
    const { favouritePlayerNumber } = this.state;

    // Conditionally render the <Text> element.
    let text;

    if (favouritePlayer)
      text = (
        <Text>
          Your favourite player is {favouritePlayer} and the number is{" "}
          {favouritePlayerNumber}
        </Text>
      );
    else text = <Text>Choose your favourite player ...</Text>;

    return (
      <View>
        {text}
        {this.props.players.map(({ number, name }) => (
          // We must bind the event handler context in order for the function to access the
          // component, specifically the setState() function. In addition, pass the player.number
          // as an argument to the handler.
          <Button
            key={number}
            title={name}
            onPress={this.onPlayerSelected.bind(this, number)}
          />
        ))}
      </View>
    );
  }
}

export default function App() {
  // An array of objects passed to the <PlayerList> component as a
  // prop called players. Each player object will render its own <Button>
  const players = [
    { number: 34, name: "Tarik Celik" },
    { number: 91, name: "Tyler Latham" },
    { number: 16, name: "David Beckham" },
  ];

  return <PlayerList players={players} />;
}
