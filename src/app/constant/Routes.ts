
import { environment } from "src/environments/environment";
const BASEURL = environment.api;

export const auth = {
  login: BASEURL + 'login',
  create: BASEURL + 'create',
  register: BASEURL + 'register',
  verifyOtp: BASEURL + 'verifyOtp',
  logout: BASEURL + 'logout',



}
export const collector = {
  collectorUpdate: BASEURL + 'collectorUpdate',



}


export const HOME = {
  //  total_all_users_manager: BASEURL + 'getNumberOfUsers',
   total_users_customers_manager: BASEURL + 'getNumberOfUsers',
   total_users_collectors_manager: BASEURL + 'getNumberOfCollectors',
   total_users_markets_manager: BASEURL + 'getNumberOfMarkets',
   list_users_customers: BASEURL + 'showAllUsersDetailedInfo',
   list_users_collectors: BASEURL + 'showAllCollectorsDetailedInfo',
   list_users_markets: BASEURL + 'showAllMarketsDetailedInfo',
  }

