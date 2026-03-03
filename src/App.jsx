import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentsLayout from "./components/ComponentsLayout/ComponentsLayout";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentCategoryPage from "./pages/ComponentCategoryPage";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Components — shared sidebar layout */}
            <Route path="/components" element={<ComponentsLayout />}>
               {/* /components → All Components */}
               <Route index element={<ComponentsPage />} />

               {/* /components/headers → Headers category */}
               {/* /components/hero   → Hero category     */}
               <Route path=":section" element={<ComponentCategoryPage />} />

               {/* /components/headers/header-v2 → Individual variant */}
               {/* <Route
                        path=":section/:variantId"
                        element={<VariantPage />}
                    /> */}
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;
