function Home() {

  return (

    <div
      style={{
        color:"white",
        textAlign:"center",
        padding:"80px 20px"
      }}
    >

      <h1
        style={{
          fontSize:"75px",
          marginBottom:"10px"
        }}
      >

        PBody Academy

      </h1>


      <h2
        style={{
          color:"#38bdf8",
          fontSize:"35px"
        }}
      >

        Transforming Learners Into Builders

      </h2>


      <p
        style={{
          fontSize:"24px",
          maxWidth:"900px",
          margin:"30px auto",
          lineHeight:"45px"
        }}
      >

        Master HTML, CSS, JavaScript,

        React, Node.js,

        Databases and Artificial Intelligence

        from beginner to professional.

      </p>


      <div>

        <button

          style={{

            padding:"18px 40px",

            fontSize:"20px",

            background:"#38bdf8",

            border:"none",

            borderRadius:"15px",

            cursor:"pointer",

            marginRight:"20px"

          }}

        >

          Start Learning

        </button>



        <button

          style={{

            padding:"18px 40px",

            fontSize:"20px",

            background:"transparent",

            color:"white",

            border:"1px solid white",

            borderRadius:"15px",

            cursor:"pointer"

          }}

        >

          Explore Courses

        </button>

      </div>


      <div

        style={{

          display:"flex",

          justifyContent:"center",

          gap:"70px",

          marginTop:"80px",

          flexWrap:"wrap"

        }}

      >

        <div>

          <h1>10,000+</h1>

          <p>Students</p>

        </div>


        <div>

          <h1>50+</h1>

          <p>Courses</p>

        </div>


        <div>

          <h1>95%</h1>

          <p>Success Rate</p>

        </div>

      </div>

    </div>

  )

}

export default Home;