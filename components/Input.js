import React from "react";
import { StyleSheet, TextInput } from "react-native";

const colors = {
  background: "whitesmoke"
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: colors.background,
    padding: 10,
    marginBottom: 10,
    fontSize: 16
  }
});

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    // Store changing text into state
    this.state = { text: "" };
  }

  _onChangeText = text => {
    this.setState({ text });
  };

  _onSubmitEditing = () => {
    const { onSubmitEditing } = this.props;
    const { text } = this.state;

    if (!text) return; // Don't submit if empty

    onSubmitEditing(text);

    // Reset text after submission
    this.setState({ text: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this._onChangeText}
        onSubmitEditing={this._onSubmitEditing}
      />
    );
  }
}
