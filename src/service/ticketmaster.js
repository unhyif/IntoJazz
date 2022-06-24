import axios from 'axios';

export default class ConcertService {
  constructor() {
    this.key = process.env.REACT_APP_TICKETMASTER_API_KEY;
  }

  search(queryStr) {
    return axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?size=1&genreId=KnvZfZ7vAvE${queryStr}&apikey=${this.key}`
      )
      .then(res => res.data._embedded.events);
  }
}
