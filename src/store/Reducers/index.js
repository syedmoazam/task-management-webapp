let INITIAL_STAGE = {
  authStatus: false,
  graphData: null,
};

const reducerFunction = (state = INITIAL_STAGE, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "NO_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        tasks: action.payload,
      };
    case "DB_FAILED":
      return {
        ...state,
        tasks: action.payload,
      };
    case "AUTH_USER":
      return {
        ...state,
        user: action.payload,
        authStatus: true,
      };
    case "NO_USER":
      return {
        authStatus: false,
      };
    case "TIMER":
      return {
        ...state,
        // progressUsers: action.payload
        timerState: action.payload,
      };
    case "GRAPH":
      return {
        ...state,
        graphData: action.payload,
      };
    case "WEATHER": {
      return {
        ...state,
        weather: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducerFunction;
