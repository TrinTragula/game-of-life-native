import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

import Theme from '../constants/theme';
import theme from '../constants/theme';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.info}>
                <Text style={styles.infoText}></Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.nameText}>Game of life</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life')}>(how to play)</Text>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 35,
        paddingBottom: 5,
        borderBottomColor: Theme.secondaryColor,
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: "row",
        backgroundColor: theme.fillColor
    },
    name: {
        justifyContent: "center",
        flexDirection: "row"
    },
    nameText: {
        fontSize: 30,
        color: Theme.primaryColor,
    },
    info: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "flex-start",
        flexDirection: "row",
        marginRight: "auto"
    },
    infoText: {
        fontSize: 10,
        color: Theme.secondaryColor,
        textAlignVertical: "center",
    }
});
