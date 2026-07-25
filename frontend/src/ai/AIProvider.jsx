// ===============================================
// PBODY FULLSTACK ACADEMY
// AI PROVIDER
// ===============================================

import { useReducer } from "react";

import AIContext, {
  initialAIState
} from "./AIContext";

import AIReducer from "./AIReducer";

import { AI_TYPES } from "./AITypes";


// ===============================================
// PROVIDER
// ===============================================

export default function AIProvider({ children }) {


  const [state, dispatch] = useReducer(
    AIReducer,
    initialAIState
  );



  // ===============================================
  // AI ACTIONS
  // ===============================================


  const initializeAI = () => {

    dispatch({

      type: AI_TYPES.INITIALIZE_AI

    });

  };



  const openChat = () => {

    dispatch({

      type: AI_TYPES.OPEN_CHAT

    });

  };



  const closeChat = () => {

    dispatch({

      type: AI_TYPES.CLOSE_CHAT

    });

  };



  const toggleChat = () => {

    dispatch({

      type: AI_TYPES.TOGGLE_CHAT

    });

  };



  const setLoading = (value) => {

    dispatch({

      type: AI_TYPES.SET_LOADING,

      payload:value

    });

  };



  const setTyping = (value) => {

    dispatch({

      type: AI_TYPES.SET_TYPING,

      payload:value

    });

  };



  const sendMessage = (message) => {


    dispatch({

      type: AI_TYPES.SEND_MESSAGE,

      payload:message

    });


  };



  const receiveMessage = (message) => {


    dispatch({

      type: AI_TYPES.RECEIVE_MESSAGE,

      payload:message

    });


  };



  const clearChat = () => {


    dispatch({

      type: AI_TYPES.CLEAR_CHAT

    });


  };



  const deleteMessage = (id) => {


    dispatch({

      type: AI_TYPES.DELETE_MESSAGE,

      payload:id

    });


  };



  const setPage = (page) => {


    dispatch({

      type: AI_TYPES.SET_PAGE,

      payload:page

    });


  };



  const setCourse = (course) => {


    dispatch({

      type: AI_TYPES.SET_COURSE,

      payload:course

    });


  };



  const setLesson = (lesson) => {


    dispatch({

      type: AI_TYPES.SET_LESSON,

      payload:lesson

    });


  };



  const setUser = (user) => {


    dispatch({

      type: AI_TYPES.SET_USER,

      payload:user

    });


  };



  const setSuggestions = (suggestions) => {


    dispatch({

      type: AI_TYPES.SET_SUGGESTIONS,

      payload:suggestions

    });


  };



  const updateProgress = (progress) => {


    dispatch({

      type: AI_TYPES.UPDATE_PROGRESS,

      payload:progress

    });


  };



  const resetAI = () => {


    dispatch({

      type: AI_TYPES.RESET_AI

    });


  };




  const value = {


    // STATE

    ...state,


    // ACTIONS

    initializeAI,

    openChat,

    closeChat,

    toggleChat,

    setLoading,

    setTyping,

    sendMessage,

    receiveMessage,

    clearChat,

    deleteMessage,

    setPage,

    setCourse,

    setLesson,

    setUser,

    setSuggestions,

    updateProgress,

    resetAI


  };



  return (

    <AIContext.Provider value={value}>

      {children}

    </AIContext.Provider>

  );


}