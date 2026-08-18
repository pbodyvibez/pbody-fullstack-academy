// ======================================================
// PBODY FULLSTACK ACADEMY
// ENGINEERING DISCUSSIONS
// PREMIUM COMMUNITY DISCUSSION ROOM
// FULL REPLACEMENT
// ======================================================

import React, {
  useEffect,
  useMemo,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Bookmark,
  CheckCircle,
  ChevronDown,
  Clock3,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Pin,
  Plus,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Tag,
  ThumbsUp,
  UserRound,
  Users,
  X
} from "lucide-react";

import {
  useAuth
} from "../context/AuthContext";

import "./EngineeringDiscussions.css";


// ======================================================
// STORAGE
// ======================================================

const STORAGE_KEY =
  "pbody-engineering-discussions";


// ======================================================
// DEFAULT DISCUSSIONS
// ======================================================

const defaultDiscussions = [
  {
    id: "discussion-1",

    author: {
      name: "PBODY Engineering Team",
      role: "Academy Manager",
      initials: "PE",
      verified: true
    },

    category: "Announcements",

    title:
      "Welcome to the PBODY Engineering Discussion Room",

    content:
      "This is the professional space for students, engineers, managers and employers to ask questions, exchange ideas, collaborate and grow together. Keep discussions respectful, useful and engineering focused.",

    time:
      "Today",

    replies: 4,

    likes: 18,

    liked: false,

    bookmarked: false,

    pinned: true,

    comments: [
      {
        id: "comment-1",
        author: {
          name: "PBODY Engineering Team",
          role: "Academy Manager",
          initials: "PE",
          verified: true
        },
        text:
          "Ask questions freely and help other members whenever you can.",
        time: "Today"
      }
    ]
  },

  {
    id: "discussion-2",

    author: {
      name: "Frontend Engineering",
      role: "Engineering Community",
      initials: "FE",
      verified: true
    },

    category: "Frontend",

    title:
      "What is the best way to structure a large React application?",

    content:
      "I am working on a growing React project and would like to hear how other developers organize pages, components, contexts, hooks and data files without allowing the project to become difficult to maintain.",

    time:
      "2h ago",

    replies: 7,

    likes: 12,

    liked: false,

    bookmarked: false,

    pinned: false,

    comments: [
      {
        id: "comment-2",
        author: {
          name: "Senior Frontend Engineer",
          role: "Engineer",
          initials: "SF",
          verified: false
        },
        text:
          "Keep your architecture feature-oriented where possible and avoid creating folders simply because they look organized.",
        time: "1h ago"
      }
    ]
  },

  {
    id: "discussion-3",

    author: {
      name: "Backend Engineering",
      role: "Engineering Community",
      initials: "BE",
      verified: true
    },

    category: "Backend",

    title:
      "How should authentication be handled in a production Node.js application?",

    content:
      "Looking for recommendations around authentication architecture, protected routes, token handling, refresh tokens and keeping sensitive credentials secure.",

    time:
      "5h ago",

    replies: 11,

    likes: 21,

    liked: false,

    bookmarked: false,

    pinned: false,

    comments: []
  }
];


// ======================================================
// CATEGORIES
// ======================================================

const categories = [
  "All",
  "Frontend",
  "Backend",
  "AI",
  "Mobile",
  "DevOps",
  "Cybersecurity",
  "Projects",
  "Career",
  "Announcements"
];


// ======================================================
// HELPERS
// ======================================================

const getInitials = (name = "") => {

  const parts =
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean);

  if (!parts.length) {
    return "PB";
  }

  if (parts.length === 1) {
    return parts[0]
      .substring(0, 2)
      .toUpperCase();
  }

  return (
    parts[0][0] +
    parts[parts.length - 1][0]
  ).toUpperCase();
};


const createId = (prefix = "item") => {

  return (
    prefix +
    "-" +
    Date.now() +
    "-" +
    Math.random()
      .toString(36)
      .substring(2, 8)
  );
};


// ======================================================
// COMPONENT
// ======================================================

