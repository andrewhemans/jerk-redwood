import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteStreamMutation($id: Int!) {
    deleteStream(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const StreamsList = ({ streams }) => {
  const [deleteStream] = useMutation(DELETE_POST_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete stream ' + id + '?')) {
      deleteStream({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">title</th>
            <th className="font-semibold text-left p-3">body</th>
            <th className="font-semibold text-left p-3">when</th>
            <th className="font-semibold text-left p-3">link</th>
            <th className="font-semibold text-left p-3">authorId</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {streams.map((stream) => (
            <tr
              key={stream.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(stream.id)}</td>
              <td className="p-3">{timeTag(stream.createdAt)}</td>
              <td className="p-3">{truncate(stream.title)}</td>
              <td className="p-3">{truncate(stream.body)}</td>
              <td className="p-3">{timeTag(stream.when)}</td>
              <td className="p-3">{truncate(stream.link)}</td>
              <td className="p-3">{truncate(stream.authorId)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.stream({ id: stream.id })}
                        title={'Show stream ' + stream.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editStream({ id: stream.id })}
                        title={'Edit stream ' + stream.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete stream ' + stream.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(stream.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StreamsList
