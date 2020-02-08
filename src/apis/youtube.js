import axios from 'axios';

const KEY = 'AIzaSyBJQwVRua2_AFjOpzEOeXBvNZRichsG8v8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});