import React from 'react';

export default props => (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Ligue</th>
            </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.area.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

