/* API stuff here */
const fetch = require("node-fetch");

const query = `query {
    product(limit: 1) {
        id
        webshopUrlPrimary
        urlPrimary
        type
        duration
        durationType
        company {
            businessName
        }
        openingHours {
            open
            openFrom
            openTo
            weekday
        }
        postalAddresses {
            location
            postalCode
            streetName
            city
        }
        productAvailableMonths {
            month
        }
    }
}`;

(async () => {
    const authBody = new URLSearchParams();
    authBody.append("grant_type", "password");
    authBody.append("client_id", "datahub-api");
    authBody.append("client_secret", "ed7cd94f-727e-4cf7-879c-1c26f798bcc0");
    authBody.append("username", "n2huee00@students.oamk.fi");
    authBody.append("password", "MobileProject130324");

    const authRes = await fetch(
        "https://iam-datahub.visitfinland.com/auth/realms/Datahub/protocol/openid-connect/token",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: authBody,
        }
    );

    const accessToken = (await authRes.json()).access_token;

    const res = await fetch(
        "https://api-datahub.visitfinland.com/graphql/v1/graphql",
        {
            method: "POST",
            body: JSON.stringify({
                query,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const queryResult = await res.json();
    console.log(JSON.stringify(queryResult, null, 2));
})();