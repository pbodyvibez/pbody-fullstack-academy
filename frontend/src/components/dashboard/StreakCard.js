import { useUserEngine } from "../../context/UserEngineContext";

export default function StreakCard() {

  const { user } = useUserEngine();

  return (

    <div className="dashboard-card">

      <h2>

        🔥 Learning Streak

      </h2>

      <h1>

        {user.streak}

      </h1>

      <p>

        Consecutive Days

      </p>

    </div>

  );

}