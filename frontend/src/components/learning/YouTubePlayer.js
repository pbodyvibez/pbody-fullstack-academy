import { useEffect, useRef } from "react";

export default function YouTubePlayer({

  videoId,

  onComplete

}) {

  const playerRef = useRef(null);

  const timerRef = useRef(null);

  const completedRef = useRef(false);

  useEffect(() => {

    completedRef.current = false;

  }, [videoId]);

  useEffect(() => {

    const destroyPlayer = () => {

      if (timerRef.current) {

        clearInterval(timerRef.current);

        timerRef.current = null;

      }

      if (

        playerRef.current &&

        typeof playerRef.current.destroy === "function"

      ) {

        playerRef.current.destroy();

      }

      playerRef.current = null;

    };

    const createPlayer = () => {

      destroyPlayer();

      playerRef.current = new window.YT.Player("youtube-player", {

        videoId,

        events: {

          onStateChange: (event) => {

            if (

              event.data !== window.YT.PlayerState.PLAYING ||

              timerRef.current

            ) {

              return;

            }

            timerRef.current = setInterval(() => {

              if (

                !playerRef.current ||

                typeof playerRef.current.getDuration !== "function" ||

                typeof playerRef.current.getCurrentTime !== "function"

              ) {

                clearInterval(timerRef.current);

                timerRef.current = null;

                return;

              }

              const duration = playerRef.current.getDuration();

              const current = playerRef.current.getCurrentTime();

              if (

                duration > 0 &&

                current / duration >= 0.95 &&

                !completedRef.current

              ) {

                completedRef.current = true;

                clearInterval(timerRef.current);

                timerRef.current = null;

                if (onComplete) {

                  onComplete();

                }

              }

            }, 3000);

          }

        }

      });

    };

    if (!window.YT || !window.YT.Player) {

      const tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";

      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = createPlayer;

    } else {

      createPlayer();

    }

    return () => {

      destroyPlayer();

    };

  }, [videoId, onComplete]);

  return (

    <div

      id="youtube-player"

      style={{

        width: "100%",

        height: "520px"

      }}

    />

  );

}