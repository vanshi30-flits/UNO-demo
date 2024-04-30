import React from 'react';
import './pagination.css';

const PaginationPageCompo = ({ totalData, currentPage, dataPerPage, handlePageNumberClick }) => {

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentPageData = totalData.slice(indexOfFirstData, indexOfLastData);


    // logic to display data
    // const renderDataPerPage = currentPageData.map((data, index) => {
    //     return <li key={index}>{data}</li>
    // })

    // logic to display page number
    let pageNumbers = [];
    // for (let i = 1; i < Math.ceil(totalData / dataPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    // console.log(pageNumbers);
    for (let i = 1; i <= Math.ceil(totalData.length / dataPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers);



    // const handlePageNumberClick = (e) => {
    //     e.preventDefault();
    //     const currentPageRecieved = Number(e.target.id);
    //     console.log("cc",currentPageRecieved);
    //     // console.log("c",currentPage);
    // }
    const handleSelectedCSS = (e) => {
        e.preventDefault();
        console.log("heyafirst");

        if (currentPage === e.target.id) {
            console.log("heya");
            e.target.classList.add('pagination-nav-page-btn-selected');
        }
    }

    const handleLeftArrowClick = (e) =>{
        e.preventDefault();

    }
    return (
        <>

            {pageNumbers.map((number) => {
                return (

                    <>

                        {/* <li>
                            <button className='pagination-nav-btn' onClick={()=>{number - 1}}> <i class="fa-solid fa-arrow-left"></i> </button>
                        </li> */}

                        <li className='pagination-nav-page-btn-container'>
                            {/* <button className={currentPage === id ? 'pagination-nav-page-btn-selected': 'pagination-nav-page-btn2'} id={number} onClick={(e) => { handlePageNumberClick(e);handleSelectedCSS(e) }}> */}
                            <button className={currentPage === number ? 'pagination-nav-page-btn-selected pagination-nav-page-btn2' : 'pagination-nav-page-btn2'} id={number} onClick={(e) => { handlePageNumberClick(e); handleSelectedCSS(e) }}>
                                {number}
                                <span className='pagination-nav-page-span'></span>
                            </button>
                        </li>
                        {/* <li>
                            <button className='pagination-nav-btn'> <i class="fa-solid fa-arrow-right"></i> </button>
                        </li> */}

                    </>
                )
            })}


            {/* <li className='pagination-nav-page-btn-container'>
                <button className='pagination-nav-page-btn-selected pagination-nav-page-btn2'>
                    1
                    <span className='pagination-nav-page-span'></span>
                </button>
                <button className='pagination-nav-page-btn2'>
                    2
                    <span className='pagination-nav-page-span'></span>
                </button>
            </li> */}
        </>
    )
}

export default PaginationPageCompo
