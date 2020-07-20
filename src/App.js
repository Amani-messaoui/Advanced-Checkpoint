import React from 'react';
import './App.css';
import ProductTab from './ProductTable.js';

const Products = [
  {category: "Electronics", price: "200$",name: "mobile" },
  {category: "Electronics",price: "300$",name: "TV" },
  {category: "Clothes", price: "20$",  name: "T shirt" },
  { category: "Clothes", price: "50$", name: "Robe" }];

function App() {
  return (
    <div className="App">
      <h1>Welcome in our Website</h1>
      <h1>Check our product</h1> 
      <div>
      <table
      style={{
        border : "medium solid #6495ed",
        borderCollapse:"collapse",
        height: "auto",
        width: "50%",
        marginTop:"50px",
      }}>
<thead
style={{
  fontFamily: "Georgia, serif" ,
  border: "thin solid #6495ed",
  fontSize: "30px",
  padding: "5px",
  backgroundColor:"#D0E3FA",
  backgroundImage:"url('https://media-exp1.licdn.com/dms/image/C511BAQE0NnIkjkotGA/company-background_10000/0?e=2159024400&v=beta&t=VfMi04DVBs8hW5c5jId90MCJ6on9gpbKcRa_Hugy-KQ')",
  width:"50%"
  }}>
  <tr>
    <th>NAME</th>
    <th>CATEGORY</th>
    <th>PRICE</th>
  </tr>
</thead>
<tbody
 style={{
fontFamily:"sans-serif",
border: "thin solid #6495ed",
width:"50%",
padding:"5px",
textAlign:"center",
backgroundColor:"#fff"
}}>
{Products.map(item => <ProductTab  product={item}/>)}
    </tbody>
     </table>
      </div>
</div>      
     
  );
}

export default App;

