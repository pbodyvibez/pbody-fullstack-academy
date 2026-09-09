// ===============================================
// PBODY FULLSTACK ACADEMY
// AI STATE ACTIONS
// ===============================================
//
// IMPORTANT:
// API communication is handled by:
// frontend/src/services/aiService.js
//
// This file is responsible only for dispatching
// AI state changes. It must not contain fake AI
// responses or make API requests.
// ===============================================

import { AI_TYPES } from "./AITypes";


// ===============================================
// STUDENT MESSAGE
// ===============================================

export const sendAIMessage = (dispatch, message) => {

  if (!dispatch || !message) {
    return;
  }

  dispatch({
    type: AI_TYPES.SEND_MESSAGE,

    payload: {
      id: `${Date.now()}-student`,
      sender: "student",
      role: "user",
      text: String(message)
    }
  });

};


// ===============================================
// AI MESSAGE
// ===============================================

export const receiveAIMessage = (dispatch, message) => {

  if (!dispatch || !message) {
    return;
  }

  dispatch({
    type: AI_TYPES.RECEIVE_MESSAGE,

    payload: {
      id: `${Date.now()}-ai`,
      sender: "ai",
      role: "ai",
      text: String(message)
    }
  });

};


// ===============================================
// CLEAR CHAT
// ===============================================

export const clearAIChat = (dispatch) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.CLEAR_CHAT
  });

};


// ===============================================
// DELETE MESSAGE
// ===============================================

export const deleteAIMessage = (dispatch, messageId) => {

  if (!dispatch || !messageId) {
    return;
  }

  dispatch({
    type: AI_TYPES.DELETE_MESSAGE,
    payload: messageId
  });

};


// ===============================================
// SET AI PAGE
// ===============================================

export const setAIPage = (dispatch, page) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_PAGE,
    payload: page
  });

};


// ===============================================
// SET AI COURSE
// ===============================================

export const setAICourse = (dispatch, course) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_COURSE,
    payload: course
  });

};


// ===============================================
// SET AI LESSON
// ===============================================

export const setAILesson = (dispatch, lesson) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_LESSON,
    payload: lesson
  });

};


// ===============================================
// SET AI USER
// ===============================================

export const setAIUser = (dispatch, user) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_USER,
    payload: user
  });

};


// ===============================================
// SET SUGGESTIONS
// ===============================================

export const setAISuggestions = (
  dispatch,
  suggestions
) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_SUGGESTIONS,
    payload: Array.isArray(suggestions)
      ? suggestions
      : []
  });

};


// ===============================================
// UPDATE AI PROGRESS
// ===============================================

export const updateAIProgress = (
  dispatch,
  progress
) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.UPDATE_PROGRESS,
    payload: progress || {}
  });

};


// ===============================================
// LOADING STATE
// ===============================================

export const setAILoading = (
  dispatch,
  loading
) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_LOADING,
    payload: Boolean(loading)
  });

};


// ===============================================
// TYPING STATE
// ===============================================

export const setAITyping = (
  dispatch,
  typing
) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.SET_TYPING,
    payload: Boolean(typing)
  });

};


// ===============================================
// CHAT OPEN
// ===============================================

export const openAIChat = (dispatch) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.OPEN_CHAT
  });

};


// ===============================================
// CHAT CLOSE
// ===============================================

export const closeAIChat = (dispatch) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.CLOSE_CHAT
  });

};


// ===============================================
// CHAT TOGGLE
// ===============================================

export const toggleAIChat = (dispatch) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.TOGGLE_CHAT
  });

};


// ===============================================
// INITIALIZE AI
// ===============================================

export const initializeAI = (dispatch) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.INITIALIZE_AI
  });

};


// ===============================================
// RESET AI
// ===============================================

export const resetAI = (dispatch) => {

  if (!dispatch) {
    return;
  }

  dispatch({
    type: AI_TYPES.RESET_AI
  });

};