import { useUserEngine } from "../../context/UserEngineContext";

export default function DashboardBanner() {

  const { user } = useUserEngine();

  return (

    <div className="dashboard-banner">

      <h1>

        Ready to become a Professional Engineer?

      </h1>

      <p>

        Keep learning,

        build projects,

        earn XP,

        unlock certificates.

      </p>

      <div className="banner-stats">

        <div>

          <h3>

            Level {user.level}

          </h3>

        </div>

        <div>

          <h3>

            {user.xp.toLocaleString()} XP

          </h3>

        </div>

        <div>

          <h3>

            🔥 {user.streak} Day Streak

          </h3>

        </div>

      </div>

    </div>

  );

}