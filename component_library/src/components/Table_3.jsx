import './Table_3.css';

function Table_3() {
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' },
        { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Moderator' }
    ];

    return (
        <div className='table-container-v3'>
            <table className='bordered-table-v3'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
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

export default Table_3;

