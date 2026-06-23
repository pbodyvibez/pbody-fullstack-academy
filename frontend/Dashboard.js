import { useEffect, useState } from "react";
import API from "./api";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("No token found — please login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessage(res.data.message);
        setUserId(res.data.userId);
      } catch (err) {
        setMessage("Access denied ❌ token invalid");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard 🔐</h2>
      <p>{message}</p>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
}

export default Dashboard;