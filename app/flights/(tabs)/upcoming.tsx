import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function UpcomingFlights() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 40}}>
            <Text>Upcoming Flights</Text>
            <Link href="/flights/123" style={{textDecorationLine: 'underline', textDecorationColor: 'blue'}}>Go to Flight 123</Link>
        </View>
    )
}