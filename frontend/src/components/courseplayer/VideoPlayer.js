import "./courseplayer.css";

export default function VideoPlayer({ lesson }) {

  if (!lesson) return null;

  return (

    <div className="video-player">

      <iframe

        src={`https://www.youtube.com/embed/${lesson.videoId}`}

        title={lesson.title}

        allowFullScreen

      />

    </div>

  );

}