import { DashBoard, Dashboard2 } from "../Module";

export const ROUTES = [
    {
      id: 1,
      path: '/dashboard',
      name: 'DashBoard',
    //   icon: icons.schedule,
      component: <DashBoard />,
    },{
        id: 2,
        path: '/gdp-countries',
        name: 'GDP Countries',
      //   icon: icons.schedule,
        component: <Dashboard2 />,
      }]