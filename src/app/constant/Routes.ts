
import { environment } from "src/environments/environment";
const BASEURL = environment.api;

export const auth = {
  login: BASEURL + 'login', //done
  register: BASEURL + 'register', //done
  verifyOtp: BASEURL + 'verifyOtp', //done
  logout: BASEURL + 'logout', //done



}
export const collector = {
  updateCollectorStatus: BASEURL + 'updateCollectorStatus', //done
  getCollectorStatus: BASEURL + 'getCollectorStatus/', //done
  viewOrders: BASEURL + 'viewOrders',
  acceptOrder: BASEURL + 'acceptOrder',
  updateOrderStatus: BASEURL + 'updateOrderStatus'
}

export const category = {
  categories_index: BASEURL + 'categories/index' //done
}

export const customer = {
  viewMarkets: BASEURL + 'viewMarkets', //done
  addOrder: BASEURL + 'addOrder', //done
  filterMarkets: BASEURL + 'filter.markets'
}

export const product = {
  viewProducts: BASEURL + 'products/view/', //done
  productShow: BASEURL + 'products/show/' //done
}

export const user = {
  resetPassword: BASEURL + 'resetPassword', //done
  updatePassword: BASEURL + 'resetPassword.updatePassword' //done
}

export const cardinfo = {
  cardCreate: BASEURL + 'card_infos/create',
  cardShow: BASEURL + 'card_infos/show/',
  cardUpdate: BASEURL + 'card_infos/update/',
  cardDelete: BASEURL + 'card_infos/delete/',

}

export const HOME = {
  //  total_all_users_manager: BASEURL + 'getNumberOfUsers',
  total_users_customers_manager: BASEURL + 'getNumberOfUsers',
  total_users_collectors_manager: BASEURL + 'getNumberOfCollectors',
  total_users_markets_manager: BASEURL + 'getNumberOfMarkets',
  list_users_customers: BASEURL + '/showBasicUsersInfo',
  list_users_collectors: BASEURL + 'showAllCollectorsDetailedInfo',
  list_users_markets: BASEURL + 'showAllMarketsDetailedInfo',
}

