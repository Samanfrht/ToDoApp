import React from "react";
import "./App.css";
import {Container} from "semantic-ui-react"
import ToDoList from "./ToDoList";

function App(){
  return(
    <div>
      <Container>
        <ToDoList /> 
      </Container>
    </div>
  );
}

export default App;

// import React from "react";

// function Greeting(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="John" />
//       <Greeting name="Saman" />
//     </div>
//   )
// }

// export default App;

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)
  
//   const increment = () => {
//     setCount(count + 1)
//   }
//   const decrement = () => {
//     setCount(count - 1)
//   }

//   return (
//     <div>
//       <p>You clicked the button {count} times</p>
//       <button onClick={increment}>Click me to increase</button>
//       <button onClick={decrement}>Click me to decrease</button>
//     </div>
//   )
// }

// export default App;


// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       title: 'Counter',
//       step: 1
//     };
//     // this.incrementCount = this.incrementCount.bind(this);
//     // this.decrementCount = this.decrementCount.bind(this);
//   }
//   incrementCount = () => {
//     const { count, step } = this.state;
//     this.setState({ count: count + step })
//   }

//   decrementCount = () => {
//     const { count, step, title } = this.state;
//     this.setState({ count: count - step, step: step*2, title: title+title })
//   }

//   render() {
//     const { count, title } = this.state
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>Count: {count}</p>
//         <button onClick={this.incrementCount}>+</button>
//         <button onClick={this.decrementCount}>-</button>
//       </div>
//     )
//   }
// }

// export default App;

// import React, { useRef } from "react";

// function App() {
//   const inputRef = useRef(null)


//   const handleButtonClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleButtonClick}>Focus Input</button>
//     </div>
//   )
// }

// function App() {
//   return <ChildComponent />
// }

// import React, { useRef, forwardRef, useState } from "react";

// const TextInput = forwardRef((props, ref) => {
//   return (
//     <input
//       type="text"
//       placeholder="Enter text"
//       ref={ref}
//       onChange={props.onChange}
//     />
//   );
// });

// function App() {
//   const inputRef = useRef(null);
//   const [inputValue, setInputValue] = useState("")

//   const handleButtonClick = () => {
//     inputRef.current.focus();
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("form submitted with value:", inputValue)
//     setInputValue("")
//   };

//   const handleInputChange = (event) => {
//     console.log(`Input value: ${event.target.value}`);
//     setInputValue(event.target.value)
//   };

//   return (
//     <div>
//       <TextInput ref={inputRef} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Focus Input</button>
//       <button type="submit" onClick={handleSubmit}>Submit Input</button>
//     </div>
//   );
// }

// import React, { createContext, useContext } from "react";

// const ThemeContext = createContext('light');

// function ChildComponent() {
//   const theme = useContext(ThemeContext);

//   return(
//     <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
//       Child Component
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <ChildComponent />
//     </ThemeContext.Provider>
//   )
// }

// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext()

// function App() {

//   const[isLoggedIn, setIsLoggedIn] = useState(true)

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout}}>
//         <Navigation />
//         <MainContent />
//         <MyComponent />
//         <ChangeStatusButton />
//       </AuthContext.Provider>
//     </div>
//   );
// }


// function Navigation() {
//   const { isLoggedIn } = useContext(AuthContext);


//   return (
//     <nav>
//       <ul>
//         {isLoggedIn ? (
//           <li>
//             <a href="/">dashboard</a>
//           </li>
//         ) : (
//           <li>
//             <a href="/login">Login</a>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// function MyComponent() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return <div>{isLoggedIn ? 'logged in' : "not logged in"}</div>
// }


// function ChangeStatusButton() {
//   const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);

//   const changeStatus = () => {
//     if (isLoggedIn) {
//       handleLogout()
//     } else {
//       handleLogin()
//     }
//   }
//   return <button onClick={changeStatus}>Change Status</button>
// }

// function MainContent() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <main>
//       {isLoggedIn ? (
//         <h1>Welcome to the dashboard!</h1>
//       ) : (
//         <h1>Please log in to access the dashboard.</h1>
//       )}
//     </main>
//   );
// }


// import React, { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("")

//   function handleInputChange(event) {

//     setInputValue(event.target.value);

//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Input value: ${inputValue}`);
//   };

//   return (
//     <form onSumbit={handleSubmit}>
//       <label>
//         Input:
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//       </label>
//     </form>
//   )
// }

// import React, { useState } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form submitted with value:', inputValue);
//     setInputValue('');
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={inputValue} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

