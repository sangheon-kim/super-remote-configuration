import mongoose from 'mongoose'

class DB {
  init() {
    this.connectMongodb()
  }

  private connectMongodb() {
    const { MONGODB_DB_NAME, MONGODB_PASSWORD, MONGODB_USERID } = process.env

    try {
      mongoose.connect(
        process.env.NODE_ENV === 'test'
          ? `mongodb+srv://test:1234@cluster0.gqmop.mongodb.net/test2?retryWrites=true&w=majority`
          : `mongodb+srv://${MONGODB_USERID}:${MONGODB_PASSWORD}@cluster0.gqmop.mongodb.net/${MONGODB_DB_NAME}?retryWrites=true&w=majority`
      )

      mongoose.set('debug', process.env.NODE_ENV === 'development')
    } catch (error) {
      console.error(error)
    }
  }
}

export default DB
