import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, Baby, BookOpen, CheckCircle2, ChevronDown, Clock3, Heart, Leaf, Menu, Music2, Palette, Phone, School, ShieldCheck, Sparkles, Star, UsersRound, X, Flower2, GraduationCap, Sun, Instagram, Mail, MapPin } from 'lucide-react';
import './styles.css';

const PHONE1 = '7207723888';
const PHONE2 = '7670855859';
const EMAIL = 'vedaconceptpreschool@gmail.com';
const waLink = `https://wa.me/91${PHONE1}?text=${encodeURIComponent('Hello Veda Concept Preschool, I would like to know more about admissions.')}`;
const photos = {
  hero: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
  play: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
  classroom: 'https://images.pexels.com/photos/34708272/pexels-photo-34708272.jpeg?auto=compress&cs=tinysrgb&w=900',
  art: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  blocks: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80',
  reading: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
  dance: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80',
  yoga: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
  teacher: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
  seniorKg: 'https://images.pexels.com/photos/34708272/pexels-photo-34708272.jpeg?auto=compress&cs=tinysrgb&w=900',
};

const programs = [
  { name: 'Day Care', age: 'A caring home away from home', desc: 'A safe, warm and nurturing space for little ones to feel comfortable while they explore and play.', icon: Baby, color: 'pink', image: photos.play },
  { name: 'Play Group', age: 'Discover through play', desc: 'Playful activities that encourage curiosity, early communication and making new friends.', icon: Sparkles, color: 'mint', image: photos.blocks },
  { name: 'Nursery', age: 'Little learners, big discoveries', desc: 'A joyful introduction to stories, numbers, colours, creativity and everyday independence.', icon: Palette, color: 'yellow', image: photos.art },
  { name: 'Junior KG', age: 'Growing confidence every day', desc: 'A balanced foundation of language, early maths, creative expression and social skills.', icon: BookOpen, color: 'lavender', image: photos.reading },
  { name: 'Senior KG', age: 'Ready for the next big step', desc: 'Building school readiness through hands-on learning, confidence and guided exploration.', icon: GraduationCap, color: 'blue', image: photos.seniorKg},
  { name: 'After-School Activities', age: 'More ways to shine', desc: 'A lively mix of learning, movement and creative activities after the school day.', icon: Sun, color: 'peach', image: photos.dance },
];
const benefits = [
  { icon: BookOpen, title: 'Culture-rich learning', text: 'A CBSE-pattern-inspired approach with Indian culture and traditions woven into learning.' },
  { icon: Palette, title: 'Activity-led curriculum', text: 'Worksheets, stories, art and hands-on activities that make learning engaging.' },
  { icon: Heart, title: 'Child-friendly environment', text: 'A warm, welcoming atmosphere where children can feel supported and included.' },
  { icon: UsersRound, title: 'Caring educators', text: 'Trained and experienced teachers who encourage each child’s unique progress.' },
  { icon: ShieldCheck, title: 'Care you can feel good about', text: 'A focus on a safe, caring and positive early-learning experience.' },
  { icon: Star, title: 'Affordable fee structure', text: 'Learning options designed with families and their needs in mind.' },
];
const activities = [
  { title: 'Tuition', text: 'Extra learning support in a friendly setting.', icon: BookOpen, tone: 'yellow' },
  { title: 'Dance & Zumba', text: 'Move, groove and build confidence through music.', icon: Music2, tone: 'pink' },
  { title: 'Yoga', text: 'Gentle movement, balance and mindful moments.', icon: Flower2, tone: 'mint' },
];

