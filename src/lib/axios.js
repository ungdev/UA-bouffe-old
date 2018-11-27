import axios from 'axios'
import { config } from '../../config/config'

export default axios.create({
  baseURL: `http://${config.api}`
})