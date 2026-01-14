import { useState } from 'react';
import './Pagination_4.css';

function Pagination_4() {
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
        <div className='pagination-container-v4'>
            <div className='pagination-minimal-v4'>
                {currentPage > 1 && (
                    <button className='pagination-nav-v4' onClick={() => handlePageChange(currentPage - 1)}>
                        ‹
                    </button>
                )}
                {getPages().map((page) => (
                    <button
                        key={page}
                        className={`pagination-page-v4 ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button className='pagination-nav-v4' onClick={() => handlePageChange(currentPage + 1)}>
                        ›
                    </button>
                )}
            </div>
        </div>
    );
}

export default Pagination_4;

