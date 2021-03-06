import * as React from 'react';
import { Button, View } from 'react-native';

export default function OpeningScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Drawer')}
                title="Go to drawer"
            />
        </View>
    )
}