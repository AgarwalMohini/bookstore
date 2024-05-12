//Component-> Javascript function that returns HTML
//[ 1)It Strats with capital letter,2)Must be closed with tag,3)Must return as a single parent]
//JSX- Javascript+HTML
// function App(){
//   return (<div>
//     <h2>Hello world</h2>
//     <MyTitle/>
//     <Student/>
//     <College/>
//   </div>
//   );
// }
// function MyTitle(){
//   return <h3>I am in college</h3>
// }
// const Student=()=>{
// return (
//   <div>
//     <h2>Mohini agarwal</h2>
//     <p>Roll No-2200320230028</p>
//   </div>
// );
// };
// const College=()=> <h1>ABES EC,Ghaziabad</h1>
// export default App;

import BookList from "./BookList";

function App(){
    return (
        <>
        <h1>AMAZON TOP SELLING BOOKS</h1>
        <BookList/>
        </>
    );
}
export default App;



