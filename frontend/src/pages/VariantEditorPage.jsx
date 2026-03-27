import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getVariant } from "../registry/componentRegistry";
import generateComponentCode from "../components/editor/generateComponentCode";
import EditorTopBar from "../components/editor/EditorTopBar";
import EditorCanvas from "../components/editor/EditorCanvas";
import EditorRightPanel from "../components/editor/EditorRightPanel";
import EmailGateModal from "../components/editor/EmailGateModal";
import { copyTextToClipboard } from "../lib/clipboard";
import {
   checkCopyAccessStatus,
   submitEmailForCopyAccess,
} from "../lib/gateApi";

// ── Tailwind Classes ───────────────────────────────────────────

const root =
   "flex flex-col h-screen w-full overflow-hidden bg-[#f8fafc] font-[var(--inter-font)]";
const body = "flex flex-1 overflow-hidden flex-col md:flex-row";

// Not found
const notFound =
   "flex-1 flex flex-col items-center justify-center gap-[14px] font-[var(--inter-font)]";
const notFoundTitle = "text-[1.5rem] font-bold text-[#111827]";
const notFoundDesc = "text-[#6b7280] text-[0.95rem]";
const goBackBtn =
   "inline-flex items-center gap-2 px-6 py-[0.62rem] bg-[#2563eb] text-white border-none rounded-lg text-[0.9rem] font-semibold font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#1d4ed8]";

// ── Component ──────────────────────────────────────────────────

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

   // ── Copy gating (email once) ──────────────────────────────
   // null = not checked yet
   const [accessAllowed, setAccessAllowed] = useState(null);
   const [gateOpen, setGateOpen] = useState(false);
   const [gateEmail, setGateEmail] = useState("");
   const [gateError, setGateError] = useState("");
   const [gateLoading, setGateLoading] = useState(false);
   const [pendingCode, setPendingCode] = useState("");

   // ── Handlers ───────────────────────────────────────────────

   const handleUpdate = useCallback((key, value) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
   }, []);

   const handleReset = useCallback(() => {
      setConfig({ ...variantData.defaultConfig });
   }, [variantData]);

   const handleCopy = useCallback(async () => {
      const code = generateComponentCode(variantId, config);

      let allowed = accessAllowed;
      if (allowed === null) {
         try {
            allowed = await checkCopyAccessStatus();
            setAccessAllowed(Boolean(allowed));
         } catch (err) {
            void err;
            allowed = false;
            setAccessAllowed(false);
         }
      }

      if (allowed) {
         try {
            await copyTextToClipboard(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
         } catch (err) {
            // If clipboard fails, we don't want to permanently break the flow.
            console.error("Clipboard copy failed:", err);
         }
         return;
      }

      setPendingCode(code);
      setGateOpen(true);
      setGateError("");
      setGateEmail("");
   }, [variantId, config, accessAllowed]);

   const handleGateCancel = useCallback(() => {
      setGateOpen(false);
      setPendingCode("");
      setGateError("");
   }, []);

   const handleGateSubmit = useCallback(async () => {
      if (!pendingCode) return;
      setGateLoading(true);
      setGateError("");
      try {
         await submitEmailForCopyAccess(gateEmail);
         setAccessAllowed(true);
         setGateOpen(false);
         await copyTextToClipboard(pendingCode);
         setCopied(true);
         setTimeout(() => setCopied(false), 3000);
         setPendingCode("");
      } catch (err) {
         setGateError(err?.message || "Could not submit email. Please try again.");
      } finally {
         setGateLoading(false);
      }
   }, [pendingCode, gateEmail]);

   useEffect(() => {
      let cancelled = false;
      async function run() {
         try {
            const allowed = await checkCopyAccessStatus();
            if (!cancelled) setAccessAllowed(Boolean(allowed));
         } catch (err) {
            // If the API is down, we keep gating disabled until the user submits an email.
            // (Clipboard can still be blocked; backend is responsible for the gating contract.)
            void err;
            if (!cancelled) setAccessAllowed(false);
         }
      }
      run();
      return () => {
         cancelled = true;
      };
   }, []);

   const handleToggleAccordion = useCallback((id) => {
      setOpenAccordion((prev) => (prev === id ? null : id));
   }, []);

   // ── Not Found ──────────────────────────────────────────────

   if (!variantData) {
      return (
         <div className={root}>
            {/* React Flow attribution reset */}
            <style>{`.react-flow__attribution { display: none !important; }`}</style>

            <div className={notFound}>
               <h2 className={notFoundTitle}>Component not found</h2>
               <p className={notFoundDesc}>
                  <strong className="text-[#111827]">
                     "{section}/{variantId}"
                  </strong>{" "}
                  does not exist.
               </p>
               <button
                  className={goBackBtn}
                  onClick={() => navigate("/components")}
               >
                  <ArrowLeft size={15} />
                  Back to Components
               </button>
            </div>
         </div>
      );
   }

   // ── Render ─────────────────────────────────────────────────

   return (
      <div className={root}>
         {/* React Flow attribution reset */}
         <style>{`.react-flow__attribution { display: none !important; }`}</style>

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
         <div className={body}>
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
         </div>

         <EmailGateModal
            open={gateOpen}
            email={gateEmail}
            setEmail={setGateEmail}
            onCancel={handleGateCancel}
            onSubmit={handleGateSubmit}
            loading={gateLoading}
            error={gateError}
         />
      </div>
   );
};

export default VariantEditorPage;
