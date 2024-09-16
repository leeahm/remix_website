
# Remix Website Readme
- execute "npm run dev" to start a development server on http://localhost:5173/ as well as bradcasting the server to your local network (check terminal for ip). This is especially helpful for troubleshooting on different devices
- execute "npm run build" to build a distillation for production.

## Style Definition s
- Tailwind: Most styling is done inline using Tailwind. Downloading the tailwind CSS extension is reccomended for editing these styles.
- Index.css:  Calculated styles, some animations, styles that overwrite react slick defautlt styles and Repatitive elements that for one reason or another weren't defined as their own component are styled here. Classes defined in index.css that are using in jsx files appear first in the classlist to make them easier to differentiate. 
- IndividualCSS: This folder contains style that was imported for use only on a single component, this was only done to save time and keep the foreign css separate.
- Tailwind config: This contains some additional styles that extends tailwinds default styling options

## Media Width
- Most media breakpoints are for small screens 640px and large screens 1024px. For screen sizes beyond the large breakpoint there is a maximum width of 1280px for most page content.

## Libaries
- React is used for state management. In some places editing the dom with selectors was used in place of state. This is an area for potential refactor to reduce side effects.
- Tailwind is used to shorten development time, allowing easier inline styling.
- React-router-dom is used for simple SPA routing and navigation.
- Vite is used as a simple general purpose build tool.
- React spring is used to animate the nav dropdown on mobile.
- Email.js is used to send emails from the frontend. Username: brandon@remix.ing Password: remixforlife1776!
- slick-carousel is used for the various carousels. Most are customized beyond what they were intended, making them difficult to change.
 


### Disclaimer
This site was built quickly, as a result not all decisions below were made with complete forthought. There is room for refactoring to reduce side effects, redundancy and other issues.
