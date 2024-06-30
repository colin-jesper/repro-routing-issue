# Summary

The issue is when navigating directly to the `/flights/[id]/index.tsx` screen (in my actual app I do this when the app receives a push notification - to simulate this I have used a useEffect) there is no back button.

If I navigate to the flight details screen (`/flights/[id]/index.tsx`) via any of the tab screens (upcoming/past/cancelled) the back button works correctly.

When navigating directly, it should take me back to the `/flights/(tabs)/upcoming.tsx` screen.

This is apparently a very common issue with a simple solution - it's even highlighted in the FAQs https://docs.expo.dev/router/reference/faq/#missing-back-button

I am not too familiar with expo-router so I am not sure how to use the solution suggested in the docs as not much detail is give.

Note: I am not looking to hard code a back button... Nor do I want to navigate twice as this only works when wrapped in a the `setTimeout` which is a hack for an issue I had "Attempted to navigate before root layout component was mounted".
