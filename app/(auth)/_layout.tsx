import { Slot, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const _AuthLayout = () => {
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets()

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return (
        <ScrollView style={{ paddingTop: top, backgroundColor:'#fff' }}>
            <Slot />
        </ScrollView>)
}

export default _AuthLayout;