import { useEffect, useCallback, memo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Panel,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { GripHorizontal, Hand } from "lucide-react";

const wrapper = "flex-1 relative overflow-hidden";

const canvasHint = [
  "bg-white/90 backdrop-blur-[8px]",
  "border border-[#e5e7eb] rounded-lg",
  "px-3 py-[5px]",
  "text-[0.72rem] text-[#6b7280] font-medium font-[var(--inter-font)]",
  "flex items-center gap-[6px]",
  "shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
  "whitespace-nowrap",
].join(" ");

const nodeFrameBase = [
  "bg-white rounded-[10px] border border-[#e2e8f0] overflow-hidden",
  "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_10px_28px_-5px_rgba(0,0,0,0.1)]",
  "transition-[box-shadow,border-color] duration-200",
  "hover:border-[#cbd5e1]",
  "hover:shadow-[0_8px_14px_-2px_rgba(0,0,0,0.07),0_20px_38px_-8px_rgba(0,0,0,0.12)]",
].join(" ");

const nodeBar = [
  "drag-handle__custom",                              // ← drag handle class
  "flex items-center justify-between px-3 py-[6px]",
  "bg-[#f8fafc] border-b border-[#e2e8f0]",
  "cursor-grab active:cursor-grabbing select-none",
].join(" ");

const nodeBarLeft = [
  "flex items-center gap-2",
  "text-[0.71rem] font-semibold text-[#64748b] font-[var(--inter-font)]",
].join(" ");

const trafficLights = "flex gap-[5px]";

const getViewportWidth = (viewport) => {
  if (viewport === "mobile") return 375;
  if (viewport === "tablet") return 768;
  return 1280;
};

// ── Custom Node ────────────────────────────────────────────────

const ComponentNode = memo(({ data }) => {
  const { config, variantName, viewport, getCode } = data;
  const width = getViewportWidth(viewport);

  const srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
  <style>* { margin: 0; padding: 0; box-sizing: border-box; }</style>
</head>
<body>
  ${getCode(config)}
</body>
</html>`;

  return (
    <div className={nodeFrameBase} style={{ width: `${width}px` }}>
      {/* Title bar — drag handle */}
      <div className={nodeBar}>
        <div className={nodeBarLeft}>
          <GripHorizontal size={12} className="text-[#94a3b8]" />
          {variantName}
        </div>
        <div className={trafficLights}>
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* Iframe — nodrag prevents drag conflicts with preview content */}
      <div className="nodrag nopan">
        <iframe
          srcDoc={srcdoc}
          width={width}
          style={{
            display: "block",
            border: "none",
            width: `${width}px`,
            height: "0px",
          }}
          onLoad={(e) => {
            try {
              const doc = e.target.contentDocument;
              if (doc?.documentElement) {
                e.target.style.height =
                  doc.documentElement.scrollHeight + "px";
              }
            } catch (_) {}
          }}
          title={variantName}
        />
      </div>
    </div>
  );
});

ComponentNode.displayName = "ComponentNode";
const nodeTypes = { componentNode: ComponentNode };

const RF_STYLES = `
  .react-flow__attribution          { display: none !important; }
  .react-flow__controls             { box-shadow: 0 2px 10px rgba(0,0,0,0.08); border-radius: 10px; border: 1px solid #e5e7eb; overflow: hidden; }
  .react-flow__controls-button      { background: #fff; border-bottom: 1px solid #f3f4f6; color: #374151; width: 28px; height: 28px; }
  .react-flow__controls-button:hover{ background: #f9fafb; }
  .react-flow__controls-button svg  { width: 12px; height: 12px; }
  .react-flow__minimap              { border-radius: 10px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
  .react-flow__node                 { cursor: grab; }
  .react-flow__node:active          { cursor: grabbing; }
  .react-flow__node.selected        { outline: none !important; }
  .react-flow__handle               { opacity: 0; pointer-events: none; }
`;

// ── Main Component ─────────────────────────────────────────────

const EditorCanvas = ({ variantData, config, viewport, onZoomChange }) => {
  const initialNodes = [
    {
      id: "component-node",
      type: "componentNode",
      position: { x: 60, y: 60 },
      draggable: true,
      dragHandle: ".drag-handle__custom",      // ← only the title bar drags
      selectable: true,
      data: {
        LiveComponent: variantData.component,
        getCode: variantData.getCode,
        config,
        variantName: variantData.name,
        viewport,
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === "component-node"
          ? {
              ...n,
              data: {
                ...n.data,
                config,
                viewport,
                LiveComponent: variantData.component,
                getCode: variantData.getCode,
                variantName: variantData.name,
              },
            }
          : n,
      ),
    );
  }, [config, viewport, variantData]);

  const onMoveEnd = useCallback(
    (_, vp) => onZoomChange(Math.round(vp.zoom * 100)),
    [onZoomChange],
  );

  const onInit = useCallback(
    (rf) => onZoomChange(Math.round(rf.getZoom() * 100)),
    [onZoomChange],
  );

  return (
    <div className={wrapper}>
      <style>{RF_STYLES}</style>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onMoveEnd={onMoveEnd}
        onInit={onInit}
        fitView
        fitViewOptions={{ padding: 0.12, maxZoom: 0.9 }}
        minZoom={0.15}
        maxZoom={2}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnDrag={true}
        zoomOnScroll={true}
        panOnScroll={false}
        proOptions={{ hideAttribution: true }}
        nodeDragThreshold={1}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.4}
          color="#c7d2e0"
          style={{ background: "#f1f5f9" }}
        />
        <Controls position="bottom-left" showInteractive={false} />
        <MiniMap
          position="bottom-right"
          nodeColor="#dde3ea"
          maskColor="rgba(241,245,249,0.88)"
          style={{ width: 140, height: 88 }}
        />
        <Panel position="top-left">
          <div className={canvasHint}>
            <Hand size={12} className="text-[#94a3b8] flex-shrink-0" />
            Drag to pan · Scroll to zoom · Node is draggable
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default EditorCanvas;
