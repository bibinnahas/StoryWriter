import React from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title="Click me"
                onPress={() => alert("Button Clicked")}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

