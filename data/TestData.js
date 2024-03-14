import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Test() {
  const [queryResult, setQueryResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `query {
          product(limit: 10) {
            id
          }
        }`;

        const authBody = new URLSearchParams();
        authBody.append('grant_type', 'password');
        authBody.append('client_id', 'datahub-api');
        authBody.append(
          'client_secret',
          'ed7cd94f-727e-4cf7-879c-1c26f798bcc0'
        );
        authBody.append('username', 'n2huee00@students.oamk.fi');
        authBody.append('password', 'MobileProject130324');

        const authRes = await fetch(
          'https://iam-datahub.visitfinland.com/auth/realms/Datahub/protocol/openid-connect/token',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: authBody
          }
        );

        const { access_token } = await authRes.json();

        const res = await fetch(
          'https://api-datahub.visitfinland.com/graphql/v1/graphql',
          {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`
            }
          }
        );

        const queryResult = await res.json();
        setQueryResult(queryResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {queryResult && (
        <Text>{JSON.stringify(queryResult, null, 2)}</Text>
      )}
    </View>
  );
}
