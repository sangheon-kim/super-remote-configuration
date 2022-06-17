namespace NodeJS {
  /**
   *
   * NODE_ENV 환경
   * PORT 포트번호
   * API_VERSION Api Version
   * MONGODB_DB_NAME : MongoDB DB명
   * MONGODB_PASSWORD - mongodb 비밀번호
   * MONGODB_USERID - mongodb ID
   *
   */
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'test'
    PORT: number
    API_VERSION: string
    MONGODB_DB_NAME: string
    MONGODB_PASSWORD: string
    MONGODB_USERID: string
  }
}
