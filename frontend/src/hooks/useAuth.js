import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Dashboard() {

  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchProfile = async () => {

      try {

        const res = await API.get("/auth/profile", {

          headers: {

            Authorization: `Bearer ${token}`,

          },

        });

        setData(res.data);

      } catch (err) {

        localStorage.removeItem("token");

        navigate("/");

      }

    };

    fetchProfile();

  }, [navigate]);



  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };



  return (

    <div style={{ padding: 30 }}>

      <h1>Dashboard 🔐</h1>

      {data ? (

        <div>

          <p>{data.message}</p>

          <p>User ID: {data.userId}</p>

        </div>

      ) : (

        <h3>Loading...</h3>

      )}

      <br />

      <button onClick={logout}>

        Logout

      </button>

    </div>

  );

}