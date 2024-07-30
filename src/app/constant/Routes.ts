
import { environment } from "src/environments/environment";
const BASEURL = environment.api;

export const auth = {
  login: BASEURL + 'login',
  create: BASEURL + 'create',
  register: BASEURL + 'register',
  verifyOtp: BASEURL + 'verifyOtp',
}

export const HOME = {
 total_users_customers_manager: BASEURL + 'getNumberOfUsers',
 list_users_customers: BASEURL + 'showAllUsersDetailedInfo',
 list_users_collectors: BASEURL + 'showAllCollectorsDetailedInfo',
}


