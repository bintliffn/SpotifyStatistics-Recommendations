## Spudify
Spotify’s yearly wrapped report is extremely popular amongst its users. Unfortunately, users must wait a year from every report to view statistics about their listening habits. Our app will allow users to generate reports displaying their top songs and artists whenever they want. Additionally, our app will allow users to generate recommendations for new music based on their favorite songs/artists. Users will also be able to generate advanced recommendations by inputting custom artists/genres/songs and customizing a variety of parameters such as the recommended song’s tempo, loudness, and danceability. Additionally, users will never run out of new music to listen to due to the custom song recommendation feature of our app.
The React-Native Javascript Framework was used to develop our mobile app. Expo was used to test our app during development. Spotify’s API was used to fetch information displayed in our app and to generate recommendations. The Axios package was used to make HTTP requests to Spotify's API. To authenticate users through Spotify we used OAuth 2.0. User data such as generated playlist are stored in a SQL database; where the backend architecture consists of: Next.js, Prisma, and Planetscale.
We successfully developed an iOS and Android mobile app where users can login using OAuth 2.0. Leveraging Spotify's APIs users can view their statistics and generate recommendations based on several criteria (top songs, top artists, song genre, etc.). Additionally, we created an immersive and friendly user experience with error handling for a seamless flow. 

Currently, we are in progress of getting the mobile application approved by Spotify to increase our query usage and the app is only usable by our team's developers. We plan on publishing the app on the Apple App Store and Google Play Store in the near future.

Project website: https://bintliffn.github.io/spudify-website/

This was a group project for CS 4850 Senior Project Fall 2022. This code should only be used for educational purposes and should not be copied or plagiarized. 
