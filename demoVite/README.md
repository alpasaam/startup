# startup
Startup application for BYU 260
[Notes](notes.md).

# Brothers HotPot :secret:

## Elevator Pitch :elevator:
Are you craving Chinese food? We've got the place for you, Brothers' hotPot is the newly established local authentic Chinese buffet. This website will not only allow users to browse the delicious menu items, but assist them in joining the rewards program to receive deals and save money on their dining experience. The easy to navigate web design helps users find the restaurant, review the restaurant, and satisfy their Chinese food craving. 

## Key Features :key:
- Display menu with embedded photos and price
- Interactive map with directions to HotPot
- 360 interactive panorama of HotPot
- Secure login over HTTPS
- Embeded Google reviews
- Interactive photo/video gallery
- Ability for admin to edit food items, prices & pictures
- Rewards program that stores users' reward points

## Technologies :computer:

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure. Four to Five HTML pages. One for gallery & our story, one for login, one for reward program, one for hiring page, one for menu. Lunks to pages and artifacts.
- **CSS** - Traditional chinese cultural styling for images and videos. Good for all devices. Simple and traditional layout.
- **JavaScript** - Will be implemented in the map system. Used for login.
- **React** - Will also be implemented in the map system.
- **Web Service** - We will use google services for maps and costumer reviews.
- **Authentication** - Authentication for login.
- **Database data** - Stores login info, menu items and prices
- **WebSocket data** - Data depicting the amount of times eadch menu item is viewed. As each user leaves a review, other users will see it.
  
## HTML deliverable

For this deliverable we built out the structure of my application using HTML.

- [x] **HTML pages** - Five HTML page that represent the ability to login, view menu, register an account, see the "about us" and rewards program.
- [x] **Links** - The login page links to the register page. Every page links to every other page. 
- [x] **Text** - Reviews are displayed on the home page. 
- [x] **Images** - Included images for the menu and home page.
- [x] **DB/Login** - Input box and submit button for login. The username and password date will be pulled from a database
- [x] **WebSocket** - The amount of points each user has will be pulled from a Websocket. 


## CSS deliverable

For this deliverable we properly styled the application into its final appearance.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - We added the nav bar and pushed it to the right side of the page
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices
- [x] **Application elements** - Used good contrast and whitespace
- [x] **Application text content** - Consistent fonts
- [X] **Application images** - Images are styled to our liking, there will be more images added to the menu

## React deliverable

For this deliverable we used JavaScript and React so that the application completely works for a single user. We also added placeholders for future technology.

- [x] **Bundled and transpiled** - done!
- [x] **Components** - Login, used mocks for login, WebSocket.
  - [x] **login** - When you press the login button it gives you access to the rewards page.
  - [x] **database** - Displayed the user name, it is currently static but will be replaced by the database later
  - [x] **WebSocket** - We have a section that displays the google maps on the home page.
- [x] **Router** - Routing between home, menu, login and register components.
- [x] **Hooks** - We used AuthContext to show the contents of the rewards page when one is logged in.


## Service deliverable

For this deliverable we added backend endpoints that receives points and returns the points totals.

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static middleware for frontend** - done!
- [X] **Calls to third party endpoints** - used this to get img on main page 😔
- [x] **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for rewards.
- [x] **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

For this deliverable we associate the rewards with the logged in user. I stored the points in the database.

- [x] **MongoDB Atlas database created** - done!
- [x] **Stores data in MongoDB** - done!
- [x] **User registration** - Creates a new account in the database.
- [x] **existing user** - Stores the votes under the same user if the user already exists.
- [x] **Use MongoDB to store credentials** - Stores both user and their votes.
- [X] **Restricts functionality** - You cannot see the contents of the rewards page until you have logged in.

## Design :pencil2:
![Pictures of all four designs for the different pages](image.png)
