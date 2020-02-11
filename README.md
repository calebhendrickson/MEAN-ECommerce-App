E-Commerce shopping application version 1.0 where users can create an account, browse products and add/remove them from/to their shopping cart. 

Unique functionality: Administrator accounts can upload, delete, and create products from within the application.

Payment functionality not implemented.

You can run this application on your own by downloading the source code and then opening a node.js terminal and running the npm start command in the root folder to start the server. To the start the client, install the angular cli and open another terminal and navigate to the angular-src folder and run ng serve. You will also have to open a terminal to run mongodb locally.


This E-Commerce web application was completed using the MEAN stack. Some other important modules/packages include: 

    - bcrypt for password hashing
  
    - multer for uploading images
  
    - passport for json web token user authentication
  
    - mongoose for persisting to mongodb
  
    - cors to allow cross origin resource sharing
    
    - mLab for cloud database host
    
    - Heroku for cloud web host
    
    - AWS s3 for cloud file storage (for the images)
  

Features of the Application:

  Navbar
  
    - Contains links to the different pages within the application 
  
    - Navbar links differ depending on if the user is an administrator or not an administrator of if the user is logged in or not
    
    - The adminstrator account functionality is a superset of user account functionality
    
    - Contains a counter next to the cart link to let users know how many items are in their cart instantly
    
  User Functionality:
  
    Pages/UI Routes
    
      Home
      
        - Product list
        
        - Each product card shows the product image, price, name
        
        - Each card also contains an Add/Remove from cart button
        
        - Each card also contains a view more button to view more product details
        
      Registration
      
        - Registration form
        
      Login
      
        - Login form
        
      Profile
      
        - Displays account information such as name, username, and email
        
      Product Details
      
        - Displays product image, name, description, and price
        
        - Add/Remove from cart button
        
      Cart
      
        - Allows users to view all of the items that they have slected for their cart
        
        - Allows users to increase/decrease the quantity of the items in their cart
        
        - Remove product button to remove that item from the cart completely
        
        
  
  Administrator/Manager Additional Functionalities:
  
      Dashboard
      
        - Hub for navigating to editing, creating, and deleting products
        
        - Contains an add product button and an edit product button to route the user to the appropriate form
        
        - Can delete products and their data from the database with the click of the remove product button
        
      Add Product
      
        - Add product form
        
      Edit Product
      
        - Edit product form
        
        
Future Features:

  Product list sort (Home page)
  
  Prouct list search (Home page)
  
  Simulated purchase ( Cart page) - no real money
  
  Eventually create a real payment system (Cart page)
  
  Order History
  
  Order tracking
  
  Email confirmation upon registration or purchase
  
  Multi image product listings
  
  Better styling
  
  Facebook, Google+, etc. login
  
  Increased Security
  
  & many more to be determined
  
      
Future plans also include refinement to the project and better code documentation
