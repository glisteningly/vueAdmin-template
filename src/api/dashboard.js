import fetch from '@/utils/fetchGql'

export function getMyInfo() {
  return fetch({
    // baseURL: 'https://1jzxrj179.lp.gql.zone/graphql',
    method: 'post',
    // data: {
    //   query: `query { author (id: 2) { firstName, posts { title, votes} } }`
    // }
    data: {
      query: `query { userGroup{findGroupsByUserId(id:2){name}}}`,
      arguments: {}
    }
  })
}
