import { useUserEngine } from "../../context/UserEngineContext";

export default function XPCard() {

  const { user } = useUserEngine();

  const progress =

    (user.xp / user.nextLevelXP) * 100;

  return (

    <div className="dashboard-card">

      <h2>

        ⭐ Experience

      </h2>

      <h1>

        {user.xp.toLocaleString()}

      </h1>

      <div className="progress">

        <div

          className="progressFill"

          style={{

            width:

              progress + "%"

          }}

        />

      </div>

      <p>

        Level {user.level}

      </p>

    </div>

  );

}