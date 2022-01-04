import Dashboard from "../Containers/Dashboard";
import AdminUsers from "../Containers/Delivery/AdminUsers/admin-users";
import CommonCustomers from "../Containers/Delivery/CommonCustomers/common-customers";
import CommonDrivers from "../Containers/Delivery/CommonDrivers/common-drivers";
import CommonPlaces from "../Containers/Delivery/CommonPlaces/common-places";
import CommonStandardCodes from "../Containers/Delivery/CommonStandardCodes/common-standard-codes";
import ImportOrders from "../Containers/Delivery/ImportOrders/import-orders";
import Orders from "../Containers/Delivery/Orders/orders";
import Routes from "../Containers/Delivery/Routes/routes";
import { IRoute } from "../models";
import { RoutesRedirect } from "../utils/routes";

const routes: IRoute[] = [
  {
    path: RoutesRedirect.Dashboard,
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: RoutesRedirect.DeliveryOrders,
    name: "Orders",
    component: Orders,
    exact: false,
  },
  {
    path: RoutesRedirect.DeliveryImportOrders,
    name: "Import Orders",
    component: ImportOrders,
    exact: false,
  },
  {
    path: RoutesRedirect.DeliveryRoutes,
    name: "Routes",
    component: Routes,
    exact: false,
  },
  {
    path: RoutesRedirect.CommonCustomers,
    name: "Common Customers",
    component: CommonCustomers,
    exact: false,
  },
  {
    path: RoutesRedirect.CommonPlaces,
    name: "Common Places",
    component: CommonPlaces,
    exact: false,
  },
  {
    path: RoutesRedirect.CommonStandardCodes,
    name: "Common Standard Codes",
    component: CommonStandardCodes,
    exact: false,
  },
  {
    path: RoutesRedirect.CommonDrivers,
    name: "Common Drivers",
    component: CommonDrivers,
    exact: false,
  },
  {
    path: RoutesRedirect.AdminUsers,
    name: "Admin Users",
    component: AdminUsers,
    exact: false,
  },
];
export default routes;
