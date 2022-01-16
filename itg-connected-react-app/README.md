# ITG connected react app

This is a minimal example of an ITG connected React app. It uses [Apollo](https://www.apollographql.com/docs/react/) to connect to ITG.

## Authentication

The app will need to authenticate itself towards ITG to gain access rights to your schema. If you get `status code 401` it means that the app did not successfully authenticate and that, most likely, one or more of the three variables stated bellow is wrong.

- **GRAPHQL_ENDPOINT**: This is the URL to your graphQL endpoint given to you when you created your solution at itg.cognite.ai. It is displayed at the top of the page under the "Intergration Code" tab.

- **PROJECT_NAME**: This is the project you logged in to, e.g "integral". It is displayed at the itg.cognite.ai login screen.

- **BEARER_TOKEN**: You get the bearer token by logging in. login functinality is not implemented in this example and will need to be implemented by you. For testing purposes you can use the bearer token given to the UI at itg.cognite.ai after logging in. It is retrievable from the network tab in your browsers webtools after doing any graphql request in the UI. You can also get a valid token with this curl: <br><br>
  ` curl --location --request POST 'https://login.microsoftonline.com/806128be-974c-452a-a25c-f98d78eb24ea/oauth2/v2.0/token' --header 'Cookie: fpc=Ap7UlYAIJPNEqoOaifd_ieBoKZkLAQAAAAxvZ9kOAAAAP73EFwEAAAA8b2fZDgAAADoub3cBAAAApm9n2Q4AAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd' --form 'grant_type="client_credentials"' --form 'client_id="<CLIENT_ID>"' --form 'client_secret="<CLIENT_SECRET>"' --form 'scope="<SCOPE>'` 
  <br><br>
  Make sure to change `<CLIENT_ID>`, `<CLIENT_SECRET>` and `<SCOPE>` to the once you have.
