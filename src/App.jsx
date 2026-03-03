import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentsLayout from "./components/ComponentsLayout/ComponentsLayout";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentCategoryPage from "./pages/ComponentCategoryPage";
import VariantEditorPage from "./pages/VariantEditorPage";

const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />

         <Route path="/components" element={<ComponentsLayout />}>
            <Route index element={<ComponentsPage />} />
            <Route path=":section" element={<ComponentCategoryPage />} />
         </Route>

         {/* Editor — full screen, no sidebar */}
         <Route
            path="/components/:section/:variantId"
            element={<VariantEditorPage />}
         />
      </Routes>
   </BrowserRouter>
);

export default App;
