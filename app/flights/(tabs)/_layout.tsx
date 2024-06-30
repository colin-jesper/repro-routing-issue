import { Tabs } from "expo-router";

export default function FlightTabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="upcoming" options={{
                href: 'flights/upcoming',
            }} />
            <Tabs.Screen name="past" options={{
                href: 'flights/past',
            }} />
            <Tabs.Screen name="cancelled" options={{
                href: 'flights/cancelled',
            }} />
        </Tabs>
    )
}