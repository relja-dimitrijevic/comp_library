import './Table_2.css';

function Table_2() {
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' },
        { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Moderator' }
    ];

    return (
        <div className='table-container-v2'>
            <table className='striped-table-v2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table_2;

