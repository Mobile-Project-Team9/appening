import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

export default function MyComponent() {
    const [queryResult, setQueryResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Construct authentication body
                const authBody = new URLSearchParams();
                authBody.append("grant_type", "password"); // Add grant_type parameter
                // Add other authentication parameters...

                // Make authentication request
                const authRes = await fetch(
                    "https://iam-datahub.visitfinland.com/auth/realms/Datahub/protocol/openid-connect/token",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: authBody,
                    }
                );

                // Log authentication response
                console.log("Authentication Response:", await authRes.json());

                // Proceed with fetching data if authentication was successful
                const accessToken = (await authRes.json()).access_token;

                const res = await fetch(
                    "https://api-datahub.visitfinland.com/graphql/v1/graphql",
                    {
                        method: "POST",
                        body: JSON.stringify({ query }),
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                const queryResult = await res.json();
                setQueryResult(queryResult);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message); // Set error state
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            {error && <Text>Error: {error}</Text>}
            {queryResult && (
                <Text>{JSON.stringify(queryResult, null, 2)}</Text>
            )}
        </View>
    );
}
