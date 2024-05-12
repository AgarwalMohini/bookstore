import React from 'react'
import Book from './Book';

const bookData1= [
  {
    id:1,
    title: "Glory:A Novel",
    author:"Noviolet Bulawayo",
    imgLink:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcnWslZYa_gZ1wyAFAmUJlLMWuOmkuisdSQcFMRJLC6wnhwDnrO8CnRNzW_0SDNUMMLYzJEAXp2WnEKKghnNHq49ILS664pknO_xFCRfuNuLiD1-pYg90W&usqp=CAE",
    price: 3129,
  },
  {
    id:2,
    title: "All the light we cannot see",
    author:"Anthony doerr",
    imgLink:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSUAzsfNJyaBAXBDoChX-KxtiTtjpm2yZFhOfHcV0e1xDxtE0haMtwwoShQSzo0vBbPfZO71MPj7FZL2-uj2N2GY2ZTLkyKz1-6YQoKKUBpa2eE_wMJo5_LkA&usqp=CAE",
    price: 599,
  },
  {
    id:3,
    title: "Trust",
    author:"Hernan diaz",
    imgLink:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQA3qIP_JkptgP9D7s1ZOEZDoyn5jJi6mco-yCb_L_xWM9WLD-UzQzihsJ7qs_C4q5h50rVe6oipMIWaYdTrn-BUMPqAd34HrngHDt9Tca4&usqp=CAE",
    price: 299,
  },
  {
    id:4,
    title: "The paper palace",
    author:"Miranda cowley heller",
    imgLink:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPr3q36UZ0DzTo8DYvbub-QDOctc_FtHGjwETNHds_n-fP2Lsp8gl_3Pz9k6lgibpLd3DGTSUpN3t5giWsMAsxDF5ikmEW-CdS0ElGx6nnTy1T6DluR2Ohug&usqp=CAE",
    price: 600,
  },
  {
    id:5,
    title: "The convenant of water",
    author:"Abraham verghese",
    imgLink:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_51uQ5uEZ477BPvFPv1gurkG0dNNdIs26um72TKElYwr6bBBUPUHKZC-YTZV47BP3i2MNmud9CFqAVRyV-2jg8kzRTDmCE90_R6LMb24&usqp=CAE",
    price: 850,
  },
  {
    id:6,
    title: "It ends with us",
    author:"Colleen Hoover",
    imgLink:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7qKbkpal1PPrH_DMQxYdMbXPIda58ILd_CdYhKIQ4_Gd62RR6y72ff0TVXfnIQsXHhlQ_-TwrwXPST1yBba8iSuxwN2FzmCK8Rx1QjdMk&usqp=CAE",
    price: 138,
  },
];

const BookList = () => {
  return (
    <div className='booklist'>
         {/* <Book {...bookData1[0]}/>
         <Book {...bookData1[1]}/>
         <Book {...bookData1[2]}/>
         <Book {...bookData1[3]}/>
         <Book {...bookData1[4]}/>
         <Book {...bookData1[5]}/> */}
         {bookData1.map((b)=>(
          <Book{...b}/>
         ))}
        
    </div>
  );
};

export default BookList