import { Link } from 'react-router-dom'

export default function HenrikBlueprint() {
  return (
    <div className="blueprint">
      <Link to="/" className="back-link">&lt; tilbake</Link>

      <div className="blueprint-header">
        <h1>Henrik Hole — Technical Specification</h1>
        <div className="blueprint-meta">
          <span>Document No. HH/001/2026</span>
          <span>Rev. 28</span>
          <span>Sheet 1 of 1</span>
        </div>
      </div>

      <div className="blueprint-sheet">
        <div className="blueprint-row blueprint-row-portrait">
          <div className="blueprint-cell">
            <img
              src="https://i.pravatar.cc/400?img=68"
              alt="Front elevation"
              className="portrait-img"
            />
            <span className="blueprint-label">Fig. 1 — Front Elevation</span>
          </div>
          <div className="blueprint-cell portrait-specs">
            <div className="spec-group">
              <div className="spec-group-title">General</div>
              <div className="spec-line"><span>Designation</span><span>Henrik Hole</span></div>
              <div className="spec-line"><span>Type</span><span>Technologist / Developer</span></div>
              <div className="spec-line"><span>Base</span><span>Norway</span></div>
              <div className="spec-line"><span>Status</span><span>Operational</span></div>
              <div className="spec-line"><span>Fuel</span><span>Coffee (dark roast)</span></div>
            </div>
            <div className="spec-group">
              <div className="spec-group-title">Primary Systems</div>
              <div className="spec-line"><span>Frontend</span><span>React / TypeScript</span></div>
              <div className="spec-line"><span>Backend</span><span>Go / Node</span></div>
              <div className="spec-line"><span>Systems</span><span>Linux / Docker</span></div>
              <div className="spec-line"><span>Low-level</span><span>Rust / C</span></div>
              <div className="spec-line"><span>Editor</span><span>Neovim</span></div>
              <div className="spec-line"><span>Shell</span><span>zsh + kitty</span></div>
            </div>
          </div>
        </div>

        <div className="blueprint-specs">
          <div className="blueprint-specs-col">
            <div className="spec-group">
              <div className="spec-group-title">Capabilities</div>
              <div className="spec-line"><span>Web</span><span>Full-stack</span></div>
              <div className="spec-line"><span>Hardware</span><span>PCB / firmware</span></div>
              <div className="spec-line"><span>DevOps</span><span>CI/CD / infra</span></div>
              <div className="spec-line"><span>3D</span><span>Fusion 360 / FDM</span></div>
            </div>
            <div className="spec-group">
              <div className="spec-group-title">Auxiliary Systems</div>
              <div className="spec-line"><span>Input</span><span>Split ergo keyboard</span></div>
              <div className="spec-line"><span>Display</span><span>Dual ultrawide</span></div>
              <div className="spec-line"><span>OS</span><span>Arch (btw)</span></div>
              <div className="spec-line"><span>WM</span><span>i3wm</span></div>
            </div>
          </div>
          <div className="blueprint-specs-col">
            <div className="spec-group">
              <div className="spec-group-title">Performance</div>
              <div className="spec-line"><span>Productivity</span><span>Optimal 09-17</span></div>
              <div className="spec-line"><span>Debug mode</span><span>22-03 (burst)</span></div>
              <div className="spec-line"><span>Uptime</span><span>~16 hrs/day</span></div>
              <div className="spec-line"><span>Reboot</span><span>8 hrs (sleep)</span></div>
            </div>
            <div className="spec-group">
              <div className="spec-group-title">Known Interests</div>
              <div className="spec-line"><span>Gaming</span><span>Retro / PC</span></div>
              <div className="spec-line"><span>Electronics</span><span>MCU / soldering</span></div>
              <div className="spec-line"><span>Keyboards</span><span>Mechanical / custom</span></div>
              <div className="spec-line"><span>Homelab</span><span>Self-hosted</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="blueprint-footer">
        <span>henrikhole.no — Personal Technical Documentation</span>
        <span>UNCLASSIFIED — 2026-03-20</span>
      </div>
    </div>
  )
}
