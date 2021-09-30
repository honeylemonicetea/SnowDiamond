import React from "react";

function Pagination ({itemsPerPage, totalItems, paginate}) {
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        // console.log(i)
        pageNumbers.push(i)
    }
    console.log('pagination here')
    
    return(
        <nav className='pages'>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={()=> paginate(number)}  className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination