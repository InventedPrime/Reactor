
import { ReactFlow, Background, BackgroundVariant, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card } from './Card';
import { useLocation } from 'react-router-dom';
import { SignUpForm, LoginForm } from './Form';
import OverviewCard from './OverviewCard';

export function LandingPageFlow() {
  const { pathname } = useLocation()

  return (
    <div className="landing-page-container">
      <ReactFlow
        style={{ backgroundColor: 'var(--flowBackground)' }}
        draggable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Background color="var(--flowLines)" gap={24} size={1} variant={BackgroundVariant.Lines} />

      </ReactFlow>
      {pathname === "/" ? <OverviewCard /> : null}
      {pathname === "/signup" ? <SignUpForm /> : null}
      {pathname === "/login" ? <LoginForm /> : null}
    </div>
  )
}

export function GameFlow() {  

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow>
      <Background color="var(--flowLines)" gap={24} size={1} variant={BackgroundVariant.Lines} />
      <Controls />
    </ReactFlow>
     </div>
  )
}