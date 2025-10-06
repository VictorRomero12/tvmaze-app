import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.7/+esm";

const http = axios.create({
  baseURL: "https://api.tvmaze.com",
  timeout: 12000
});

export const searchShows = (q) => http.get(`/search/shows`, { params: { q }});
export const showById   = (id, embeds=[]) => {
  const params = new URLSearchParams();
  embeds.forEach(e => params.append("embed[]", e));
  const qs = params.toString();
  return http.get(`/shows/${id}${qs ? `?${qs}` : ""}`);
};
export const showEpisodes = (id) => http.get(`/shows/${id}/episodes`);
export const showCast     = (id) => http.get(`/shows/${id}/cast`);
export const peopleSearch = (q) => http.get(`/search/people`, { params: { q }});
export const personById   = (id) => http.get(`/people/${id}`);
export const personCredits= (id) => http.get(`/people/${id}/castcredits`, { params: { embed: "show" }});
export const scheduleBy   = (country, date) => http.get(`/schedule`, { params: { country, date }});
export const webSchedule  = (date) => http.get(`/schedule/web`, { params: { date }});
