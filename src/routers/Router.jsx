import ClientRoot from "../pages/ClientRoot";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/productDetail/ProductDetail";


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
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "/product/:slug",
        element: <ProductDetail/>,
      },     
    ],
  },
  // {
  //   path: "*",
  //   element: <Error />,
  // }
];
