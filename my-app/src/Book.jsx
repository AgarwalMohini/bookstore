// const Book = () => {
//     return (<div className="book">
//         <Title/>
//         <Image/>
//         <Author/>
//         <Price/>
//     </div>
//     );
// };
// export default Book;

// const Title = () => <h2>Start a Successful Amazon FBA Business</h2>;

// const Price = ()=>{
//     return <h2>₹249.00</h2>;
// };

// const Image = ()=> {
//     return <img src="https://m.media-amazon.com/images/I/71FSgd8yuML._AC_UY327_FMwebp_QL65_.jpg"/>;
// };

// function Author() {
//     return <h3>Paul D. Kings </h3>;
// }

const Book=(props)=>{
    const {imgLink,author,title,price}=props;
    return (
        <div className="book">
            <h2>{title}</h2>
            <img src={imgLink}/>
            <h2>{author}</h2>
            <h3>{price}</h3>
        </div>
    );
};
export default Book;
