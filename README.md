# Summary

The issue is when navigating directly to the `/flights/[id]/index.tsx` screen (in my actual app I do this when the app receives a push notification - to simulate this I have used a useEffect) there is no back button.

This is apparently a very common issue with a simple solution - it's even highlighted in the FAQs https://docs.expo.dev/router/reference/faq/#missing-back-button

I am not too familiar with expo-router so I am not sure how to use the solution suggested in the docs as not much detail is give.

Note: I am not looking to hard code a back button...
