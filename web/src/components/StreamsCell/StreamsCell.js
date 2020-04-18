import { Link, routes } from '@redwoodjs/router'

import Streams from 'src/components/Streams'

export const QUERY = gql`
  query POSTS {
    streams {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No streams yet. '}
      <Link
        to={routes.newStream()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ streams }) => {
  return <Streams streams={streams} />
}
