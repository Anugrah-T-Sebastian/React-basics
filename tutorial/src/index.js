import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

//setup vars
const books = [
  {
  img: "https://m.media-amazon.com/images/I/81C5-LxD9OL._AC_UL480_QL65_.jpg",
  title: "Introducing Psychology: A Graphic Guide (Graphic Guides)",
  author: "by Nigel Benson"
},
{
  img: "https://m.media-amazon.com/images/I/918dGS-3mWL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Afternoon on the Amazon: 6 (Magic Tree House (R))",
  author: "by Mary Pope Osborne and Sal Murdocca"
}
];
 


/*-------------------------------------------------------------------------------------------*/
//JSX rules:
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h1', {}, 'hello world')
//     );
// }

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

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return (
          <Book book={book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;   //Destructing in javascript
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {children} * can be used to access child items with specific component has them */}
    </article>
  );
}

// const Image = () => <img src="https://m.media-amazon.com/images/I/81C5-LxD9OL._AC_UL480_QL65_.jpg" alt="" />

// const Title = () => <h1>Introducing Psychology: A Graphic Guide (Graphic Guides)</h1>;
// const Author = () => (
//                       <h4 style={{ color: '#617d98', fontSize: '0.75 rem', marginTop: '0.25rem'}}>
//                         by Nigel Benson
//                       </h4>
//                      ) ;


ReactDOM.render(<BookList />, document.getElementById('root'));