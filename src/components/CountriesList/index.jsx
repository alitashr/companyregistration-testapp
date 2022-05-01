import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatchUserDetails, userDetailsActions } from "../../reducers/userDetails.reducer";

const CountriesList = () => {
  const dispatchUserDetailsState = useDispatchUserDetails();

  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          const asianCountries = result.filter((country) => country.region === "Asia");
          const asianCountriesNames = asianCountries.map((country) => country.name);
          console.log("useEffect -> asianCountriesNames", asianCountriesNames);
          setCountries(asianCountriesNames);
        },
        (error) => {}
      );
  }, []);
  const onCountrySelect = (e) => {
    dispatchUserDetailsState({ type: userDetailsActions.SET_COUNTRY, payload: e.target.value });
  };
  return (
    <>
      {countries && (
        <Form.Group className="mb-3" controlId="formCountries">
          <Form.Label>Countries</Form.Label>
          <Form.Select onChange={onCountrySelect} aria-label="Countries">
            <option>Select a country</option>
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </Form.Select>
        </Form.Group>
      )}
    </>
  );
};

export default CountriesList;
