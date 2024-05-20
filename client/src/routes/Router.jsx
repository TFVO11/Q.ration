import Curation from "../pages/common/curation/Curation";
import Subscribe from "../pages/common/Subscribe";
import MyCuration from "../pages/common/MyCuration";
import Management from "../pages/common/Management";

import { page } from "../object/page";

export const ROUTES = {
  CURATION: {
    path: page.main.path,
    link: page.main.link,
    element: <Curation />,
  },

  SUBSCRIBE: {
    path: page.sub.path,
    link: page.sub.link,
    element: <Subscribe />,
  },

  MYCURATION: {
    path: page.myQ.path,
    link: page.myQ.link,
    element: <MyCuration />,
  },

  MANAGEMENT: {
    path: page.management.path,
    link: page.management.link,
    element: <Management />,
  },
};


export const ROUTES_ARR = Object.values(ROUTES);