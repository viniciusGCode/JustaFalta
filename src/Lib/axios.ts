import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://political-api.vercel.app'
})