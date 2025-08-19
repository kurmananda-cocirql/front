import React from "react";

export  function WorkshopTest() {
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

export  function WorkshopPostTest() {
   async function addWorkshop() {
    const workshopRequest = {
  name: "Creative Writing Workshop3",
  description: "A detailed workshop for aspiring writers.",
  shortName: "Writing101",
  shortDescription: "Intro to writing",
  availableSlots: 25,
  categoryId: "687b28e7c6cbb00e79c45e4b",
  startDate: "2025-08-01T10:00:00",
  endDate: "2025-08-15T17:00:00",
  maxParticipants: 30,
  fees: 4999,
  discount: 10,
  approvalStatus: "APPROVED",
  sessionDates: ["2025-08-01", "2025-08-03", "2025-08-05"],
  rating: 4.7,
  highlights: ["Interactive sessions", "Expert coaches", "Free resources"],
  displayPictureUrl: "https://example.com/images/workshop-dp.jpg",
  bannerUrl: "https://example.com/images/workshop-banner.jpg",
  mode: "VIRTUAL"
};;

    try {
      const token = localStorage.getItem("authToken");
      const tokenType = localStorage.getItem("tokenType") || "Bearer";

      if (!token) {
        alert("Please login first!");
        return;
      }

      const response = await fetch("http://31.97.224.12:14001/api/workshop/admin/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${tokenType} ${token}`, // ✅ correct format
        },
        body: JSON.stringify(workshopRequest),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Workshop added:", data);
      alert("Workshop added successfully: " + JSON.stringify(data));
    } catch (error) {
      console.error("Error adding workshop:", error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div>
      <h1 className="text-black">Test Add Workshop</h1>
      <button
        onClick={addWorkshop}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Workshop
      </button>
    </div>
  );
}