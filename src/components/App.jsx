import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import NotFound from "pages/NotFound/NotFound";

const Home = lazy(() => import("../pages/Home/Home"));
const FavoritesPage = lazy(() => import("../pages/Favorites/Favorites"));
const CatalogPage = lazy(() => import("../pages/Catalog/Catalog"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
