import React from "react";
import {
    Canvas,
    Path,
    SkFont,
    Skia,
    SkiaMutableValue,
    Text,
} from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";

const DonutChart = ({
    strokeWidth,
    radius,
    percentageComplete,
    font,
    smallerFont,
    targetPercentage,

}) => {
    const innerRadius = radius - strokeWidth / 2;
    const targetText = `${targetPercentage * 100}/2800`;

    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    const width = font.getTextWidth(targetText);
    const titleWidth = smallerFont.getTextWidth("Power");

    return (
        <View style={styles.container}>
            <Canvas style={styles.container}>
                <Path
                    path={path}
                    color="#EC744A"
                    style="stroke"
                    strokeJoin="round"
                    strokeWidth={strokeWidth}
                    strokeCap="round"
                    start={0}
                    end={percentageComplete}
                />

                {/* percent graph */}
                <Text
                    x={innerRadius - width / 2}
                    y={radius + strokeWidth - 10}
                    text={targetText}
                    font={font}
                    opacity={percentageComplete}
                    color="white"
                />
                <Text
                    x={(innerRadius - titleWidth / 2 + 8)}
                    y={radius + 20}
                    text={"Cals"}
                    font={smallerFont}
                    opacity={percentageComplete}
                    color="white"
                />
            </Canvas>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default DonutChart;