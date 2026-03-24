import { Link } from 'react-router-dom'

export default function SpitfireBlueprint() {
  return (
    <div className="blueprint">
      <Link to="/" className="back-link">&lt; tilbake</Link>

      <div className="blueprint-header">
        <h1>Supermarine Spitfire Mk.IX</h1>
        <div className="blueprint-meta">
          <span>Drawing No. AM/2091/IX</span>
          <span>Scale 1:48</span>
          <span>Sheet 1 of 1</span>
        </div>
      </div>

      <div className="blueprint-sheet">

        <div className="drawing-panel">
          <div className="drawing-img">
            <img src="/images/spitfire-side.png" alt="Starboard elevation" />
            <span className="blueprint-label">Fig. 1 — Starboard Elevation</span>
          </div>
          <div className="drawing-callouts">
            <div className="spec-group">
              <div className="spec-group-title">Profile</div>
              <div className="spec-line"><span>Length</span><span>31 ft 0.5 in</span></div>
              <div className="spec-line"><span>Propeller</span><span>Rotol 4-blade</span></div>
              <div className="spec-line"><span>Exhaust</span><span>6x ejector / side</span></div>
              <div className="spec-line"><span>Tailwheel</span><span>Retractable</span></div>
              <div className="spec-line"><span>Cowling</span><span>Low-drag profile</span></div>
            </div>
            <div className="spec-group">
              <div className="spec-group-title">Engine</div>
              <div className="spec-line"><span>Type</span><span>Merlin 61</span></div>
              <div className="spec-line"><span>Config</span><span>V-12, liquid</span></div>
              <div className="spec-line"><span>Power</span><span>1,565 hp</span></div>
              <div className="spec-line"><span>S/C</span><span>Two-stage</span></div>
              <div className="spec-line"><span>Fuel</span><span>100/130 oct</span></div>
            </div>
          </div>
        </div>

        <div className="drawing-panel">
          <div className="drawing-img">
            <img src="/images/spitfire-top.png" alt="Plan view" />
            <span className="blueprint-label">Fig. 2 — Plan View</span>
          </div>
          <div className="drawing-callouts">
            <div className="spec-group">
              <div className="spec-group-title">Wing</div>
              <div className="spec-line"><span>Span</span><span>36 ft 10 in</span></div>
              <div className="spec-line"><span>Area</span><span>242 sq ft</span></div>
              <div className="spec-line"><span>Section</span><span>NACA 2200</span></div>
              <div className="spec-line"><span>Dihedral</span><span>6°</span></div>
            </div>
            <div className="spec-group">
              <div className="spec-group-title">Armament</div>
              <div className="spec-line"><span>Cannon</span><span>2x 20mm Hispano</span></div>
              <div className="spec-line"><span>MG</span><span>4x .303 Browning</span></div>
              <div className="spec-line"><span>Bombs</span><span>1x 500 lb (opt)</span></div>
            </div>
          </div>
        </div>

        <div className="drawing-panel">
          <div className="drawing-img">
            <img src="/images/spitfire-front.png" alt="Front elevation" />
            <span className="blueprint-label">Fig. 3 — Front Elevation</span>
          </div>
          <div className="drawing-callouts">
            <div className="spec-group">
              <div className="spec-group-title">Front</div>
              <div className="spec-line"><span>Height</span><span>11 ft 5 in</span></div>
              <div className="spec-line"><span>Track</span><span>5 ft 8 in</span></div>
              <div className="spec-line"><span>Prop dia.</span><span>10 ft 9 in</span></div>
              <div className="spec-line"><span>U/C</span><span>Inward retract</span></div>
            </div>
            <div className="spec-group">
              <div className="spec-group-title">Performance</div>
              <div className="spec-line"><span>Max speed</span><span>408 mph</span></div>
              <div className="spec-line"><span>Ceiling</span><span>43,000 ft</span></div>
              <div className="spec-line"><span>Climb</span><span>3,860 ft/min</span></div>
              <div className="spec-line"><span>Range</span><span>434 miles</span></div>
            </div>
          </div>
        </div>

      </div>

      <div className="blueprint-footer">
        <span>Air Ministry — Directorate of Technical Development</span>
        <span>RESTRICTED — 1943-06-15</span>
      </div>
    </div>
  )
}
