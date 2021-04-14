import axios from 'axios';

const KEY = 'AIzaSyAvTeaXPDMc92XtEIr5_koTb9TsgKHlo1o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
