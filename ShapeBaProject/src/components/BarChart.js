import {
    Canvas,
    Path,
    runTiming,
    Skia,
    Text,
    useComputedValue,
    useFont,
    useValue,
} from "@shopify/react-native-skia";
import React, { useState, useRef, useEffect } from "react";
import { Button, Easing, StyleSheet, View, Animated } from "react-native";

import * as d3 from "d3";


const data = [
    { label: "Mon", value: 150 },
    { label: "Tue", value: 100 },
    { label: "Wed", value: 350 },
    { label: "Thu", value: 200 },
    { label: "Fri", value: 250 },
    { label: "Sat", value: 300 },
    { label: "Sun", value: 200 },


];

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 14;

const CanvasHeight = 230;
const CanvasWidth = 300;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;

export const BarChart = () => {
    const [success, setSuccess] = useState(true);

    const font = useFont(require("../../assets/font/Roboto-Bold.ttf"), 10);
    const [animationState, setAnimationState] = useState(new Animated.Value(0));

    const xDomain = data.map((dataPoint) => dataPoint.label);
    const xRange = [0, graphWidth];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

    const yDomain = [
        0,
        d3.max(data, (yDataPoint) => yDataPoint.value),
    ];

    const yRange = [0, graphHeight];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);

    useEffect(() => {
        runTiming(animationState, 1, {
            duration: 1600,
            easing: Easing.inOut(Easing.exp),
        });
    });



    const Bar = (label, value) => {
        // console.log(label, value);
        const newPath = Skia.Path.Make();
        const rect = Skia.XYWHRect(
            x(label) - GRAPH_BAR_WIDTH / 2,
            graphHeight,
            GRAPH_BAR_WIDTH,
            y(value) * -1
        );

        const rrect = Skia.RRectXY(rect, 8, 8);
        newPath.addRRect(rrect);

        return newPath;
    }

    if (!font) {
        return <View />;
    }

    // const path = Bar();
    return (
        <View style={styles.container}>
            <Canvas style={styles.canvas}>
                {data.map((dataPoint) => (
                    dataPoint.value > 250 ?
                        <Path key={dataPoint.label} path={Bar(dataPoint.label, dataPoint.value)} color="#FBBB57" />
                        : <Path key={dataPoint.label} path={Bar(dataPoint.label, dataPoint.value)} color="#EC744A" />
                ))}


                {data.map((dataPoint) => (
                    <Text
                        key={dataPoint.label}
                        font={font}
                        x={x(dataPoint.label) - 10}
                        y={CanvasHeight - 25}
                        text={dataPoint.label}
                    />
                ))}
            </Canvas>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    canvas: {
        height: CanvasHeight,
        width: CanvasWidth,
    },
});
