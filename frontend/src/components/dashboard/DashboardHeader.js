import { useUserEngine } from "../../context/UserEngineContext";

export default function DashboardHeader() {

  const { user } = useUserEngine();

  return (

    <div className="dashboard-header">

      <div>

        <h2>

          Welcome back,

          {" "}

          {user.name}

          👋

        </h2>

        <p>

          Level {user.level} Engineering Student

        </p>

      </div>

      <div className="header-profile">

        <div className="avatar">

          {user.name.charAt(0)}

        </div>

      </div>

    </div>

  );

}