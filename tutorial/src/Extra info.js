/*-------------------------------------------------------------------------------------------*/
//JSX rules:
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

/*-------------------------------------------------------------------------------------------------*/

//Nested Components

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>Anugrah Sebastian</h2>;    //Implicit return
// const Message = () => {
//   return <p>This is my Message</p>;                 // Explicit return
// }

// ReactDOM.render(<Greeting />, document.getElementById('root'));

/*---------------------------------------------------------------------------------------------------------*/

// Booklist exercise

// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         return (
//           <Book key={book.id} book={book}></Book>
//         );
//       })}
//     </section>
//   );
// }

/*---------------------------------------------------------------------------------------------------------------------*/

// In-line styling

// const Image = () => <img src="https://m.media-amazon.com/images/I/81C5-LxD9OL._AC_UL480_QL65_.jpg" alt="" />
// const Title = () => <h1>Introducing Psychology: A Graphic Guide (Graphic Guides)</h1>;
// const Author = () => (
//                       <h4 style={{ color: '#617d98', fontSize: '0.75 rem', marginTop: '0.25rem'}}>
//                         by Nigel Benson
//                       </h4>
//                      ) ;
