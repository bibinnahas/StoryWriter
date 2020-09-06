import React from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const DetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details Screen AGAIN"
                onPress={() => navigation.push("Details")}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});