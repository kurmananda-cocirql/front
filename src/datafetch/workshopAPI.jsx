import React from "react";

export default function WorkshopTest() {
  async function getWorkshops() {
    try {
      const res = await fetch("http://31.97.224.12:14001/api/workshop/public/all", {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Workshops:", data);
      alert("Fetched workshops: " + JSON.stringify(data));
    } catch (err) {
      console.error("Error fetching workshops:", err);
      alert("Error: " + err.message);
    }
  }

  return (
    <div>
      <h1>Test Get Workshops</h1>
      <button onClick={getWorkshops}>Get Workshops</button>
    </div>
  );
}
