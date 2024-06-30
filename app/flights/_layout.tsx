import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack, useSegments } from "expo-router";
import { View } from "react-native";


export default function FlightsLayout() {
    const segments = useSegments();

    return (
        <Stack
            // Hack to show drawer toggle in tabs screen.
            screenOptions={{
                headerLeft: props => segments.includes('[id]') ? null : (
                    // Hack to fix doubled horizontal marign
                    <View style={{marginHorizontal: -15}}>
                        <DrawerToggleButton {...props} />
                    </View>
                )
            }}
        >
            <Stack.Screen name="(tabs)" options={{
                headerTitle: 'Flights',
            }} />
            <Stack.Screen name="[id]/index" options={{
                headerTitle: 'Flight Details',
            }} />
            <Stack.Screen name="[id]/edit" options={{
                headerTitle: 'Edit Flight',
            }} />
            <Stack.Screen name="[id]/end" options={{
                headerTitle: 'End Flight',
            }} />
        </Stack>
    )
}