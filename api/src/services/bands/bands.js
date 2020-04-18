import { db } from 'src/lib/db'

export const bands = () => {
  return db.band.findMany()
}

export const band = ({ id }) => {
  return db.band.findOne({
    where: { id },
  })
}

export const createBand = ({ input }) => {
  return db.band.create({
    data: input,
  })
}

export const updateBand = ({ id, input }) => {
  return db.band.update({
    data: input,
    where: { id },
  })
}

export const deleteBand = ({ id }) => {
  return db.band.delete({
    where: { id },
  })
}

export const Band = {
  user: (_obj, { root }) => db.band.findOne({ where: { id: root.id } }).user(),
}
