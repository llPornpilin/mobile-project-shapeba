import React, { useState } from "react";
import { Button, Easing, StyleSheet, View } from "react-native";
import * as d3 from "d3";
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

const data = [
    { label: "Jan", value: 50 },
    { label: "Feb", value: 100 },
    { label: "Mar", value: 350 },
    { label: "Apr", value: 200 },
    { label: "May", value: 550 },
    { label: "Jun", value: 300 },
    { label: "Jul", value: 150 },
    { label: "Aug", value: 400 },
    { label: "Sep", value: 450 },
    { label: "Oct", value: 500 },
    { label: "Nov", value: 250 },
    { label: "Dec", value: 600 },
];

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 8;

const CanvasHeight = 350;
const CanvasWidth = 350;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;

const BarChart = () => {
    const [animationState, setAnimationState] = useState(0);
    const font = useFont(require("../../assets/font/Roboto-Bold.ttf"), 10);

    const xDomain = data.map((dataPoint) => dataPoint.label);
    const xRange = [0, graphWidth];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

    const yDomain = [0, d3.max(data, (yDataPoint) => yDataPoint.value)];
    const yRange = [0, graphHeight];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);

    const animate = () => {
        console.log("animate");
        setAnimationState(0);

        runTiming(animationState, 1, {
            duration: 1600,
            easing: Easing.inOut(Easing.exp),
        });
    };

    const path = useComputedValue(() => {
        const newPath = Skia.Path.Make();

        data.forEach((dataPoint) => {
            const rect = Skia.XYWHRect(
                x(dataPoint.label) - GRAPH_BAR_WIDTH / 2,
                graphHeight,
                GRAPH_BAR_WIDTH,
                y(dataPoint.value * animationState.current) * -1
            );

            const rrect = Skia.RRectXY(rect, 8, 8);
            newPath.addRRect(rrect);
        });

        return newPath;
    }, [animationState]);

    if (!font) {
        return <View />;
    }

    return (
        <View style={styles.container}>
            <Canvas style={styles.canvas}>
                <Path path={path} color="purple" />
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
            <Button title="Animate!" onPress={animate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
    },
    canvas: {
        height: CanvasHeight,
        width: CanvasWidth,
    },
});

export default BarChart;