import axios from "axios";

export function getPosts() {
  return axios.get("/api/posts");
}

export function getExercises() {
  return axios.get("/api/exercises");
}
