import Band from 'src/components/Band'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    band: band(id: $id) {
      id
      createdAt
      active
      bandName
      homeTown
      about
      genre
      website
      bandcamp
      instagram
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Band not found</div>

export const Success = ({ band }) => {
  return <Band band={band} />
}
