
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export function LandingPageFlow() {
  return (
    <div style={{ height: '100%', width: '100%', margin: 0 }}>
      <ReactFlow
        style={{ backgroundColor: '#1A1208' }}
        draggable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Background color="#3D2E12" gap={24} size={1} variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  )
}
