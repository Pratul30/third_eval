export const BACKEND_URL = "http://localhost:8000/api/"

export const GET_ALL_EVENTS = {
    url: "events",
    method: "get",
  };

export const UPDATE_EVENT = (recordId) => ({
    url: `events/${recordId}`,
    method: "patch",
});