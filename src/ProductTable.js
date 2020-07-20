import React from "react";
import propTypes from 'prop-types';
const TableProp = (props) => {
    return(
<tr>

         <td>{props.product.name}</td>
         <td>{props.product.price}</td>
         <td>{props.product.category}</td>
        
     </tr>
    )}
     TableProp.propTypes = {
        Products: propTypes.arrayOf(
          propTypes.shape({
            name: propTypes.string,
            price: propTypes.number,
            category: propTypes.oneOf(["Electronics", "Clothes"]),
          })
        )}
export default TableProp;