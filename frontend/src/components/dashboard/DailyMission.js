import dailyMissions from "../../data/dailyMissions";
import { useDailyMissions } from "../../context/DailyMissionContext";

export default function DailyMission() {

  const { completeMission, isCompleted } = useDailyMissions();

  return (

    <div className="hubCard">

      <h2>🎯 Daily Missions</h2>

      {dailyMissions.map((mission) => (

        <div
          key={mission.id}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px"
          }}
        >

          <h4>{mission.title}</h4>

          <p>{mission.description}</p>

          <small>🏆 {mission.xp} XP</small>

          <br />

          <button
            disabled={isCompleted(mission.id)}
            onClick={() =>
              completeMission(mission.id, mission.xp)
            }
          >

            {isCompleted(mission.id)
              ? "Completed"
              : "Complete Mission"}

          </button>

        </div>

      ))}

    </div>

  );

}