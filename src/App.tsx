import { useEffect, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

type Story = { image: string; title: string; kind: string; category: string; note: string };
const stories: Story[] = [
  { image: '/images/traditional-wedding-couple.jpg', title: 'The wedding night', kind: 'Wedding day', category: 'Wedding day', note: 'A couple share a quiet moment beneath the reception lights.' },
  { image: '/images/bridal-portraits.jpg', title: 'Portraits before the vows', kind: 'Bridal portraits', category: 'Bridal portraits', note: 'A collection of bridal portraits in traditional red and gold.' },
  { image: '/images/next-stop-forever.jpg', title: 'Next stop, forever', kind: 'Pre-wedding', category: 'Pre-wedding', note: 'Hands joined before a new chapter.' },
  { image: '/images/outdoor-couple.jpg', title: 'A walk beneath the trees', kind: 'Pre-wedding', category: 'Pre-wedding', note: 'A couple in traditional attire share a quiet outdoor moment.' },
  { image: '/images/bridal-details.jpg', title: 'Between yesterday and forever', kind: 'Wedding details', category: 'Wedding details', note: 'A bridal detail study of jewellery and an embroidered veil.' },
  { image: '/images/dulhan-portrait.jpg', title: 'Dulhan', kind: 'Bridal portraits', category: 'Bridal portraits', note: 'A bride framed by her red veil and wedding jewellery.' },
  { image: '/images/marry-me-story.jpg', title: 'A question under the lights', kind: 'Pre-wedding', category: 'Pre-wedding', note: 'A proposal story told through a sequence of photographs.' },
  { image: '/images/endless-flames.jpg', title: 'Endless flames', kind: 'Pre-wedding', category: 'Pre-wedding', note: 'A couple share a moment by a fire-lit canopy.' },
];

const weddingFilms = [
  {
    video: '/videos/wedding-day-film.mp4',
    poster: '/images/traditional-wedding-couple.jpg',
    title: 'A wedding day, in motion',
    kind: 'Wedding film',
    note: 'Behind-the-scenes and celebration moments from a traditional wedding day.',
  },
  {
    video: '/videos/dulhan-portrait-film.mp4',
    poster: '/images/dulhan-portrait.jpg',
    title: 'Dulhan',
    kind: 'Bridal film',
    note: 'A bridal portrait film featuring traditional red attire and jewellery.',
  },
];

const services = [
  { number: '01', name: 'Pre-wedding', desc: 'A chance to make something together before the day arrives. Easy, personal, and entirely yours.' },
  { number: '02', name: 'Wedding day', desc: 'The whole feeling of it — the nervous hands, the full dance floor, the people who brought you here.' },
  { number: '03', name: 'Post-wedding', desc: 'One more chapter, with all the time in the world. Somewhere meaningful, dressed up or not.' },
  { number: '04', name: 'Celebrations', desc: 'Anniversaries, family gatherings, and the days worth keeping close.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All stories');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [sent, setSent] = useState(false);
  const filters = ['All stories', 'Pre-wedding', 'Wedding day', 'Bridal portraits', 'Wedding details'];
  const visibleStories = activeCategory === 'All stories' ? stories : stories.filter((story) => story.category === activeCategory);

  useEffect(() => {
    if (!selectedStory) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedStory(null); };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [selectedStory]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Marvel Digital Photography home">
          <img className="brand-logo" src="/images/marvel-logo.png" alt="Marvel Digital Photography logo" />
        </a>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#stories" onClick={closeMenu}>The stories</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#offerings" onClick={closeMenu}>What we photograph</a>
          <a className="nav-contact" href="#enquire" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="home" aria-label="Marvel Digital Photography">
        <img className="hero-image" src="/images/traditional-wedding-couple.jpg" alt="Indian bride and groom in traditional wedding attire beneath violet reception lights" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow reveal">Marvel Digital Photography <span>·</span> Indian wedding stories</p>
          <h1 className="reveal reveal-delay-1">Some days<br />stay <em>with you.</em></h1>
          <p className="hero-copy reveal reveal-delay-2">Photographs for Indian weddings and the moments surrounding them, long after the celebrations have passed.</p>
          <a className="hero-link reveal reveal-delay-2" href="#stories">Wander through our stories <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-caption"><span>01 / 08</span><span>A day, held close</span></div>
        <div className="hero-side-note">LOVE, AS IT HAPPENED</div>
      </section>

      <section className="intro section-pad" id="approach">
        <div className="intro-side eyebrow">A little about us <span>— 01</span></div>
        <div className="intro-main">
          <p className="intro-statement">Not just how it <em>looked.</em><br />How it <em>felt.</em></p>
          <div className="intro-bottom">
            <span className="ornament">M<span>✳</span>D</span>
            <p>We’re Marvel Digital Photography. We photograph Indian wedding days, bridal portraits, pre-wedding stories, and the celebrations around them — from the rituals everyone gathers for to the quiet moments in between.</p>
            <a className="text-link" href="#enquire">Tell us what you’re dreaming up <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="stories-section section-pad" id="stories">
        <div className="section-heading">
          <div><p className="eyebrow">Indian wedding stories</p><h2>Little pieces of <em>forever.</em></h2></div>
          <p className="heading-note">Wedding days, bridal portraits, pre-wedding stories, and details worth remembering.</p>
        </div>
        <div className="story-filters" role="group" aria-label="Filter stories">
          {filters.map((filter) => <button key={filter} className={activeCategory === filter ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveCategory(filter)} aria-pressed={activeCategory === filter} data-testid={`filter-${filter.toLowerCase().replaceAll(' ', '-')}`}>{filter}</button>)}
        </div>
        <div className="story-grid">
          {visibleStories.map((story, index) => (
            <button className="story-card" key={story.title} onClick={() => setSelectedStory(story)} aria-label={`View story: ${story.title}`} data-testid={`story-${index}`}>
              <span className="story-image-wrap"><img src={story.image} alt={story.note} loading="lazy" /><span className="story-open"><ArrowUpRight size={18} /></span></span>
              <span className="story-caption"><span className="eyebrow">{story.kind}</span><span className="story-title">{story.title}</span><span className="story-note">{story.note}</span></span>
            </button>
          ))}
        </div>
        <div className="story-foot"><span className="eyebrow">{String(visibleStories.length).padStart(2, '0')} stories in view</span><span className="line" /><span className="eyebrow">Made to be felt again</span></div>
        <div className="wedding-films">
          <div className="wedding-films-heading">
            <div><p className="eyebrow">Wedding films</p><h3>Stories in <em>motion.</em></h3></div>
            <p>Watch a wedding day and a bridal portrait story unfold.</p>
          </div>
          <div className="wedding-film-grid">
            {weddingFilms.map((film) => (
              <article className="wedding-film-card" key={film.video}>
                <video controls preload="none" playsInline poster={film.poster} aria-label={film.title}>
                  <source src={film.video} type="video/mp4" />
                  Your browser does not support this video.
                </video>
                <div className="wedding-film-copy">
                  <span className="eyebrow">{film.kind}</span>
                  <h4>{film.title}</h4>
                  <p>{film.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="film-strip" aria-label="A moment from a celebration">
        <img src="/images/outdoor-couple.jpg" alt="A couple in Indian wedding attire share a moment outdoors" loading="lazy" />
        <div className="film-overlay"><span className="eyebrow">When the room becomes a memory</span><p>Keep the feeling.<br /><em>Keep the whole night.</em></p><a href="#enquire" aria-label="Enquire about photography"><ArrowDownRight size={26} /></a></div>
        <span className="film-index">A FRAME FROM THE GOOD PART</span>
      </section>

      <section className="offerings section-pad" id="offerings">
        <div className="offering-intro">
          <p className="eyebrow">The days we hold</p>
          <h2>One story.<br /><em>Many ways in.</em></h2>
          <p>Big, small, planned to the minute or made up as you go — we’re here for the moments that feel like yours.</p>
          <a href="#enquire" className="text-link">Find your kind of story <ArrowRight size={15} /></a>
        </div>
        <div className="offering-list">
          {services.map((service) => <article className="offering-row" key={service.number}>
            <span className="offering-number">{service.number}</span>
            <div><h3>{service.name}</h3><p>{service.desc}</p></div>
            <ArrowUpRight className="offering-arrow" size={20} />
          </article>)}
        </div>
      </section>

      <section className="quiet-frame">
        <div className="quiet-image"><img src="/images/dulhan-portrait.jpg" alt="A bride in red beneath her embroidered wedding veil" loading="lazy" /></div>
        <div className="quiet-copy">
          <span className="eyebrow">After the last dance</span>
          <p className="quiet-quote">“The day moves on.<br />The feeling <em>doesn’t.</em>”</p>
          <span className="quiet-rule" />
          <p className="quiet-description">Some of the moments you’ll treasure most happen when the music fades. We make room for those, too.</p>
          <a className="text-link" href="#enquire">Make space for the in-between <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="process section-pad">
        <div className="process-heading"><p className="eyebrow">From first hello to keep forever</p><h2>Easy as <em>being you.</em></h2></div>
        <div className="process-steps">
          <article><span>01</span><h3>Tell us a little</h3><p>What you’re celebrating, what matters most, and any little details you can’t stop thinking about.</p></article>
          <article><span>02</span><h3>Make a plan together</h3><p>We’ll talk through the day and shape a plan that leaves plenty of room for real life.</p></article>
          <article><span>03</span><h3>Be there, fully</h3><p>We’ll take care of the photographs. You get to be right where you are.</p></article>
        </div>
        <div className="process-aside"><ArrowDown size={18} /><span className="eyebrow">And then, the good part becomes yours to keep</span></div>
      </section>

      <section className="enquire" id="enquire">
        <div className="enquire-left">
          <p className="eyebrow">Your turn</p>
          <h2>Let’s make room<br />for <em>your story.</em></h2>
          <p>Tell us what’s on your mind. A date, a question, a half-formed idea — start anywhere.</p>
          <div className="studio-contact" aria-label="Studio contact details">
            <a href="https://maps.google.com/?q=2366%2C%20Kesora%20Rd%2C%20Bhubaneswar%2C%20Odisha%20751002" target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" />
              <span>2366, Kesora Rd, Bhubaneswar, Odisha 751002</span>
              <ArrowUpRight className="contact-external" size={14} aria-hidden="true" />
            </a>
            <a href="tel:7873271762"><Phone size={16} aria-hidden="true" /><span>7873271762</span></a>
            <a href="mailto:marvelphotography637@gmail.com"><Mail size={16} aria-hidden="true" /><span>marvelphotography637@gmail.com</span></a>
            <a href="https://www.facebook.com/share/1YgFeXDbEF/" target="_blank" rel="noreferrer">
              <span className="contact-social-label">f</span>
              <span>Visit our Facebook page</span>
              <ArrowUpRight className="contact-external" size={14} aria-hidden="true" />
            </a>
          </div>
          <span className="enquire-scribble">M <i>✳</i> D</span>
        </div>
        <form className="enquire-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          {sent ? <div className="form-confirmation" role="status"><span className="check-circle"><Check size={20} /></span><h3>Thank you for the first hello.</h3><p>This enquiry form is a preview and doesn’t send messages yet. Your note is right here, ready for the studio to connect it to a real inbox.</p><button className="text-link" type="button" onClick={() => setSent(false)}>Write another note <ArrowRight size={15} /></button></div> : <>
            <label>Your name<input name="name" required autoComplete="name" placeholder="What should we call you?" data-testid="input-name" /></label>
            <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="Where can we write back?" data-testid="input-email" /></label>
            <label>What are you celebrating?
              <select name="occasion" defaultValue="" required data-testid="select-occasion">
                <option value="" disabled>Choose what feels closest</option>
                <option>Pre-wedding</option><option>Wedding</option><option>Post-wedding</option><option>A celebration</option><option>Still figuring it out</option>
              </select>
            </label>
            <label>A little about it<textarea name="message" rows={3} placeholder="The date, the place, the feeling you want to remember…" data-testid="input-message" /></label>
            <button className="submit-button" type="submit">Send a first hello <ArrowUpRight size={17} /></button>
            <p className="form-footnote">Just a beginning. No pressure, no perfect words required.</p>
          </>}
        </form>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home" aria-label="Marvel Digital Photography home"><img className="brand-logo" src="/images/marvel-logo.png" alt="" /></a>
        <p>For the days you want to live in again.</p>
        <a href="#home" className="back-top">Back to the beginning <ArrowUpRight size={14} /></a>
        <span className="footer-copyright">© Marvel Digital Photography</span>
      </footer>

      {selectedStory && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedStory.title} onClick={() => setSelectedStory(null)}>
        <button className="lightbox-close" aria-label="Close story" onClick={() => setSelectedStory(null)}><X size={24} /></button>
        <button className="lightbox-prev" aria-label="Previous story" onClick={(event) => { event.stopPropagation(); const i = visibleStories.indexOf(selectedStory); setSelectedStory(visibleStories[(i + visibleStories.length - 1) % visibleStories.length]); }}><ArrowLeft size={20} /></button>
        <img src={selectedStory.image} alt={selectedStory.note} onClick={(event) => event.stopPropagation()} />
        <div className="lightbox-caption"><span className="eyebrow">{selectedStory.kind}</span><h2>{selectedStory.title}</h2><p>{selectedStory.note}</p></div>
        <button className="lightbox-next" aria-label="Next story" onClick={(event) => { event.stopPropagation(); const i = visibleStories.indexOf(selectedStory); setSelectedStory(visibleStories[(i + 1) % visibleStories.length]); }}><ArrowRight size={20} /></button>
      </div>}

      <a
        className="whatsapp-float"
        href="https://wa.me/917873271762?text=Hi%20Marvel%20Digital%20Photography%2C%20I%27d%20like%20to%20enquire%20about%20your%20photography%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire now on WhatsApp"
      >
        <FaWhatsapp size={23} aria-hidden="true" />
        <span>Enquire now</span>
      </a>
    </main>
  );
}

export default App;