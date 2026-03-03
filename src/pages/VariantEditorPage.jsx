import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { getVariant } from "../registry/componentRegistry";
import generateComponentCode from "../components/editor/generateComponentCode";
import EditorTopBar from "../components/editor/EditorTopBar";
import EditorCanvas from "../components/editor/EditorCanvas";
import EditorRightPanel from "../components/editor/EditorRightPanel";

// ── React Flow global CSS reset ────────────────────────────────

const GlobalStyle = createGlobalStyle`
    .react-flow__attribution { display: none !important; }
`;

// ── Layout shell ───────────────────────────────────────────────

const Root = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 100vw;
   overflow: hidden;
   background: #f8fafc;
   font-family: var(--inter-font);
`;

const Body = styled.div`
   display: flex;
   flex: 1;
   overflow: hidden;
`;

// ── Not Found ──────────────────────────────────────────────────

const NotFound = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 14px;
   font-family: var(--inter-font);

   h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #111827;
   }
   p {
      color: #6b7280;
      font-size: 0.95rem;
   }
`;

const GoBackBtn = styled.button`
   padding: 10px 24px;
   background: #2563eb;
   color: white;
   border: none;
   border-radius: 8px;
   font-size: 0.9rem;
   font-weight: 600;
   font-family: var(--inter-font);
   cursor: pointer;
   transition: background 0.15s;
   &:hover {
      background: #1d4ed8;
   }
`;

// ── Page ───────────────────────────────────────────────────────

const VariantEditorPage = () => {
   const { section, variantId } = useParams();
   const navigate = useNavigate();

   const variantData = getVariant(section, variantId);

   // ── State ──────────────────────────────────────────────────
   const [config, setConfig] = useState(() => ({
      ...(variantData?.defaultConfig ?? {}),
   }));
   const [viewport, setViewport] = useState("desktop");
   const [openAccordion, setOpenAccordion] = useState(null);
   const [copied, setCopied] = useState(false);
   const [flowZoom, setFlowZoom] = useState(100);

   // ── Handlers ───────────────────────────────────────────────

   const handleUpdate = useCallback((key, value) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
   }, []);

   const handleReset = useCallback(() => {
      setConfig({ ...variantData.defaultConfig });
   }, [variantData]);

   const handleCopy = useCallback(() => {
      // Generate actual HTML + CSS + JS with current config baked in
      const code = generateComponentCode(variantId, config);
      navigator.clipboard.writeText(code).then(() => {
         setCopied(true);
         setTimeout(() => setCopied(false), 3000);
      });
   }, [variantId, config]);

   const handleToggleAccordion = useCallback((id) => {
      setOpenAccordion((prev) => (prev === id ? null : id));
   }, []);

   // ── Not Found ──────────────────────────────────────────────

   if (!variantData) {
      return (
         <Root>
            <GlobalStyle />
            <NotFound>
               <h2>Component not found</h2>
               <p>
                  <strong>
                     "{section}/{variantId}"
                  </strong>{" "}
                  does not exist.
               </p>
               <GoBackBtn onClick={() => navigate("/components")}>
                  ← Back to Components
               </GoBackBtn>
            </NotFound>
         </Root>
      );
   }

   // ── Render ─────────────────────────────────────────────────

   return (
      <Root>
         <GlobalStyle />

         {/* Top Bar */}
         <EditorTopBar
            section={section}
            variantName={variantData.name}
            viewport={viewport}
            onViewportChange={setViewport}
            onBack={() => navigate(`/components/${section}`)}
            onNavigateToSection={() => navigate(`/components/${section}`)}
            onNavigateToAll={() => navigate("/components")}
            onCopy={handleCopy}
            onReset={handleReset}
            copied={copied}
            flowZoom={flowZoom}
         />

         {/* Body */}
         <Body>
            {/* Canvas */}
            <EditorCanvas
               variantData={variantData}
               config={config}
               viewport={viewport}
               onZoomChange={setFlowZoom}
            />

            {/* Right Panel */}
            <EditorRightPanel
               variantData={variantData}
               section={section}
               config={config}
               onUpdate={handleUpdate}
               onCopy={handleCopy}
               onReset={handleReset}
               copied={copied}
               openAccordion={openAccordion}
               onToggleAccordion={handleToggleAccordion}
            />
         </Body>
      </Root>
   );
};

export default VariantEditorPage;
