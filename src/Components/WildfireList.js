import React, { useState, useEffect } from "react";
import { monthsMap, years } from "../Utils/dateUtils";
import ErrorPopup from "../Utils/ErrorPopup";

const WildfireList = () => {
  const [wildfires, setWildfires] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  const fetchWildfires = async () => {
    try {
      // Request data only if params are filled
      if (selectedMonth && selectedYear) {
        // While fetching data
        setIsLoading(true);
        const queryParams = {
          month: monthsMap.get(selectedMonth),
          year: selectedYear,
        };
        // Retrieve data from the API
        const url = new URL(
          `${process.env.REACT_APP_WILDFIRE_API_URL}/wildfires`
        );
        url.search = new URLSearchParams(queryParams).toString();
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          return setError(data.message);
        }

        // Sort by country code
        const sortedWildfires = data.sort((a, b) =>
          a.country.localeCompare(b.country)
        );
        setWildfires(sortedWildfires);
        setHasSearched(true);
      }
    } catch (error) {
      setError(`An error ocurred while retrieving data`);
      setHasSearched(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWildfires();
  }, [selectedMonth, selectedYear]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Wildfire Events</h1>
      <h2 style={{ textAlign: "center" }}>Ended in a given month and year</h2>
      <div style={{ textAlign: "left" }}>
        <label htmlFor="month" style={{ display: "block" }}>
          Select a Month:
        </label>
        <select
          id="month"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        >
          <option value="">Select a Month</option>
          {[...monthsMap.keys()].map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div style={{ textAlign: "left" }}>
        <label htmlFor="year" style={{ display: "block" }}>
          Select a Year:
        </label>
        <select
          id="year"
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear}
        >
          <option value="">Select a Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <table
        style={{
          border: "1px solid #000",
          margin: "0 auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #000",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Wildfire Name
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="2">Loading...</td>
            </tr>
          ) : hasSearched && wildfires.length > 0 ? (
            wildfires.map((wildfire) => (
              <tr key={wildfire.id}>
                <td
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {wildfire.title}
                </td>
                <td
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {wildfire.country}
                </td>
              </tr>
            ))
          ) : hasSearched && wildfires.length === 0 ? (
            <tr>
              <td colSpan="2">Oh No!</td>
            </tr>
          ) : null}
        </tbody>
      </table>

      {error && <ErrorPopup error={error} onClose={() => setError(null)} />}
    </div>
  );
};

export default WildfireList;
