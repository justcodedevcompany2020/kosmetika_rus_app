import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export const SplashScreen1 = () => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <ImageBackground
                source={require('../../assets/splash.png')}
                style={styles.background}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

