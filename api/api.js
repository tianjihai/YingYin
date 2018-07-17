const baseUrl = 'https://api.douban.com'
const tempUrl = 'http://192.168.1.105:3000/cinema'

export default {
  getHotMoiveList () {
    return fetch(`${baseUrl}/v2/movie/in_theaters`)
  },
  getBriefIntroduction (id) {
    return fetch(`${baseUrl}/v2/movie/subject/${id}`)
  },
  getComingList () {
    return fetch(`${baseUrl}/v2/movie/coming_soon`)
  },
  getCinemasList () {
    return fetch(tempUrl)
  }
}
