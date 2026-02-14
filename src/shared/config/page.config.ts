class PageConfig {
  readonly HOME = '/'

  private readonly AUTH = '/auth'
  readonly REGISTER = this.AUTH + '/register'
  readonly LOGIN = this.AUTH + '/login'
}

export const PAGES = new PageConfig()
