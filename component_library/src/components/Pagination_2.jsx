import { useState } from 'react';
import './Pagination_2.css';

function Pagination_2() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPages = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    return (
        <div className='pagination-container-v2'>
            <div className='pagination-v2'>
                <button 
                    className='pagination-arrow-v2'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ‹
                </button>
                {getPages().map((page) => (
                    <button
                        key={page}
                        className={`pagination-number-v2 ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button 
                    className='pagination-arrow-v2'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    ›
                </button>
            </div>
        </div>
    );
}

export default Pagination_2;

