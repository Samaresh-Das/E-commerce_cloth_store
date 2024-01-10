# [UrbanAura Ecommerce](https://urbanaura.vercel.app/)

An ecommerce site built as a personal project. It is a frontend focused ecommerce site where users can authenticate, add items to cart and even buy products with payment gateway



## Thinking and approach

I used vite as it is much faster than CRA or old react. It is build on top of esbuild which is 90% faster than react. Avoided next js as it is simple app and doesn't need any server-side logic. For the authentication part, Clerk library handled it all, details about it are provided below. 

Used typescript as it gives better flexibility.


## Tech Stack
 Vite React, Redux, React Router, TailwindCSS, Clerk, Typescript and Razorpay

### [Clerk](https://clerk.com/)
Clerk is a authentication easy to use library. It is simple to use and works much like redux. You provide the clerk provider around the main component and it will take care of application wide authentication. It also provides buil-in components like [Sign-in](https://clerk.com/docs/components/authentication/sign-in) and  [Sign-up](https://clerk.com/docs/components/authentication/sign-up) to easily implement those pages. No custom component creation is needed.

Overall clerk makes authentication much easier.

### [Razorpay](https://razorpay.com/docs/#home-payments)

Razorpay is used for handling the payments gateway.

The trasaction is in test mode so no worries. Users can test it.

To test it use any phone number like - 7899633214

And to test the debit cart use  - 4111 1111 1111 1111
any random CVV 3 digit and any future date. On the OTP screen use any random 4 digit code and the payment will be a success

## Features

- Filter products
- Live checkout(Test Mode)
- Cart Facility

