# Sign In Flow
## Overview / Purpose
The sign in page allows users to access all products by entering a username or email and password. The sign in page is often the first interaction a user has with our product. Thi sis where we have our chance to set expectations, and show our branding.

## When to use
This should be implemented for all Moxi products for a cohesive experience and strong branding.

## When not to use
Do not use this if it isn't for the sign in experience. 

## Rules
1. Show MoxiWorks logo for reassurance. The user should feel confident in what they log in to. We should also promote our brand. 
1. Sign in vs. Log in: Use sign in as the heading and supporting subheading.
1. Have username/email and password on the same page.
1. Provide the option to "keep me signed in."
1. Password reset is essential to include.
1. Provide the option to log in with other parties e.g. google
1. Primary button: same language as heading eg ‘sign in’ for consistency. Primary button should be in disabled state if there’s no information entered. When information is entered the primary button should be in an enabled actionable state and behave thereafter.    
1. Image:  TBA (not sure if this is final image).
1. Error state input field: If the user enter’s the wrong password/email use the error input field.
1. Banners/toatsers: use banners/toasters for any other message.  
1. If a loader needs to be implemented after user has clicked on sign in use this loader. (preferably not, we want this to be as instant as possible).
1. Show success and error states in a concise message - use appropriate colours for error/success states.

**Extra functionality:**

Provide the opportunity for fingerprint scanning  
API: [https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API) 