export default function About() {
  return (
    <>
      <div className="section">
        <div className="section-title">om meg</div>
        <div className="about-intro">
          <img
            src="/images/henrik.jpg"
            alt="henrik hole"
            className="about-avatar"
          />
          <p>
            Hei. Jeg er Henrik — teknolog og utvikler basert i Norge. Jeg liker
            fine ting, koding, gaming, blå himmel med flyspor.
          </p>
          <p>
            Til daglig jobber jeg som fullstack-utvikler. På
            fritiden driver jeg med løping, pumping, hund
            og gaming.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-title">kontakt</div>
        <div className="packages">
          <div className="line">
            <span className="pkg-name">github</span>{' '}
            <span className="pkg-desc">
              // <a href="https://github.com/henrikholsson">github.com/henrikholsson</a>
            </span>
          </div>
          <div className="line">
            <span className="pkg-name">linkedin</span>{' '}
            <span className="pkg-desc">
              // <a href="https://www.linkedin.com/in/henrikholsson">linkedin.com/in/henrikholsson</a>
            </span>
          </div>
          <div className="line">
            <span className="pkg-name">email</span>{' '}
            <span className="pkg-desc">// henrik.hole@pm.me</span>
          </div>
        </div>
      </div>
    </>
  )
}
