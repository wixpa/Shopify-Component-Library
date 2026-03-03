import { useEffect, useCallback, memo } from "react";
import styled from "styled-components";
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

// ── Styled ─────────────────────────────────────────────────────

const Wrapper = styled.div`
   flex: 1;
   position: relative;
   overflow: hidden;

   /* Scoped React Flow overrides */
   .react-flow__attribution {
      display: none;
   }
   .react-flow__controls {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
   }
   .react-flow__controls-button {
      background: #fff;
      border-bottom: 1px solid #f3f4f6;
      color: #374151;
      width: 28px;
      height: 28px;

      &:hover {
         background: #f9fafb;
      }
      svg {
         width: 12px;
         height: 12px;
      }
   }
   .react-flow__minimap {
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
   }
   .react-flow__node {
      cursor: grab;
   }
   .react-flow__node:active {
      cursor: grabbing;
   }
   .react-flow__handle {
      opacity: 0;
      pointer-events: none;
   }
`;

const CanvasHint = styled.div`
   background: rgba(255, 255, 255, 0.92);
   backdrop-filter: blur(8px);
   -webkit-backdrop-filter: blur(8px);
   border: 1px solid #e5e7eb;
   border-radius: 8px;
   padding: 5px 12px;
   font-size: 0.72rem;
   color: #6b7280;
   font-family: var(--inter-font);
   font-weight: 500;
   display: flex;
   align-items: center;
   gap: 6px;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;

// ── Node Frame ─────────────────────────────────────────────────

const NodeFrame = styled.div`
   background: #ffffff;
   border-radius: 10px;
   border: 1px solid #e2e8f0;
   overflow: hidden;
   box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.05),
      0 10px 28px -5px rgba(0, 0, 0, 0.1);
   transition:
      box-shadow 0.2s ease,
      border-color 0.2s ease;

   &:hover {
      border-color: #cbd5e1;
      box-shadow:
         0 8px 14px -2px rgba(0, 0, 0, 0.07),
         0 20px 38px -8px rgba(0, 0, 0, 0.12);
   }

   width: ${({ $viewport }) => {
      if ($viewport === "mobile") return "375px";
      if ($viewport === "tablet") return "768px";
      return "900px";
   }};
`;

const NodeBar = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 6px 12px;
   background: #f8fafc;
   border-bottom: 1px solid #e2e8f0;
   cursor: grab;
   user-select: none;

   &:active {
      cursor: grabbing;
   }
`;

const NodeBarLeft = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   font-size: 0.71rem;
   font-weight: 600;
   color: #64748b;
   font-family: var(--inter-font);

   i {
      color: #94a3b8;
      font-size: 0.65rem;
   }
`;

const TrafficLights = styled.div`
   display: flex;
   gap: 5px;
`;

const TLight = styled.div`
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background: ${({ $color }) => $color};
`;

const NodeBody = styled.div`
   pointer-events: none;
   user-select: none;
`;

// ── Custom Node ────────────────────────────────────────────────

const ComponentNode = memo(({ data }) => {
   const { LiveComponent, config, variantName, viewport } = data;

   return (
      <NodeFrame $viewport={viewport}>
         <NodeBar className="drag-handle">
            <NodeBarLeft>
               <i className="fa-solid fa-puzzle-piece"></i>
               {variantName}
            </NodeBarLeft>
            <TrafficLights>
               <TLight $color="#ff5f57" />
               <TLight $color="#febc2e" />
               <TLight $color="#28c840" />
            </TrafficLights>
         </NodeBar>
         <NodeBody>
            <LiveComponent config={config} />
         </NodeBody>
      </NodeFrame>
   );
});

ComponentNode.displayName = "ComponentNode";

const nodeTypes = { componentNode: ComponentNode };

// ── Component ─────────────────────────────────────────────────

const EditorCanvas = ({ variantData, config, viewport, onZoomChange }) => {
   const initialNodes = [
      {
         id: "component-node",
         type: "componentNode",
         position: { x: 60, y: 60 },
         draggable: true,
         data: {
            LiveComponent: variantData.component,
            config,
            variantName: variantData.name,
            viewport,
         },
      },
   ];

   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
   const [edges, , onEdgesChange] = useEdgesState([]);

   // Sync config + viewport → node data (live preview)
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
      <Wrapper>
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
            elementsSelectable={false}
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
               <CanvasHint>
                  <i
                     className="fa-regular fa-hand"
                     style={{ color: "#94a3b8" }}
                  ></i>
                  Drag to pan · Scroll to zoom · Node is draggable
               </CanvasHint>
            </Panel>
         </ReactFlow>
      </Wrapper>
   );
};

export default EditorCanvas;
