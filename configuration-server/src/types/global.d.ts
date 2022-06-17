namespace NodeJS {
  /**
   * PORT 포트번호
   */
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'test'
    PORT: number
    API_VERSION: string
  }
}
