# PayWithMyBank
Trustly Technical Challenge for Developers

Public domain to check the application, ⚠ [mobile first, link](http://trustly-shoes-on.s3-website-us-east-1.amazonaws.com/) ⚠

The challenge: 
- This is a test for a Front-End Engineer position at Trustly. You'll need to develop a simple checkout process of an e-commerce application in which the user will be able to buy one single product and pay using Trustly as the payment method.

# Usability flow 
### First page, Products:
- User can filter products by name(case insensitive);
- Choose one of the products;
- Choose it`s size;
- Button "Add to cart" takes the app to next page.

### Second page, Checkout:
- It`s shown the details about the chosen product;
- User can delete this product from the cart and start over;
- For payments methods, user can only chose "Online banking" in this app;
- If user tries a diferent payment method, a alert will pop in the screen;
- Button "Confirm" takes the app to the next page.

### Third page, Bank Selection:
- When page is mounted, a SDK is authenticated and a server-side function is called;
- Now the user is interacting with a external application(PayWithMyBank);
- If the transaction is conluded, it will take the user to the final page;
- If not, one alert will pop in the screen and user can choose a bank again or go back.

### Final page, Receipt:
- User can see the order summary;
- Payment method used;
- Total amout;
- User can go back to first page;
- Place order is not implemented.

## Tecnologies:
- Javascript, HTML, CSS.

## Framework:
# React, only functional components with hooks.
- useState and useContext for state control;
- useLocation for conditional rendering based on the page;
- useHistory and React Router for navigaton;
- useEffect for component lifecycle control.

Libraries:
- Styled Components;
- React Router.

The challenges:
- Integration with the SDK proved a nice challenge.
Wath could be better:
- Tests;
- Desktop responsiveness.

To test this project you will need node installed. Clone this repository, install dependencies (npm i), run the code (code .), and check in the browser (npm start).

Thank you for this opportunity!

Best regards
Jailsom Nogueira - Jay

![print-1](https://user-images.githubusercontent.com/65511670/98154175-25f93380-1eb3-11eb-9f41-7908fdf54b36.jpg)
![print-2](https://user-images.githubusercontent.com/65511670/98154177-2691ca00-1eb3-11eb-8401-5fcfe63bda8f.jpg)
