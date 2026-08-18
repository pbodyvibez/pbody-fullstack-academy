// ======================================================
// PBODY FULLSTACK ACADEMY
// PROFESSIONAL ENGINEERING PROFILE
// PREMIUM FULL REPLACEMENT
// ======================================================

import {
  useState
} from "react";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Code2,
  Globe,
  Camera,
  Save,
  RotateCcw,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

import {
  useAuth
} from "../context/AuthContext";

import Logo from "../assets/images/logo.png";

import "../styles/profile.css";


// ======================================================
// COMPONENT
// ======================================================

export default function Profile() {

  // ====================================================
  // AUTH
  // ====================================================

  const {
    user,
    updateProfile
  } = useAuth();


  const profile = user || {};


  // ====================================================
  // FORM
  // ====================================================

  const [form, setForm] = useState({

    name:
      profile.name || "",

    email:
      profile.email || "",

    phone:
      profile.phone || "",

    country:
      profile.country || "",

    role:
      profile.role ||
      "Student Developer",

    bio:
      profile.bio || "",

    skills:
      profile.skills || "",

    github:
      profile.github || "",

    linkedin:
      profile.linkedin || "",

    portfolio:
      profile.portfolio || ""

  });


  // ====================================================
  // PHOTO
  // ====================================================

  const [photo, setPhoto] = useState(
    profile.photo || ""
  );


  // ====================================================
  // SAVE STATE
  // ====================================================

  const [saved, setSaved] = useState(false);


  // ====================================================
  // FORM CHANGE
  // ====================================================

  function handleChange(e) {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });

  }


  // ====================================================
  // PHOTO UPLOAD
  // ====================================================

  function uploadPhoto(e) {

    const file =
      e.target.files?.[0];

    if (!file) return;


    const reader =
      new FileReader();


    reader.onload = (event) => {

      setPhoto(
        event.target.result
      );

    };


    reader.readAsDataURL(file);

  }


  // ====================================================
  // SAVE PROFILE
  // ====================================================

  function saveProfile() {

    if (updateProfile) {

      updateProfile({

        ...form,

        photo

      });

    }


    setSaved(true);


    window.setTimeout(() => {

      setSaved(false);

    }, 3000);

  }


  // ====================================================
  // PROFILE INITIAL
  // ====================================================

  const profileInitial =

    form.name
      ? form.name
          .charAt(0)
          .toUpperCase()
      : "P";


  // ====================================================
  // PROFILE STATS
  // ====================================================

  const level =
    profile.level || 1;

  const xp =
    profile.xp ||
    profile.totalXP ||
    0;

  const streak =
    profile.streak || 0;


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <div className="premiumProfilePage">


      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <section className="profileHero">


        <div className="profileHeroBrand">


          <img
            src={Logo}
            alt="PBody FullStack Academy"
            className="profileHeroLogo"
          />


          <div>

            <strong>
              PBODY FULLSTACK ACADEMY
            </strong>

            <span>
              ENGINEERING STUDENT PROFILE
            </span>

          </div>


        </div>


        <div className="profileHeroContent">


          <span className="profileBadge">

            <Sparkles size={14} />

            DEVELOPER IDENTITY

          </span>


          <h1>
            Build Your Engineering Profile
          </h1>


          <p>

            Create a professional developer identity,
            showcase your technical skills and track
            your growth throughout your PBody journey.

          </p>


        </div>


      </section>


      {/* ==================================================
          PROFILE LAYOUT
      ================================================== */}

      <div className="profileGrid">


        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="profileSidebar">


          <div className="profileIdentityCard">


            {/* =================================================
                AVATAR
            ================================================= */}

            <div className="avatarBox">


              {photo ? (

                <img
                  src={photo}
                  alt="Profile"
                />

              ) : (

                <div className="avatarPlaceholder">

                  {profileInitial}

                </div>

              )}


              <label
                className="avatarUploadButton"
                title="Change profile photo"
              >

                <Camera size={15} />

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={uploadPhoto}
                />

              </label>


            </div>


            {/* =================================================
                IDENTITY
            ================================================= */}

            <h2>

              {
                form.name ||
                "Student Developer"
              }

            </h2>


            <p className="profileRole">

              {form.role ||
                "Student Developer"}

            </p>


            {
              form.country && (

                <div className="profileLocation">

                  <MapPin size={14} />

                  {form.country}

                </div>

              )
            }


            <label className="uploadProfile">

              <Camera size={16} />

              Change Profile Photo

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={uploadPhoto}
              />

            </label>


          </div>


          {/* =================================================
              PROGRESS STATS
          ================================================= */}

          <div className="profileStats">


            <div>

              <strong>
                {level}
              </strong>

              <span>
                Level
              </span>

            </div>


            <div>

              <strong>
                {xp}
              </strong>

              <span>
                XP
              </span>

            </div>


            <div>

              <strong>
                {streak}
              </strong>

              <span>
                Streak
              </span>

            </div>


          </div>


          {/* =================================================
              PROFILE STATUS
          ================================================= */}

          <div className="profileStatusCard">


            <div className="statusHeader">

              <span>
                PROFILE STATUS
              </span>

              <strong>
                Active
              </strong>

            </div>


            <div className="profileProgress">

              <span
                style={{
                  width: "75%"
                }}
              />

            </div>


            <p>
              Keep your profile updated as
              your engineering journey grows.
            </p>


          </div>


        </aside>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="profileContent">


          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <section className="profileCard">


            <div className="profileSectionHeading">

              <div className="profileSectionIcon">

                <User size={20} />

              </div>


              <div>

                <span>
                  DEVELOPER IDENTITY
                </span>

                <h2>
                  Personal Information
                </h2>

                <p>
                  Keep your professional identity
                  and contact information up to date.
                </p>

              </div>

            </div>


            <div className="formGrid">


              {/* NAME */}

              <div className="field">

                <label>
                  Full Name
                </label>

                <div className="inputWrapper">

                  <User size={17} />

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div className="field">

                <label>
                  Email Address
                </label>

                <div className="inputWrapper">

                  <Mail size={17} />

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="developer@email.com"
                  />

                </div>

              </div>


              {/* PHONE */}

              <div className="field">

                <label>
                  Phone Number
                </label>

                <div className="inputWrapper">

                  <Phone size={17} />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234"
                  />

                </div>

              </div>


              {/* COUNTRY */}

              <div className="field">

                <label>
                  Country
                </label>

                <div className="inputWrapper">

                  <MapPin size={17} />

                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Nigeria"
                  />

                </div>

              </div>


              {/* ROLE */}

              <div className="field fieldFull">

                <label>
                  Professional Role
                </label>

                <div className="inputWrapper">

                  <Briefcase size={17} />

                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Frontend Engineer"
                  />

                </div>

              </div>


            </div>


            {/* BIO */}

            <div className="field">

              <label>
                Professional Biography
              </label>


              <textarea
                name="bio"
                rows="5"
                value={form.bio}
                onChange={handleChange}
                placeholder="Tell the academy about yourself, your engineering interests, goals and professional journey."
              />


            </div>


          </section>


          {/* =================================================
              ENGINEERING SKILLS
          ================================================= */}

          <section className="profileCard">


            <div className="profileSectionHeading">

              <div className="profileSectionIcon">

                <Code2 size={20} />

              </div>


              <div>

                <span>
                  TECHNICAL CAPABILITIES
                </span>

                <h2>
                  Engineering Skills
                </h2>

                <p>
                  Showcase the technologies,
                  frameworks and tools you work with.
                </p>

              </div>

            </div>


            <div className="field">

              <label>
                Skills & Technologies
              </label>


              <textarea
                name="skills"
                rows="5"
                value={form.skills}
                onChange={handleChange}
                placeholder="React, JavaScript, Node.js, MongoDB, Python, Git, REST APIs..."
              />

            </div>


          </section>


          {/* =================================================
              PROFESSIONAL LINKS
          ================================================= */}

          <section className="profileCard">


            <div className="profileSectionHeading">

              <div className="profileSectionIcon">

                <Globe size={20} />

              </div>


              <div>

                <span>
                  PROFESSIONAL PRESENCE
                </span>

                <h2>
                  Developer Links
                </h2>

                <p>
                  Connect your professional profiles
                  and portfolio to your academy identity.
                </p>

              </div>

            </div>


            {/* =================================================
                GITHUB
            ================================================= */}

            <div className="field">

              <label>
                GitHub
              </label>

              <div className="inputWrapper">

                <Code2 size={17} />

                <input
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                />

                {
                  form.github && (

                    <a
                      href={form.github}
                      target="_blank"
                      rel="noreferrer"
                      className="fieldLink"
                      aria-label="Open GitHub profile"
                    >

                      <ArrowUpRight size={15} />

                    </a>

                  )
                }

              </div>

            </div>


            {/* =================================================
                LINKEDIN
            ================================================= */}

            <div className="field">

              <label>
                LinkedIn
              </label>

              <div className="inputWrapper">

                <Briefcase size={17} />

                <input
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/profile"
                />

                {
                  form.linkedin && (

                    <a
                      href={form.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="fieldLink"
                      aria-label="Open LinkedIn profile"
                    >

                      <ArrowUpRight size={15} />

                    </a>

                  )
                }

              </div>

            </div>


            {/* =================================================
                PORTFOLIO
            ================================================= */}

            <div className="field">

              <label>
                Portfolio Website
              </label>

              <div className="inputWrapper">

                <Globe size={17} />

                <input
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourportfolio.com"
                />

                {
                  form.portfolio && (

                    <a
                      href={form.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="fieldLink"
                      aria-label="Open portfolio website"
                    >

                      <ArrowUpRight size={15} />

                    </a>

                  )
                }

              </div>

            </div>


          </section>


          {/* =================================================
              CAREER GROWTH
          ================================================= */}

          <section className="profileCard growthCard">


            <div className="profileSectionHeading">

              <div className="profileSectionIcon">

                <Sparkles size={20} />

              </div>


              <div>

                <span>
                  CAREER DEVELOPMENT
                </span>

                <h2>
                  Engineering Growth Checklist
                </h2>

                <p>
                  Build the habits that turn learning
                  into professional engineering experience.
                </p>

              </div>

            </div>


            <div className="growthItems">


              <div>

                <CheckCircle2 size={18} />

                <span>
                  Complete your developer profile
                </span>

              </div>


              <div>

                <CheckCircle2 size={18} />

                <span>
                  Build real-world projects
                </span>

              </div>


              <div>

                <CheckCircle2 size={18} />

                <span>
                  Complete academy courses
                </span>

              </div>


              <div>

                <CheckCircle2 size={18} />

                <span>
                  Earn professional certificates
                </span>

              </div>


              <div>

                <CheckCircle2 size={18} />

                <span>
                  Join the engineering community
                </span>

              </div>


            </div>


          </section>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="profileActions">


            <button
              type="button"
              className="saveButton"
              onClick={saveProfile}
            >

              <Save size={18} />

              Save Profile

            </button>


            <button
              type="button"
              className="resetButton"
              onClick={() =>
                window.location.reload()
              }
            >

              <RotateCcw size={17} />

              Reset Changes

            </button>


          </div>


          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {
            saved && (

              <div className="saveMessage">

                <CheckCircle2 size={18} />

                Profile updated successfully.

              </div>

            )
          }


        </main>


      </div>


    </div>

  );

}