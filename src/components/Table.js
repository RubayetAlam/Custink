import React from 'react'

const Table = ({data}) => {
  return (
    <div>
      <table>
        <tbody>
            <tr>
                <th>First_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>gender</th>
            </tr>
            {data.map((item)=>(
            <tr key={item.id}>
                <td>{item.First_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
            </tr>
             ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
