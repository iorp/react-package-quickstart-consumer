
# React Component Library Package with Rollup Quickstart Tester

 
## Table of contents
 
  - [Usage](#usage)
    - [Linking the Library from the Consumer](#step-1-linking-the-library-from-the-consumer)
      - [Navigate to your Consumer App's Root Directory](#1-navigate-to-your-consumer-apps-root-directory)
      - [Link the Demo-Lib Library Using a Relative Path](#2-link-the-demo-lib-library-using-a-relative-path)
    - [Importing and Using the Component](#step-2-importing-and-using-the-component)
      - [In Your Consumer App's React Components](#1-in-your-consumer-apps-react-components)
      - [Run Your Consumer App](#2-run-your-consumer-app)

Testing a simple React Component Library Package template with Rollup and Babel.

## Usage
 

Assuming your component library is in the same parent directory as your consumer app, you can use a relative path to link the library.

Linking the library using a relative path allows you to test your component library directly from another app without publishing it to npm. This is beneficial during development when you want to make changes to the library and immediately see the effects in your consumer app.

Remember to rebuild your library (`npm run build` in the library project) whenever you make changes to the library's source code. After rebuilding, the changes will be reflected in the consumer app upon the next rebuild or refresh.

By linking the library using a relative path, you create a direct connection between the library and the consumer app, making the development and testing process more seamless.

####  Step 1:Linking the Library from the consumer

Note: Dont forget that the library must be linked also from the library itself.


1. Navigate to your consumer app's root directory:

   ```bash
   cd path/to/your/consumer-app
   ```

2. Link the demo-lib library using a relative path:

   ```bash
   npm link ../path/to/demo-lib
   ```

   Replace `../path/to/demo-lib` with the actual relative path to your component library.

#### Step 2:Importing and Using the Component

1. In your consumer app's React components, import and use the `DemoButton` component:

   ```javascript
   // In a React component of your consumer app
   import React from 'react';
   import DemoButton from 'demo-lib';

   function App() {
     return (
       <div>
         <h1>Consumer App</h1>
         <DemoButton text="Click me" />
       </div>
     );
   }

   export default App;
   ```

   Adjust the import path and usage based on your project structure and component names.

2. Run your consumer app:

   ```bash
   npm start
   ```

   Check your app, and you should now see and interact with the `DemoButton` component from your linked library.

 

