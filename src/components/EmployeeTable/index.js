import React, { useState, useEffect } from 'react';
import './style.css';

const EmployeeTable = ({ employees }) => {
    const [sortedEmployees, updateSortedEmployees] = useState([]);
    useEffect(() => updateSortedEmployees(employees), [employees]);

    return (
        <div className='table-responsive'>
            <table className="table table-striped">
                <thead className='table-header'>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Title</th>
                        <th
                            scope="col"
                            onClick={() => {
                                const usersCopy = [...employees];
                                const updateSort = usersCopy.sort((a, b) => {
                                    const nameA = a.name.first;
                                    const nameB = b.name.first;

                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }

                                    return 0;
                                });

                                updateSortedEmployees(updateSort);
                            }}
                        >
                            FirstName
            </th>
                        <th scope="col">LastName</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                        <th scope="col">Zip Code</th>
                    </tr>
                </thead>
                <tbody className='table-data'>
                    {sortedEmployees.map(
                        ({
                            location: { city, state, country, postcode },
                            picture: { thumbnail },
                            cell,
                            phone,
                            gender,
                            email,
                            name: { first, last, title }
                        }) => (
                            <tr key={email}>
                                <td>
                                    <img alt="Employee images" src={thumbnail} />
                                </td>
                                <td>{title}</td>
                                <th>{first}</th>
                                <td>{last}</td>
                                <td>{gender}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{cell}</td>
                                <td>{city}</td>
                                <td>{state}</td>
                                <td>{country}</td>
                                <td>{postcode}</td>
                                <td></td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;
