import Stream from 'src/components/Stream'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    stream: stream(id: $id) {
      id
      createdAt
      title
      body
      when
      link
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Stream not found</div>

export const Success = ({ stream }) => {
  return <Stream stream={stream} />
}
