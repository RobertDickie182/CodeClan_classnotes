import React, {useState, useEffect} from "react";

function CountriesContainer() {
    const [countries, setCountries] = useState([]);

    // function fetchCountries() {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(response => response.json())
    //         .then(countries => setCountries(countries))
    //         .catch(err => console.error(err));
    // }

    async function fetchCountries() {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();
            setCountries(countries);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <>
            <h1>Countries App</h1>
            <select>
                <option value="" key="">Afghanistan</option>
            </select>
            <section>
                <ul>
                    <li>Population: 123456</li>
                </ul>
            </section>
        </>
    );
}

export default CountriesContainer;
