import axios from "axios";

export function getPosts() {
  return axios.get("/api/posts");
}

export function getExercises() {
  return axios.get("/api/exercises");
}

export function getOpenTimes() {
  return axios.get("/api/opens");
}