function Logo({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Veda Concept Preschool home">
    <img src="/veda-logo.svg" alt="" className="brand-mark" />
    <span className="brand-words"><strong>VEDA CONCEPT</strong><small>PRESCHOOL</small><em>Play and learn the Veda way!</em></span>
  </a>;
}
function SectionHeading({ eyebrow, title, text, centered = true }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><span className="eyebrow"><span />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ parent: '', phone: '', program: 'Play Group', message: '' });
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const onSubmit = e => {
    e.preventDefault();
    const message = `Hello Veda Concept Preschool!%0AParent name: ${encodeURIComponent(form.parent)}%0APhone: ${encodeURIComponent(form.phone)}%0AInterested in: ${encodeURIComponent(form.program)}%0AMessage: ${encodeURIComponent(form.message || 'Please share admission details.')}`;
    setSubmitted(true);
    window.open(`https://wa.me/91${PHONE1}?text=${message}`, '_blank', 'noopener,noreferrer');
  };
  return <>
    <div className="announcement"><Sparkles size={14} /> Little steps today, big dreams tomorrow <span className="announce-dot">✦</span> <a href="#admissions">Explore admissions <ArrowRight size={13}/></a></div>
    <header className="site-header">
      <div className="container nav-wrap"><Logo />
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['Home','#home'],['About us','#about'],['Programs','#programs'],['Activities','#activities'],['Gallery','#gallery'],['Contact','#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#admissions" onClick={closeMenu}>Enquire now <ArrowUpRight size={16}/></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-blob blob-one"/><div className="hero-blob blob-two"/>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="pill"><span className="pill-star">✳</span> A happy beginning starts here</div>
            <h1>Little steps.<br/><span>Big dreams.</span><br/>Bright futures.</h1>
            <p className="hero-intro">A joyful place where little minds explore, friendships bloom, and every new discovery becomes a reason to smile.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#programs">Discover our programs <ArrowRight size={17}/></a><a className="btn btn-quiet" href={waLink} target="_blank" rel="noreferrer"><span className="play-icon">↗</span> Talk to our team</a></div>
            <div className="hero-trust"><div className="trust-icons"><span>♥</span><span>✿</span><span>★</span></div><div><strong>A little world of wonder</strong><small>Care · Creativity · Confidence</small></div></div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-photo-frame"><img src={photos.hero} alt="Young child smiling during a playful early-learning moment"/><div className="photo-wash"/></div>
            <div className="floating-note note-top"><span className="note-icon sun-icon"><Sun size={22}/></span><span><strong>Learn with joy</strong><small>Every day is an adventure</small></span></div>
            <div className="floating-note note-bottom"><span className="note-icon heart-icon"><Heart size={22} fill="currentColor"/></span><span><strong>Loved. Seen. Encouraged.</strong><small>Little learners belong here</small></span></div>
            <div className="doodle doodle-star">✦</div><div className="doodle doodle-flower">✿</div>
          </div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span><CheckCircle2 size={17}/> Play-based discovery</span><span><CheckCircle2 size={17}/> Caring teachers</span><span><CheckCircle2 size={17}/> Whole-child growth</span><span className="scroll-cue">Scroll to explore <ChevronDown size={16}/></span></div></div>
      </section>

      <section className="welcome section-pad" id="about"><div className="container welcome-grid">
        <div className="welcome-visual reveal"><div className="welcome-image-main"><img src={photos.classroom} alt="Bright classroom arranged for collaborative learning"/></div><div className="welcome-image-small"><img src={photos.art} alt="Colourful art supplies for creative activities"/></div><div className="welcome-sticker"><span>✿</span><strong>Curious minds.<br/>Kind hearts.</strong></div><div className="welcome-doodle">〰</div></div>
        <div className="welcome-copy reveal"><SectionHeading centered={false} eyebrow="WELCOME TO VEDA" title={<>A small place for<br/><span>big beginnings.</span></>} text="Childhood should be filled with wonder. At Veda Concept Preschool, we celebrate each little milestone with opportunities to play, explore, create and grow."/><div className="welcome-points"><div><span className="point-icon point-peach"><Heart size={18}/></span><span><strong>Care at every step</strong><small>Warm routines and a welcoming atmosphere.</small></span></div><div><span className="point-icon point-blue"><Sparkles size={18}/></span><span><strong>Learning that feels like play</strong><small>Curiosity-led experiences for growing minds.</small></span></div></div><a className="text-link" href="#programs">Find their happy place <ArrowRight size={16}/></a></div>
      </div></section>

      <section className="programs section-pad" id="programs"><div className="container"><SectionHeading eyebrow="OUR PROGRAMS" title={<>The right start for <span>every little learner.</span></>} text="Thoughtfully planned learning experiences for every stage of early childhood."/><div className="program-grid">{programs.map((p, i) => {const Icon=p.icon; return <article className={`program-card ${p.color} reveal`} key={p.name} style={{transitionDelay:`${i*70}ms`}}><div className="program-image"><img src={p.image} alt={`${p.name} early childhood activity`} loading="lazy"/><span className="program-icon"><Icon size={21}/></span></div><div className="program-content"><span className="program-index">0{i+1} / PROGRAM</span><h3>{p.name}</h3><h4>{p.age}</h4><p>{p.desc}</p><a href="#admissions" aria-label={`Enquire about ${p.name}`} className="card-arrow">Learn more <ArrowUpRight size={17}/></a></div></article>})}</div></div></section>

      <section className="why section-pad" id="why"><div className="container why-grid"><div className="why-copy reveal"><SectionHeading centered={false} eyebrow="WHY CHOOSE VEDA?" title={<>Little things that make<br/><span>a big difference.</span></>} text="The early years are full of firsts. We want each child to feel supported as they discover new ideas, friendships and possibilities."/><a className="btn btn-primary" href="#contact">Let's connect <ArrowRight size={17}/></a><div className="why-scribble">made with <Heart size={14} fill="currentColor"/> for little learners</div></div><div className="benefits-grid">{benefits.map((b,i)=>{const Icon=b.icon;return <article className="benefit reveal" key={b.title} style={{transitionDelay:`${i*60}ms`}}><div className={`benefit-icon benefit-${i}`}><Icon size={21}/></div><h3>{b.title}</h3><p>{b.text}</p></article>})}</div></div></section>

      <section className="activities section-pad" id="activities"><div className="container"><div className="activity-heading reveal"><SectionHeading centered={false} eyebrow="BEYOND THE CLASSROOM" title={<>A little something<br/><span>for every interest.</span></>} text="More ways for children to move, express themselves and discover what they love."/><a className="text-link" href="#admissions">Ask about activities <ArrowRight size={16}/></a></div><div className="activity-grid">{activities.map((a,i)=>{const Icon=a.icon;return <article className={`activity-card activity-${a.tone} reveal`} key={a.title} style={{transitionDelay:`${i*90}ms`}}><div className="activity-photo"><img src={i===0?photos.reading:i===1?photos.dance:photos.yoga} alt={`${a.title} activity`} loading="lazy"/><span className="activity-symbol"><Icon size={24}/></span></div><div className="activity-copy"><h3>{a.title}</h3><p>{a.text}</p><a href="#admissions" aria-label={`Enquire about ${a.title}`}>Know more <ArrowRight size={15}/></a></div></article>})}</div></div></section>

      <section className="gallery section-pad" id="gallery"><div className="container"><SectionHeading eyebrow="LITTLE MOMENTS, BIG MEMORIES" title={<>A peek into our <span>world of wonder.</span></>} text="From creative hands to curious minds, the best learning moments are often the little ones."/><div className="gallery-grid reveal"><figure className="gallery-item gallery-large"><img src={photos.play} alt="Outdoor play and exploration" loading="lazy"/><figcaption><span>01</span> Little adventures</figcaption></figure><figure className="gallery-item"><img src={photos.art} alt="Creative art and painting time" loading="lazy"/><figcaption><span>02</span> Colour outside the lines</figcaption></figure><figure className="gallery-item"><img src={photos.blocks} alt="Hands-on play with building blocks" loading="lazy"/><figcaption><span>03</span> Learning by doing</figcaption></figure><figure className="gallery-item"><img src={photos.reading} alt="Early literacy and story time" loading="lazy"/><figcaption><span>04</span> Stories that spark ideas</figcaption></figure><figure className="gallery-item"><img src={photos.teacher} alt="Teacher guiding young learners" loading="lazy"/><figcaption><span>05</span> Growing together</figcaption></figure></div><p className="gallery-note"><Sparkles size={15}/> Sample imagery for this demo. School-specific photos can replace these before launch.</p></div></section>

      <section className="admissions" id="admissions"><div className="container"><div className="admissions-panel reveal"><div className="admissions-decoration deco-one">✳</div><div className="admissions-decoration deco-two">✿</div><div className="admissions-copy"><span className="eyebrow eyebrow-light"><span/> YOUR NEXT LITTLE ADVENTURE</span><h2>Ready to find their<br/><em>happy place?</em></h2><p>Let’s talk about your child’s next step. We’d love to help you explore our programs and admission details.</p><div className="admission-perks"><span><CheckCircle2 size={17}/> Friendly guidance</span><span><CheckCircle2 size={17}/> Program information</span></div></div><div className="admissions-action"><div className="admission-sun"><Sun size={29}/></div><strong>Every big journey<br/>starts small.</strong><a className="btn btn-white" href={waLink} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowUpRight size={17}/></a><a className="admission-call" href={`tel:${PHONE1}`}><Phone size={15}/> Or call {PHONE1}</a></div></div></div></section>

      <section className="contact section-pad" id="contact"><div className="container contact-grid"><div className="contact-copy reveal"><SectionHeading centered={false} eyebrow="SAY HELLO" title={<>Let’s make their<br/><span>first steps special.</span></>} text="Questions about our programs or admissions? Reach out and we’ll help you take the next step."/><div className="contact-methods"><a href={`tel:${PHONE1}`} className="contact-method"><span className="contact-icon contact-pink"><Phone size={19}/></span><span><small>Call us</small><strong>{PHONE1}</strong></span><ArrowUpRight size={17}/></a><a href={`tel:${PHONE2}`} className="contact-method"><span className="contact-icon contact-yellow"><Phone size={19}/></span><span><small>Call us</small><strong>{PHONE2}</strong></span><ArrowUpRight size={17}/></a><a href={`mailto:${EMAIL}`} className="contact-method"><span className="contact-icon contact-blue"><Mail size={19}/></span><span><small>Email us</small><strong>{EMAIL}</strong></span><ArrowUpRight size={17}/></a></div><div className="contact-footnote"><MapPin size={17}/><span>Visit details and school address can be added once confirmed.</span></div></div><div className="enquiry-card reveal"><div className="enquiry-card-head"><div><span className="eyebrow">ADMISSIONS ENQUIRY</span><h3>Tell us a little about your learner.</h3></div><div className="enquiry-sparkle"><Star size={23}/></div></div>{submitted && <div className="form-success"><CheckCircle2 size={17}/> WhatsApp should open with your enquiry. Please send the message to complete it.</div>}<form onSubmit={onSubmit}><label htmlFor="parent">Parent / guardian name</label><input id="parent" name="parent" value={form.parent} onChange={e=>setForm({...form,parent:e.target.value})} placeholder="Your name" required/><div className="form-row"><div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" inputMode="tel" pattern="[0-9+ ()-]{8,18}" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your contact number" required/></div><div><label htmlFor="program">Interested in</label><select id="program" name="program" value={form.program} onChange={e=>setForm({...form,program:e.target.value})}>{['Day Care','Play Group','Nursery','Junior KG','Senior KG','After-School Activities','Tuition','Dance / Zumba','Yoga'].map(x=><option key={x}>{x}</option>)}</select></div></div><label htmlFor="message">Anything you'd like to ask? <span>(optional)</span></label><textarea id="message" name="message" rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us how we can help…"/><button className="btn btn-primary form-submit" type="submit">Send enquiry on WhatsApp <ArrowRight size={17}/></button><p className="form-privacy">This demo form opens WhatsApp with your details. It does not store information on a server.</p></form></div></div></section>
    </main>

    <footer className="footer" id="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo light/><p>Play, discover and grow — the Veda way. Here’s to happy beginnings and bright little futures.</p><a className="social-link" href={waLink} target="_blank" rel="noreferrer" aria-label="Contact Veda Concept Preschool on WhatsApp"><Phone size={16}/></a></div><div className="footer-links"><h4>Explore</h4><a href="#about">About us</a><a href="#programs">Our programs</a><a href="#why">Why choose us</a><a href="#gallery">Gallery</a></div><div className="footer-links"><h4>Our programs</h4><a href="#programs">Day Care & Play Group</a><a href="#programs">Nursery</a><a href="#programs">Junior & Senior KG</a><a href="#activities">After-school activities</a></div><div className="footer-contact"><h4>Let’s connect</h4><a href={`tel:${PHONE1}`}><Phone size={15}/>{PHONE1}</a><a href={`tel:${PHONE2}`}><Phone size={15}/>{PHONE2}</a><a href={`mailto:${EMAIL}`}><Mail size={15}/>{EMAIL}</a><a href="#admissions" className="footer-enquire">Ask about admissions <ArrowUpRight size={15}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Veda Concept Preschool. Demo website.</span><span>Made with <Heart size={13} fill="currentColor"/> for little learners</span></div></div></footer>
    <a className="floating-whatsapp" href={waLink} target="_blank" rel="noreferrer" aria-label="Chat with Veda Concept Preschool on WhatsApp"><Phone size={21}/><span>Let's talk</span></a>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
