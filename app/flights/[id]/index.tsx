import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function FlightDetails() {
    const { id } = useLocalSearchParams();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 40}}>
            <Text>Flight Number: {id}</Text>
            <Link
                href={{
                    pathname: `/flights/${id}/edit`,
                }}
                style={{
                    textDecorationLine: 'underline',
                    textDecorationColor: 'blue'
                }}>
                    Edit
            </Link>
            <Link
                href={{
                    pathname: `/flights/${id}/end`,
                }}
                style={{
                    textDecorationLine: 'underline',
                    textDecorationColor: 'blue',
                }}>
                    End Flight
            </Link>
        </View>
    )
}