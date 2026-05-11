
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export function LandingPageFlow() {
  return (
    <div style={{ height: '100%', width: '100%', margin: 0 }}>
      <ReactFlow draggable={false} zoomOnScroll={false} panOnScroll={false} zoomOnPinch={false} panOnDrag={false} defaultViewport={{x: 0, y: 0, zoom: 2}}>
        <Background color="grey"  variant={BackgroundVariant.Lines}/>
      </ReactFlow>
    </div>
  )
}