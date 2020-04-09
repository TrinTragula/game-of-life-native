import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

import theme from '../constants/theme';

const GridView = (props) => {
    const { grid, width, height } = props;

    const onPressHandler = (x, y) => {
        props.onChange(x, y);
    }

    const renderCell = (styles, cell, idx, idxRow, width, height) => {
        let style = Object.create(styles.cell);
        style.borderTopWidth = 1;
        style.borderLeftWidth = 1;
        if (idx === (height - 1))
            style.borderBottomWidth = 1;
        if (idxRow === (width - 1))
            style.borderRightWidth = 1;
        style.backgroundColor = cell.isAlive ? theme.primaryColor : theme.fillColor;

        return (
            <TouchableHighlight key={cell.id} onPress={() => onPressHandler(idx, idxRow)}>
                <View style={style}></View>
            </TouchableHighlight>
        );
    }

    return (
        <ScrollView horizontal={true} bounces={false} contentContainerStyle={styles.scrollContainer}>
            <ScrollView nestedScrollEnabled bounces={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.gridContainer}>
                    {grid.cells.map((row, idx) => {
                        return (
                            <View key={idx} style={styles.row}>
                                {row.map((cell, idxRow) => renderCell(styles, cell, idx, idxRow, width, height))}
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </ScrollView>
    );
}

export default GridView;

const styles = StyleSheet.create({
    scrollContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    gridContainer: {
        marginHorizontal: 10,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        width: Dimensions.get('window').width * 0.07,
        height: Dimensions.get('window').width * 0.07,
        minWidth: 15,
        minHeight: 15,
        maxWidth: 50,
        maxHeight: 50,
        borderColor: theme.secondaryColor,
    },
});
