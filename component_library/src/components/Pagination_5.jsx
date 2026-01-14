import { useState } from 'react';
import './Pagination_5.css';

function Pagination_5() {
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
        <div className='pagination-container-v5'>
            <div className='pagination-simple-v5'>
                <button 
                    className='pagination-arrow-v5 prev-v5'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ←
                </button>
                <div className='page-indicators-v5'>
                    {getPages().map((page) => (
                        <button
                            key={page}
                            className={`page-dot-v5 ${currentPage === page ? 'active' : ''}`}
                            onClick={() => handlePageChange(page)}
                        />
                    ))}
                </div>
                <button 
                    className='pagination-arrow-v5 next-v5'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    →
                </button>
            </div>
        </div>
    );
}

export default Pagination_5;