export default function EngineeringDiscussions() {

  const navigate = useNavigate();

  const authContext =
    useAuth() || {};

  const {
    user
  } = authContext;


  // ====================================================
  // CURRENT USER
  // ====================================================

  const currentUser =
    useMemo(() => {

      const storedUser =
        (() => {

          try {

            const raw =
              localStorage.getItem(
                "pbody_user"
              );

            if (!raw) {
              return null;
            }

            return JSON.parse(raw);

          } catch {
            return null;
          }

        })();


      const source =
        user ||
        storedUser ||
        {};


      const name =
        source.name ||
        source.fullName ||
        source.username ||
        source.email?.split("@")[0] ||
        "PBODY Student";


      return {

        name,

        role:
          source.role ||
          "Student",

        initials:
          getInitials(name),

        verified:
          Boolean(
            source.verified
          )

      };

    }, [
      user
    ]);


  // ====================================================
  // DISCUSSIONS
  // ====================================================

  const [
    discussions,
    setDiscussions
  ] = useState(() => {

    try {

      const saved =
        localStorage.getItem(
          STORAGE_KEY
        );

      if (saved) {

        const parsed =
          JSON.parse(saved);

        if (
          Array.isArray(parsed) &&
          parsed.length
        ) {

          return parsed;

        }

      }

    } catch {
      // Use defaults.
    }

    return defaultDiscussions;

  });


  // ====================================================
  // PERSIST
  // ====================================================

  useEffect(() => {

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          discussions
        )
      );

    } catch {
      // Ignore storage errors.
    }

  }, [
    discussions
  ]);


  // ====================================================
  // UI STATE
  // ====================================================

  const [
    activeCategory,
    setActiveCategory
  ] = useState("All");


  const [
    searchQuery,
    setSearchQuery
  ] = useState("");


  const [
    showComposer,
    setShowComposer
  ] = useState(false);


  const [
    newTitle,
    setNewTitle
  ] = useState("");


  const [
    newContent,
    setNewContent
  ] = useState("");


  const [
    newCategory,
    setNewCategory
  ] = useState("Frontend");


  const [
    replyOpen,
    setReplyOpen
  ] = useState(null);


  const [
    replyText,
    setReplyText
  ] = useState("");


  const [
    savedOnly,
    setSavedOnly
  ] = useState(false);


  // ====================================================
  // FILTER
  // ====================================================

  const filteredDiscussions =
    useMemo(() => {

      const query =
        searchQuery
          .trim()
          .toLowerCase();


      return discussions.filter(
        discussion => {

          const categoryMatch =
            activeCategory === "All" ||
            discussion.category ===
              activeCategory;


          const searchMatch =
            !query ||
            discussion.title
              ?.toLowerCase()
              .includes(query) ||
            discussion.content
              ?.toLowerCase()
              .includes(query) ||
            discussion.author?.name
              ?.toLowerCase()
              .includes(query);


          const savedMatch =
            !savedOnly ||
            discussion.bookmarked;


          return (
            categoryMatch &&
            searchMatch &&
            savedMatch
          );

        }
      );

    }, [
      discussions,
      activeCategory,
      searchQuery,
      savedOnly
    ]);


  // ====================================================
  // CREATE DISCUSSION
  // ====================================================

  const createDiscussion = () => {

    const title =
      newTitle.trim();

    const content =
      newContent.trim();


    if (!title || !content) {
      return;
    }


    const discussion = {

      id:
        createId("discussion"),

      author:
        currentUser,

      category:
        newCategory,

      title,

      content,

      time:
        "Just now",

      replies: 0,

      likes: 0,

      liked: false,

      bookmarked: false,

      pinned: false,

      comments: []

    };


    setDiscussions(
      previous => [
        discussion,
        ...previous
      ]
    );


    setNewTitle("");
    setNewContent("");
    setNewCategory("Frontend");

    setShowComposer(false);

  };


  // ====================================================
  // LIKE
  // ====================================================

  const toggleLike = id => {

    setDiscussions(
      previous =>
        previous.map(
          discussion => {

            if (
              discussion.id !== id
            ) {

              return discussion;

            }


            const liked =
              !discussion.liked;


            return {

              ...discussion,

              liked,

              likes:
                Math.max(
                  0,
                  discussion.likes +
                    (liked ? 1 : -1)
                )

            };

          }
        )
    );

  };


  // ====================================================
  // BOOKMARK
  // ====================================================

  const toggleBookmark = id => {

    setDiscussions(
      previous =>
        previous.map(
          discussion => {

            if (
              discussion.id !== id
            ) {

              return discussion;

            }


            return {

              ...discussion,

              bookmarked:
                !discussion.bookmarked

            };

          }
        )
    );

  };


  // ====================================================
  // REPLY
  // ====================================================

  const addReply = discussionId => {

    const text =
      replyText.trim();


    if (!text) {
      return;
    }


    setDiscussions(
      previous =>
        previous.map(
          discussion => {

            if (
              discussion.id !==
              discussionId
            ) {

              return discussion;

            }


            const comment = {

              id:
                createId("comment"),

              author:
                currentUser,

              text,

              time:
                "Just now"

            };


            return {

              ...discussion,

              replies:
                (discussion.replies || 0) + 1,

              comments: [
                ...(discussion.comments || []),
                comment
              ]

            };

          }
        )
    );


    setReplyText("");
    setReplyOpen(null);

  };


  // ====================================================
  // SHARE
  // ====================================================

  const shareDiscussion = async discussion => {

    const shareData = {

      title:
        discussion.title,

      text:
        discussion.content,

      url:
        window.location.href

    };


    try {

      if (
        navigator.share
      ) {

        await navigator.share(
          shareData
        );

        return;

      }

      await navigator.clipboard.writeText(
        window.location.href
      );

      alert(
        "Discussion link copied."
      );

    } catch {
      // User cancelled sharing.
    }

  };


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <div className="engineeringDiscussionsPage">


      {/* ==================================================
          TOP NAVIGATION
      ================================================== */}

      <header className="discussionHeader">

        <div className="discussionHeaderInner">

          <button
            type="button"
            className="discussionBackButton"
            onClick={() =>
              navigate("/community")
            }
          >

            <ArrowLeft size={18} />

            Community

          </button>


          <div className="discussionHeaderTitle">

            <div className="discussionHeaderIcon">

              <MessageCircle
                size={22}
              />

            </div>


            <div>

              <strong>
                Engineering Discussions
              </strong>

              <span>
                PBODY Engineering Network
              </span>

            </div>

          </div>


          <button
            type="button"
            className="discussionNotification"
            title="Notifications"
          >

            <Bell size={19} />

            <span />

          </button>

        </div>

      </header>


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="discussionHero">

        <div className="discussionHeroInner">

          <div>

            <div className="discussionEyebrow">

              <Sparkles size={15} />

              PROFESSIONAL ENGINEERING NETWORK

            </div>


            <h1>
              Ask.
              <span> Discuss.</span>
              <br />
              Build Together.
            </h1>


            <p>
              A professional discussion room for PBODY
              students, engineers, managers, employees
              and employers.
            </p>

          </div>


          <div className="discussionStats">

            <div>

              <strong>
                {discussions.length}
              </strong>

              <span>
                Discussions
              </span>

            </div>


            <div>

              <strong>
                {discussions.reduce(
                  (
                    total,
                    item
                  ) =>
                    total +
                    (item.replies || 0),
                  0
                )}
              </strong>

              <span>
                Replies
              </span>

            </div>


            <div>

              <strong>
                {discussions.length + 24}
              </strong>

              <span>
                Members
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MAIN
      ================================================== */}

      <main className="discussionMain">


        {/* ==================================================
            TOOLBAR
        ================================================== */}

        <section className="discussionToolbar">

          <div className="discussionSearch">

            <Search size={18} />

            <input
              type="text"
              value={searchQuery}
              onChange={event =>
                setSearchQuery(
                  event.target.value
                )
              }
              placeholder="Search engineering discussions..."
            />

            {searchQuery && (

              <button
                type="button"
                onClick={() =>
                  setSearchQuery("")
                }
              >

                <X size={16} />

              </button>

            )}

          </div>


          <button
            type="button"
            className="askQuestionButton"
            onClick={() =>
              setShowComposer(
                previous => !previous
              )
            }
          >

            <Plus size={18} />

            Ask A Question

          </button>

        </section>


        {/* ==================================================
            CATEGORY NAV
        ================================================== */}

        <div className="discussionCategories">

          <div className="categoryScroller">

            {categories.map(
              category => (

                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory ===
                    category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                >

                  {category}

                </button>

              )
            )}

          </div>


          <button
            type="button"
            className={
              savedOnly
                ? "savedFilter active"
                : "savedFilter"
            }
            onClick={() =>
              setSavedOnly(
                previous => !previous
              )
            }
          >

            <Bookmark size={15} />

            Saved

          </button>

        </div>


        {/* ==================================================
            COMPOSER
        ================================================== */}

        {showComposer && (

          <section className="discussionComposer">

            <div className="composerHeader">

              <div className="profileAvatar">

                {currentUser.initials}

              </div>


              <div>

                <strong>
                  {currentUser.name}
                </strong>

                <span>
                  {currentUser.role}
                </span>

              </div>


              <button
                type="button"
                onClick={() =>
                  setShowComposer(false)
                }
              >

                <X size={18} />

              </button>

            </div>


            <input
              type="text"
              value={newTitle}
              onChange={event =>
                setNewTitle(
                  event.target.value
                )
              }
              placeholder="What would you like to discuss?"
              className="composerTitle"
            />


            <textarea
              value={newContent}
              onChange={event =>
                setNewContent(
                  event.target.value
                )
              }
              placeholder="Explain your question, idea, challenge or opportunity..."
              rows={5}
            />


            <div className="composerFooter">

              <div className="composerCategory">

                <Tag size={16} />

                <select
                  value={newCategory}
                  onChange={event =>
                    setNewCategory(
                      event.target.value
                    )
                  }
                >

                  {categories
                    .filter(
                      category =>
                        category !==
                        "All"
                    )
                    .map(
                      category => (

                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>

                      )
                    )}

                </select>

                <ChevronDown
                  size={15}
                />

              </div>


              <button
                type="button"
                className="publishButton"
                onClick={
                  createDiscussion
                }
                disabled={
                  !newTitle.trim() ||
                  !newContent.trim()
                }
              >

                <Send size={16} />

                Publish Discussion

              </button>

            </div>

          </section>

        )}


        {/* ==================================================
            CONTENT
        ================================================== */}

        <section className="discussionContent">


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="discussionSidebar">

            <div className="sidebarCard">

              <div className="sidebarCardIcon">

                <Users size={20} />

              </div>

              <h3>
                Community Standards
              </h3>

              <p>
                Help create a professional environment
                where everyone can learn and contribute.
              </p>


              <ul>

                <li>
                  <CheckCircle size={15} />
                  Respect every member
                </li>

                <li>
                  <CheckCircle size={15} />
                  Keep discussions useful
                </li>

                <li>
                  <CheckCircle size={15} />
                  Share knowledge freely
                </li>

                <li>
                  <CheckCircle size={15} />
                  No spam or harassment
                </li>

              </ul>

            </div>


            <div className="sidebarCard">

              <div className="sidebarCardIcon">

                <ShieldCheck size={20} />

              </div>

              <h3>
                Professional Network
              </h3>

              <p>
                Students, developers, managers,
                employees and employers all have
                a place here.
              </p>

            </div>

          </aside>


          {/* =================================================
              DISCUSSION FEED
          ================================================= */}

          <div className="discussionFeed">

            {filteredDiscussions.length === 0 ? (

              <div className="emptyDiscussions">

                <MessageCircle
                  size={42}
                />

                <h2>
                  No discussions found
                </h2>

                <p>
                  Try another search or start
                  the first discussion.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setShowComposer(true)
                  }
                >
                  Ask A Question
                </button>

              </div>

            ) : (

              filteredDiscussions.map(
                discussion => (

                  <article
                    className="discussionCard"
                    key={discussion.id}
                  >


                    {/* ======================================
                        PINNED
                    ======================================= */}

                    {discussion.pinned && (

                      <div className="pinnedLabel">

                        <Pin size={13} />

                        Pinned Discussion

                      </div>

                    )}


                    {/* ======================================
                        AUTHOR
                    ======================================= */}

                    <div className="discussionAuthor">

                      <div className="discussionAvatar">

                        {discussion.author.initials}

                      </div>


                      <div className="authorInfo">

                        <div>

                          <strong>
                            {discussion.author.name}
                          </strong>

                          {discussion.author.verified && (

                            <CheckCircle
                              size={14}
                              className="verifiedIcon"
                            />

                          )}

                        </div>


                        <span>

                          {discussion.author.role}

                          <span className="dot">
                            •
                          </span>

                          <Clock3 size={12} />

                          {discussion.time}

                        </span>

                      </div>


                      <button
                        type="button"
                        className="moreButton"
                      >

                        <MoreHorizontal
                          size={19}
                        />

                      </button>

                    </div>


                    {/* ======================================
                        CATEGORY
                    ======================================= */}

                    <div className="discussionCategory">

                      <Tag size={13} />

                      {discussion.category}

                    </div>


                    {/* ======================================
                        BODY
                    ======================================= */}

                    <h2>
                      {discussion.title}
                    </h2>


                    <p className="discussionText">
                      {discussion.content}
                    </p>


                    {/* ======================================
                        ACTIONS
                    ======================================= */}

                    <div className="discussionActions">

                      <button
                        type="button"
                        className={
                          discussion.liked
                            ? "liked"
                            : ""
                        }
                        onClick={() =>
                          toggleLike(
                            discussion.id
                          )
                        }
                      >

                        <ThumbsUp size={17} />

                        {discussion.likes || 0}

                      </button>


                      <button
                        type="button"
                        onClick={() => {

                          setReplyOpen(
                            previous =>
                              previous ===
                              discussion.id
                                ? null
                                : discussion.id
                          );

                        }}
                      >

                        <MessageCircle
                          size={17}
                        />

                        {discussion.replies || 0}

                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          shareDiscussion(
                            discussion
                          )
                        }
                      >

                        <Share2 size={17} />

                        Share

                      </button>


                      <button
                        type="button"
                        className={
                          discussion.bookmarked
                            ? "bookmarked"
                            : ""
                        }
                        onClick={() =>
                          toggleBookmark(
                            discussion.id
                          )
                        }
                      >

                        <Bookmark size={17} />

                      </button>

                    </div>


                    {/* ======================================
                        COMMENTS
                    ======================================= */}

                    {discussion.comments?.length > 0 && (

                      <div className="discussionComments">

                        {discussion.comments
                          .slice(-3)
                          .map(
                            comment => (

                              <div
                                className="comment"
                                key={comment.id}
                              >

                                <div className="commentAvatar">

                                  {
                                    comment.author
                                      ?.initials ||
                                    getInitials(
                                      comment.author
                                        ?.name
                                    )
                                  }

                                </div>


                                <div className="commentBody">

                                  <div className="commentMeta">

                                    <strong>
                                      {
                                        comment.author
                                          ?.name
                                      }
                                    </strong>

                                    <span>
                                      {
                                        comment.time
                                      }
                                    </span>

                                  </div>


                                  <p>
                                    {comment.text}
                                  </p>

                                </div>

                              </div>

                            )
                          )}

                      </div>

                    )}


                    {/* ======================================
                        REPLY BOX
                    ======================================= */}

                    {replyOpen ===
                      discussion.id && (

                      <div className="replyBox">

                        <div className="profileAvatar small">

                          {currentUser.initials}

                        </div>


                        <input
                          type="text"
                          value={replyText}
                          onChange={event =>
                            setReplyText(
                              event.target.value
                            )
                          }
                          onKeyDown={event => {

                            if (
                              event.key ===
                              "Enter"
                            ) {

                              addReply(
                                discussion.id
                              );

                            }

                          }}
                          placeholder={
                            "Reply as " +
                            currentUser.name +
                            "..."
                          }
                        />


                        <button
                          type="button"
                          onClick={() =>
                            addReply(
                              discussion.id
                            )
                          }
                          disabled={
                            !replyText.trim()
                          }
                        >

                          <Send size={17} />

                        </button>

                      </div>

                    )}

                  </article>

                )
              )

            )}

          </div>

        </section>

      </main>

    </div>

  );
}