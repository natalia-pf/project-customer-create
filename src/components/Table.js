import React from 'react';

const Table = ({ columns = [], list = [] }) => {
    return (
        <table className="table">
            <tr className='table-column-row'>
                {columns.map(column =>
                    <th className='table-th'>
                        <div style={{ gap: 10, height: 40 }} className='flex direction-row align-center'>
                            <div className='divisor-y' />
                            {column.Label}
                        </div>
                    </th>
                )}
            </tr>

            {list.map(item =>
                <tr>
                    {columns.map(column => <td>{item[column.Property]}</td>)}
                </tr>
            )}
        </table>
    )
}

export default Table