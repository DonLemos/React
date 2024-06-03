// import React from "react";

// export default function Header(props) {
//     const {countCartItems} = props;

//     return (
//     <div className="row centre block">
//         <div>
//             <a href="#/">
//                 <h2>Simple Shopping Cart</h2>
//             </a>
//         </div>
//         <div>
//             <a href="#/cart">
//                 Cart
//                 {countCartItems ? (
//                     <button className="badge">{countCartItems}</button>
//                 ) : (
//                     ''
//                 )}
//                 </a>{''}
//                 <a href="#/signin">Sign In</a>
//         </div>
//     </div>
//     );
// }


import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}