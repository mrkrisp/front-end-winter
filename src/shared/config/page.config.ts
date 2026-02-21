class PageConfig {
  readonly HOME = '/'

  private readonly AUTH = '/auth'
  readonly REGISTER = this.AUTH + '/register'
  readonly LOGIN = this.AUTH + '/login'

  readonly DASHBOARD = '/dashboard'
  // dashboard
  readonly MEAL_PLANS = this.DASHBOARD + '/meal-plans'
  readonly NUTRITION = this.DASHBOARD + '/nutrition'
  readonly ANALYTICS = this.DASHBOARD + '/analytics'
  readonly ORDER_GROCERIES = this.DASHBOARD + '/order-groceries'
  readonly RECIPES = this.DASHBOARD + '/recipes'
  readonly FORUM = this.DASHBOARD + '/forum'
}

export const PAGES = new PageConfig()
