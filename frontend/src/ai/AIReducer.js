// ===============================================
// PBODY FULLSTACK ACADEMY
// AI REDUCER
// ===============================================

import { AI_TYPES } from "./AITypes";

const AIReducer = (state, action) => {

  switch (action.type) {

    case AI_TYPES.INITIALIZE_AI:
      return {
        ...state,
        initialized: true,
      };

    case AI_TYPES.OPEN_CHAT:
      return {
        ...state,
        isOpen: true,
      };

    case AI_TYPES.CLOSE_CHAT:
      return {
        ...state,
        isOpen: false,
      };

    case AI_TYPES.TOGGLE_CHAT:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case AI_TYPES.SET_LOADING:

      if (state.loading === action.payload) {
        return state;
      }

      return {
        ...state,
        loading: action.payload,
      };

    case AI_TYPES.SET_TYPING:

      if (state.typing === action.payload) {
        return state;
      }

      return {
        ...state,
        typing: action.payload,
      };

    case AI_TYPES.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case AI_TYPES.RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        typing: false,
      };

    case AI_TYPES.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };

    case AI_TYPES.CLEAR_CHAT:
      return {
        ...state,
        messages: [],
      };

    case AI_TYPES.SET_PAGE:

      if (state.currentPage === action.payload) {
        return state;
      }

      return {
        ...state,
        currentPage: action.payload,
      };

    case AI_TYPES.SET_COURSE:

      if (state.currentCourse === action.payload) {
        return state;
      }

      return {
        ...state,
        currentCourse: action.payload,
      };

    case AI_TYPES.SET_LESSON:

      if (state.currentLesson === action.payload) {
        return state;
      }

      return {
        ...state,
        currentLesson: action.payload,
      };

    case AI_TYPES.SET_USER:

      if (state.currentUser === action.payload) {
        return state;
      }

      return {
        ...state,
        currentUser: action.payload,
      };

    case AI_TYPES.SET_SUGGESTIONS:

      if (state.suggestions === action.payload) {
        return state;
      }

      return {
        ...state,
        suggestions: action.payload,
      };

    case AI_TYPES.UPDATE_PROGRESS:
      return {
        ...state,
        progress: {
          ...state.progress,
          ...action.payload,
        },
      };

    case AI_TYPES.RESET_AI:
      return {
        ...state,
        isOpen: false,
        loading: false,
        typing: false,
        messages: [],
        suggestions: [],
      };

    default:
      return state;

  }

};

export default AIReducer;