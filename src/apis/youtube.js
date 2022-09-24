import axios from 'axios';

const KEY = 'AIzaSyA-90vfNvxl9Bh_n8Au2XOk0d21_VQeH-s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
