import ClientRoot from "../pages/ClientRoot";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";


export const ROUTES = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   path: "our-company",
      //   element: <OurCompany />,
      // },
      // {
      //   path: "point-of-sale",
      //   element: <PointOfSale />,
      // },
      // {
      //   path: "product",
      //   element: <Product />,
      // },
      // {
      //   path: "/product/:slug",
      //   element: <DetailPage />,
      // },
      // {
      //   path: "photos",
      //   element: <Photos />,
      // },
      // {
      //   path: "videos",
      //   element: <Videos />,
      // },
      // {
      //   path: "search",
      //   element: <SearchResult />,
      // },
     
    ],
  },
  // {
  //   path: "*",
  //   element: <Error />,
  // }
];
