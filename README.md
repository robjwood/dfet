# Approach

+ I focused on the content and the markup first to make sure it was semantic and accessible and made as much use of the browsers capabilities as possible.

## Technology

+ I started writing this using 11ty initially as I felt that the site could benefit from the bulk of it being served as a mostly static site. In the end I changed my mind and went with a Vue SPA to support the requirement to show examples of Vue 3.
+ It's possible to use Vue 3 as a standalone script in 11ty but it needs a specific plugin in order to work. In the real world if the site didn't have a heavy need for interaction that needed to manage state I would build it in 11ty without any Vue component. In 11ty you can get a similar experience to Vue's components using Nunjuck macros or 11ty's WebC components.

## Structure

+ As I was using Vue, I decided to split each section of the page into their own components.
+ The quote component could potentially be used elsewhere with the same styles but different content so I made this as re-usable as possible by using slots to allow for using different content. I used this component as an example but other components could be modified to make them more reusable if it was required for the project. 


## Header

+ The primary nav hides behind a hamburger menu which reveals the menu sliding in from the  the right.
+ The hamburger icon uses an SVG path which is swapped for a different path when the menu is open to show the close icon.

## Contact form

+ As the and the error messages for this form needed bespoke styling I created some custom validation in Vue. Often it makes more sense to make these completely bespoke rather than try to lean too heavily on the browser defaults and try to style those. I added `novalidate` to the form to suppress these browser warnings.   
+ I initially set the email validation to update as the user typed to give them some instant feedback. The problem with this is that it can be jarring for the user if an error is generated while they're in the process of typing their email.


## API fetching

+ I got the data from the endpoint but it didn't return a full path for the images. For this example I copied the images locally but used the path from the endpoint.
+   

## Accessibility

+ I tested the page by tabbing through the fields with a keyboard.
+ I also used the the Deque browser tool and the Lighthouse extension in Chrome.


## CSS

+ I split the CSS into multiple files for the global styles. They start general then get more specific. The component styles are handled in the components themselves using scoped SCSS.
+ I use CSS custom properties (variables) to set commonly used values to use throughout the site.
+ I've set the max-width as utility classes based on the widths I found in the Sketch file. I named them by relative sizes in case the actual widths change.


## Potential improvements

+ I've used Vue components but it may be worth considering if web components could be used effectively.
+ Compress the images larger images more aggressively.
+ Writing automated accessibility test would help to catch more obvious accessibility issues while developing.
+ Some of the light grey on white text doesn't provide sufficient contrast so I'd suggest using a darker grey.
