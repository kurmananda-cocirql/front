
class LoginRequest {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

async function login() {
  const loginRequest = new LoginRequest(
    "awesome.sunday@yopmail.com",
    "Keval@123"
  );

  try {
    const response = await fetch("http://31.97.224.12:14001/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Login successful:", data);

    // Example: store token in localStorage
    if (data.token) {
      localStorage.setItem("authToken", data.token);
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
}

login();

// React test component
export default function LoginTest() {
  return (
    <div>
      <h1 className="text-black">Test Login</h1>
      <button onClick={login} className="bg-black">Login</button>
    </div>
  );
}