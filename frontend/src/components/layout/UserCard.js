import { useAuth } from "../../context/AuthContext";

export default function UserCard({ collapsed }) {

  const { user } = useAuth();

  const xp = user?.xp || 0;

  const level = user?.level || 1;

  const nextXP = user?.nextLevelXP || 1000;

  const percent = Math.min((xp / nextXP) * 100, 100);

  return (

    <div className="userCard">

      <div className="avatar">

        {

          user?.photo ? (

            <img

              src={user.photo}

              alt={user.name}

            />

          ) : (

            user?.name?.charAt(0) || "P"

          )

        }

      </div>

      {

        !collapsed && (

          <>

            <h3>{user?.name}</h3>

            <small>{user?.email}</small>

            <span>⭐ Level {level}</span>

            <div className="xpTrack">

              <div

                className="xpFill"

                style={{

                  width: `${percent}%`

                }}

              />

            </div>

            <small>{xp} XP</small>

          </>

        )

      }

    </div>

  );

}