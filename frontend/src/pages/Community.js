// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING COMMUNITY
// FULL REPLACEMENT
// ======================================================

import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MessageCircle,
  Users,
  BriefcaseBusiness,
  Trophy,
  FolderKanban,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building2,
  UserRound,
  Network
} from "lucide-react";

import "./Community.css";


// ======================================================
// COMPONENT
// ======================================================

export default function Community() {

  const navigate = useNavigate();


  // ====================================================
  // NAVIGATION
  // ====================================================

  const goTo = (path) => {

    navigate(path);

    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // ====================================================
  // ENTER DISCUSSIONS
  // ====================================================

  const enterDiscussions = () => {

    navigate("/community/discussions");

    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <div className="communityPage">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="communityHero">

        <div className="communityHeroGlow glowOne" />
        <div className="communityHeroGlow glowTwo" />

        <div className="communityHeroContent">

          <div className="communityEyebrow">

            <Sparkles size={16} />

            PBODY ENGINEERING NETWORK

          </div>


          <h1>

            Build.

            <span>
              Connect.
            </span>

            <br />

            Grow Together.

          </h1>


          <p>

            Welcome to the PBODY Engineering Community —
            a professional network where students, engineers,
            managers, employees and employers connect,
            collaborate and create opportunities.

          </p>


          <div className="communityHeroActions">

            {/* ============================================
                JOIN COMMUNITY
            ============================================ */}

            <button
              type="button"
              className="communityPrimaryButton"
              onClick={enterDiscussions}
            >

              <MessageCircle size={19} />

              Join Community

              <ArrowRight size={18} />

            </button>


            {/* ============================================
                EXPLORE PROJECTS
            ============================================ */}

            <button
              type="button"
              className="communitySecondaryButton"
              onClick={() =>
                goTo("/projects")
              }
            >

              <FolderKanban size={19} />

              Explore Projects

            </button>

          </div>


          <div className="communityAudience">

            <div>
              <UserRound size={17} />
              Students
            </div>

            <div>
              <Users size={17} />
              Engineers
            </div>

            <div>
              <BriefcaseBusiness size={17} />
              Employers
            </div>

            <div>
              <Building2 size={17} />
              Companies
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          NETWORK INTRO
      ================================================== */}

      <section className="communityNetwork">

        <div className="communitySectionHeader">

          <span>
            PROFESSIONAL NETWORK
          </span>

          <h2>
            More Than A Student Community
          </h2>

          <p>

            PBODY connects learning with the real engineering
            ecosystem — from students building their first
            projects to professionals, managers and employers
            looking for talent.

          </p>

        </div>


        <div className="communityRoleGrid">


          {/* STUDENTS */}

          <div className="communityRoleCard">

            <div className="roleIcon">
              <UserRound size={25} />
            </div>

            <h3>
              Students
            </h3>

            <p>

              Ask questions, collaborate, showcase projects
              and build meaningful professional relationships.

            </p>

            <button
              type="button"
              onClick={() =>
                goTo("/learning-hub")
              }
            >

              Continue Learning

              <ArrowRight size={16} />

            </button>

          </div>


          {/* ENGINEERS */}

          <div className="communityRoleCard">

            <div className="roleIcon">
              <Network size={25} />
            </div>

            <h3>
              Engineers
            </h3>

            <p>

              Exchange technical knowledge, mentor upcoming
              developers and collaborate on real engineering work.

            </p>

            <button
              type="button"
              onClick={() =>
                goTo("/projects")
              }
            >

              Explore Projects

              <ArrowRight size={16} />

            </button>

          </div>


          {/* PROFESSIONALS */}

          <div className="communityRoleCard">

            <div className="roleIcon">
              <BriefcaseBusiness size={25} />
            </div>

            <h3>
              Professionals
            </h3>

            <p>

              Build your professional reputation, connect with
              talent and discover opportunities across the network.

            </p>

            <button
              type="button"
              onClick={() =>
                goTo("/jobs")
              }
            >

              Explore Opportunities

              <ArrowRight size={16} />

            </button>

          </div>


          {/* EMPLOYERS */}

          <div className="communityRoleCard">

            <div className="roleIcon">
              <Building2 size={25} />
            </div>

            <h3>
              Employers
            </h3>

            <p>

              Discover emerging engineering talent and connect
              with developers building practical skills.

            </p>

            <button
              type="button"
              onClick={() =>
                goTo("/jobs")
              }
            >

              View Career Network

              <ArrowRight size={16} />

            </button>

          </div>

        </div>

      </section>


      {/* ==================================================
          COMMUNITY FEATURES
      ================================================== */}

      <section className="communityFeatures">

        <div className="communitySectionHeader">

          <span>
            COMMUNITY EXPERIENCE
          </span>

          <h2>
            Everything Your Network Needs
          </h2>

        </div>


        <div className="communityFeatureGrid">


          {/* =================================================
              ENGINEERING DISCUSSIONS
          ================================================= */}

          <button
            type="button"
            className="communityFeatureCard"
            onClick={enterDiscussions}
          >

            <div className="featureIcon">

              <MessageCircle size={26} />

            </div>


            <div>

              <h3>
                Engineering Discussions
              </h3>


              <p>

                Ask questions, exchange ideas and get help
                from people working through similar problems.

              </p>


              <span>

                Enter Discussions

                <ArrowRight size={16} />

              </span>

            </div>

          </button>


          {/* =================================================
              PROJECT COLLABORATION
          ================================================= */}

          <button
            type="button"
            className="communityFeatureCard"
            onClick={() =>
              goTo("/projects")
            }
          >

            <div className="featureIcon">

              <FolderKanban size={26} />

            </div>


            <div>

              <h3>
                Project Collaboration
              </h3>


              <p>

                Find developers to collaborate with and turn
                ideas into practical engineering projects.

              </p>


              <span>

                Find Projects

                <ArrowRight size={16} />

              </span>

            </div>

          </button>


          {/* =================================================
              RECOGNITION
          ================================================= */}

          <button
            type="button"
            className="communityFeatureCard"
            onClick={() =>
              goTo("/certificates")
            }
          >

            <div className="featureIcon">

              <Trophy size={26} />

            </div>


            <div>

              <h3>
                Recognition
              </h3>


              <p>

                Showcase your achievements, projects,
                certifications and progress to the network.

              </p>


              <span>

                View Achievements

                <ArrowRight size={16} />

              </span>

            </div>

          </button>


          {/* =================================================
              CAREER CONNECTIONS
          ================================================= */}

          <button
            type="button"
            className="communityFeatureCard"
            onClick={() =>
              goTo("/jobs")
            }
          >

            <div className="featureIcon">

              <BriefcaseBusiness size={26} />

            </div>


            <div>

              <h3>
                Career Connections
              </h3>


              <p>

                Connect learning with real opportunities,
                professional relationships and career growth.

              </p>


              <span>

                Explore Careers

                <ArrowRight size={16} />

              </span>

            </div>

          </button>

        </div>

      </section>


      {/* ==================================================
          TRUST / SAFETY
      ================================================== */}

      <section className="communityTrust">

        <div className="trustIcon">

          <ShieldCheck size={30} />

        </div>


        <div>

          <span>
            PROFESSIONAL • COLLABORATIVE • CAREER FOCUSED
          </span>


          <h2>
            A Community Built For Engineering Growth
          </h2>


          <p>

            Learn from others, share what you know, collaborate
            on meaningful projects and build relationships that
            extend beyond the classroom.

          </p>

        </div>


        <button
          type="button"
          onClick={enterDiscussions}
        >

          Enter Community

          <ArrowRight size={18} />

        </button>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="communityCTA">

        <div>

          <div className="ctaBadge">

            <Sparkles size={16} />

            PBODY FULLSTACK ACADEMY

          </div>


          <h2>

            Your Next Engineering

            <span>
              Connection
            </span>

            Could Change Everything.

          </h2>


          <p>

            Join a growing ecosystem of learners,
            developers, professionals and organizations.

          </p>

        </div>


        <div className="communityCTAButtons">


          <button
            type="button"
            onClick={enterDiscussions}
          >

            Join The Network

            <ArrowRight size={18} />

          </button>


          <button
            type="button"
            onClick={() =>
              goTo("/profile")
            }
          >

            View My Profile

          </button>

        </div>

      </section>

    </div>

  );

}