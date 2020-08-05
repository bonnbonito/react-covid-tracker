import React from 'react';
import numeral from "numeral";
import './Table.css';

function Table({ countries, clickCountry }) {
    return (
        <div className="table">
            {countries.map(({ country, cases, countryInfo }) => (
                <tr key={countryInfo._id} onClick={e => clickCountry(countryInfo.iso2)}>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format("0,0")}</strong></td>
                </tr>
            ))}
        </div>
    )
}

export default Table
