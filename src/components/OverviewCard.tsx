import { Card } from "./Card"

export default function OverviewCard() {
    return (
    <div className="landing-page-overlay">
    <section className="system-overview">
    <p className="system-label">PROJECT OVERVIEW</p>
    <h2 className="system-title">Design. Connect. Automate.</h2>
    <p className="system-description">
        Reactor is a web-based, single-player factory automation game where players place and connect industrial buildings on a 2D grid to create production pipelines.
    </p>
    <p className="system-description">
        Raw materials are extracted, refined, and assembled into progressively complex goods. Built using React & Typescript for the front-end, and Node.JS as the backend.
    </p>

    <div className="cards-container">
        <Card
        icon={<svg className="card-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
        </svg>}
        title="2D GRID"
        description="Precision spatial planning"
        />
        <Card
        icon={<svg className="card-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20"></path>
            <circle cx="6" cy="6" r="2"></circle>
            <circle cx="18" cy="6" r="2"></circle>
            <circle cx="18" cy="18" r="2"></circle>
            <circle cx="6" cy="18" r="2"></circle>
        </svg>}
        title="PIPELINES"
        description="Complex automation chains"
        />
    </div>
    </section>

    </div>
    )
}