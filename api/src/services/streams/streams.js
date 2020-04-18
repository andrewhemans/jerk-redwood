import { db } from 'src/lib/db'

export const streams = () => {
  return db.stream.findMany()
}

export const stream = ({ id }) => {
  return db.stream.findOne({
    where: { id },
  })
}

export const createStream = ({ input }) => {
  return db.stream.create({
    data: input,
  })
}

export const updateStream = ({ id, input }) => {
  return db.stream.update({
    data: input,
    where: { id },
  })
}

export const deleteStream = ({ id }) => {
  return db.stream.delete({
    where: { id },
  })
}

export const Stream = {
  user: (_obj, { root }) => db.stream.findOne({ where: { id: root.id } }).user(),
}
