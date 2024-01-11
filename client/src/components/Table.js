import React from 'react';

const Table = ({ columns = [], list = [] }) => {
    return (
        <table className="table">
            <tr className='table-column-row'>
                {columns.map((column, index) =>
                    <th className='table-th'>
                        <div style={{ gap: 10, height: 40 }} className='flex direction-row align-center'>
                            {index !== 0 && <div className='divisor-y' />}
                            {column.Label}
                        </div>
                    </th>
                )}
            </tr>

            {list.map(item =>
                <tr>
                    {columns.map(column =>
                        <td style={column.CellStyle}>{
                            item[column.Property] || column.ExecFunction(item)
                        }</td>)
                    }
                </tr>
            )}
        </table>
    )
}

export default Table