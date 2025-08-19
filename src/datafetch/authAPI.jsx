// authAPI.js
export const loginUser = async (credentials) => {
  try {
    const response = await fetch("http://31.97.224.12:14001/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    // ✅ store token
    if (data?.data?.access_token) {
      localStorage.setItem("authToken", data.data.access_token);
      localStorage.setItem("tokenType", data.data.token_type || "Bearer");
    }

    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await fetch("http://31.97.224.12:14001/api/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};
