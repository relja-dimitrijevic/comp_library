import { useState } from 'react';
import './Pagination_3.css';

function Pagination_3() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='pagination-container-v3'>
            <div className='pagination-compact-v3'>
                <button 
                    className='pagination-btn-v3'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ← Prev
                </button>
                <span className='page-info-v3'>
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    className='pagination-btn-v3'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}

export default Pagination_3;

