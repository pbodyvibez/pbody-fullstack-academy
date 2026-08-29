// ===============================================
// PBODY FULLSTACK ACADEMY
// AI PROVIDER
// ===============================================

import {
  useCallback,
  useMemo,
  useReducer
} from "react";

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

  const initializeAI = useCallback(() => {

    dispatch({
      type: AI_TYPES.INITIALIZE_AI
    });

  }, []);


  const openChat = useCallback(() => {

    dispatch({
      type: AI_TYPES.OPEN_CHAT
    });

  }, []);


  const closeChat = useCallback(() => {

    dispatch({
      type: AI_TYPES.CLOSE_CHAT
    });

  }, []);


  const toggleChat = useCallback(() => {

    dispatch({
      type: AI_TYPES.TOGGLE_CHAT
    });

  }, []);


  const setLoading = useCallback((value) => {

    dispatch({
      type: AI_TYPES.SET_LOADING,
      payload: value
    });

  }, []);


  const setTyping = useCallback((value) => {

    dispatch({
      type: AI_TYPES.SET_TYPING,
      payload: value
    });

  }, []);


  const sendMessage = useCallback((message) => {

    dispatch({
      type: AI_TYPES.SEND_MESSAGE,
      payload: message
    });

  }, []);


  const receiveMessage = useCallback((message) => {

    dispatch({
      type: AI_TYPES.RECEIVE_MESSAGE,
      payload: message
    });

  }, []);


  const clearChat = useCallback(() => {

    dispatch({
      type: AI_TYPES.CLEAR_CHAT
    });

  }, []);


  const deleteMessage = useCallback((id) => {

    dispatch({
      type: AI_TYPES.DELETE_MESSAGE,
      payload: id
    });

  }, []);


  const setPage = useCallback((page) => {

    dispatch({
      type: AI_TYPES.SET_PAGE,
      payload: page
    });

  }, []);


  const setCourse = useCallback((course) => {

    dispatch({
      type: AI_TYPES.SET_COURSE,
      payload: course
    });

  }, []);


  const setLesson = useCallback((lesson) => {

    dispatch({
      type: AI_TYPES.SET_LESSON,
      payload: lesson
    });

  }, []);


  const setUser = useCallback((user) => {

    dispatch({
      type: AI_TYPES.SET_USER,
      payload: user
    });

  }, []);


  const setSuggestions = useCallback((suggestions) => {

    dispatch({
      type: AI_TYPES.SET_SUGGESTIONS,
      payload: suggestions
    });

  }, []);


  const updateProgress = useCallback((progress) => {

    dispatch({
      type: AI_TYPES.UPDATE_PROGRESS,
      payload: progress
    });

  }, []);


  const resetAI = useCallback(() => {

    dispatch({
      type: AI_TYPES.RESET_AI
    });

  }, []);


  // ===============================================
  // CONTEXT VALUE
  // ===============================================

  const value = useMemo(() => ({
    
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

  }), [
    state,

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
  ]);


  // ===============================================
  // PROVIDER
  // ===============================================

  return (

    <AIContext.Provider value={value}>

      {children}

    </AIContext.Provider>

  );

}