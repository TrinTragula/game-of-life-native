import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import Options from './Options';
import Grid from '../models/Grid';
import GridView from './GridView';

const Game = () => {
    const [grid, setGrid] = useState(new Grid(10, 10));
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [speed, setSpeed] = useState(5);
    const [, setRerender] = useState(false);
    const [playTimeout, setPlayTimeout] = useState(null);
    const playing = useRef(false);

    const updateGrid = (forced) => {
        if (playing.current || forced) {
            setGrid(oldGrid => {
                oldGrid.update();
                return oldGrid;
            });
            setRerender(render => !render);
            if (playing.current && playTimeout) setTimeout(updateGrid, playTimeout);
        }
    }

    const onOptionsChangeHandler = (newWidth, newHeight, newSpeed) => {
        if (width !== newWidth || height !== newHeight) {
            const newGrid = new Grid(newWidth, newHeight);
            setGrid(newGrid);
            setWidth(newWidth);
            setHeight(newHeight);

        }
        if (speed !== newSpeed) {
            setSpeed(newSpeed);
            setPlayTimeout(1000 / newSpeed);
        }
    }

    const onClearHandler = () => {
        const newGrid = new Grid(width, height);
        setGrid(newGrid);
    }

    const onCellChangeHandler = (x, y) => {
        setGrid(oldGrid => {
            oldGrid.cells[x][y].isAlive = !oldGrid.cells[x][y].isAlive;
            return oldGrid;
        });
        setRerender(render => !render);
    }

    const onUpdateHandler = () => {
        updateGrid(true);
    }

    const playHandler = () => {
        if (playing.current) {
            setPlayTimeout(null);
            playing.current = false;
        } else {
            setPlayTimeout(1000 / speed);
            playing.current = true;
        }
    }

    useEffect(() => {
        if (playing.current && playTimeout) {
            updateGrid();
        }
    }, [playing.current, playTimeout]);

    return (
        <View style={styles.container}>
            <Options onOptionsChange={onOptionsChangeHandler} onClear={onClearHandler} onUpdate={onUpdateHandler} onPlay={playHandler} playing={playing.current} />
            <GridView grid={grid} height={height} width={width} onChange={onCellChangeHandler} />
        </View>
    );
}

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
