import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Dimensions, Keyboard } from 'react-native';

import Theme from '../constants/theme';
import theme from '../constants/theme';

const Options = (props) => {
    const [width, setWidth] = useState("10");
    const [height, setHeight] = useState("10");
    const [speed, setSpeed] = useState("5");

    const validate = (numberText) => {
        if (numberText && parseInt(numberText)) {
            return true;
        } else if (numberText.match(/[^\d]/)) {
            Alert.alert('Invalid input', 'Please insert a valid numeric number greater than zero', [
                {
                    text: 'OK',
                    style: 'cancel'
                }
            ]);
        }
        return false;
    };

    const onUpdateWidthHandler = (newValue) => {
        if (validate(newValue)) {
            props.onOptionsChange(parseInt(newValue), parseInt(height), parseInt(speed));
        }
        setWidth(newValue);
    }

    const onUpdateHeightHandler = (newValue) => {
        if (validate(newValue)) {
            props.onOptionsChange(parseInt(width), parseInt(newValue), parseInt(speed));
        }
        setHeight(newValue);
    }

    const onUpdateSpeedHandler = (newValue) => {
        if (validate(newValue)) {
            props.onOptionsChange(parseInt(width), parseInt(height), parseInt(newValue));
        }
        setSpeed(newValue);
    }

    const clearButtonHandler = () => {
        props.onClear();
        Keyboard.dismiss();
    }

    const onUpdateHanlder = () => {
        props.onUpdate();
        Keyboard.dismiss();
    }

    const onPlayHandler = () => {
        props.onPlay();
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputRow}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Grid</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={onUpdateWidthHandler}
                        value={width}
                        autoCompleteType="off"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        textAlignVertical="center"
                        textAlign="center"
                    />
                </View>
                <View style={styles.separator}>
                    <Text>X</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={onUpdateHeightHandler}
                        value={height}
                        autoCompleteType="off"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        textAlignVertical="center"
                        textAlign="center"
                    />
                </View>
                <View style={{ ...styles.textContainer, ...{ paddingLeft: 25 } }}>
                    <Text style={styles.text}>Speed</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={onUpdateSpeedHandler}
                        value={speed}
                        autoCompleteType="off"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        textAlignVertical="center"
                        textAlign="center"
                    />
                </View>
            </View>
            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CLEAR" onPress={clearButtonHandler} color={theme.secondaryColor} />
                    </View>
                    <View style={styles.button}>
                        <Button title="x1" onPress={onUpdateHanlder} color={theme.highlightColor} />
                    </View>
                    <View style={styles.button}>
                        <Button title={props.playing ? "STOP" : "GO"} color={props.playing ? theme.otherColor : theme.primaryColor} onPress={onPlayHandler} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Options;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        marginVertical: 30,
        width: Dimensions.get("window").width
    },
    inputRow: {
        flexDirection: "row",
        marginVertical: 15,
        alignItems: "center",
        marginHorizontal: 10,
        width: "85%",
        minWidth: 300
    },
    textContainer: {
        flex: 3,
        alignItems: "flex-start"
    },
    text: {
        color: theme.primaryColor,
        fontSize: 15,
        fontWeight: "bold"
    },
    separator: {
        flex: 3,
        alignItems: "center"
    },
    input: {
        flex: 3,
        borderBottomWidth: 1,
        borderBottomColor: Theme.highlightColor,
    },
    buttonRow: {
        flexDirection: "row",
        width: "80%",
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: "30%"
    }
});
