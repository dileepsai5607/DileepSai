# L Dileep Sai — Portfolio

Personal portfolio of **L Dileep Sai** (Dileep Sai Lavu), cybersecurity researcher and Cybersecurity Analyst Intern at XSignOn.

**Live site:** https://dileepsai5607.github.io/portfolio/

## About me

- Cybersecurity Analyst Intern at [XSignOn](https://xsignon.com/) (Sep 2026 – present)
- M.Tech in Cybersecurity, SRM University-AP (CGPA 9.17)
- B.Tech (Honors) in Computer Science & Engineering, KL University (CGPA 8.72)
- Former vulnerability assessment intern at DRDL, Hyderabad
- Certified Ethical Hacker (CEH), Azure Fundamentals, OCI Architect Associate, Advanced RPA Professional

Research interests: post-quantum cryptography, intrusion detection, trust management, zero-trust IoT and blockchain-based security.

## What's on the site

A cinematic black-and-crimson single page:

| Section | Contents |
|---|---|
| Home | Animated name, typing role line, stats pills, location badge and a draggable lanyard ID card with spring physics |
| Services | Six glass cards: vulnerability assessment, post-quantum crypto, intrusion detection, blockchain & zero-trust, security ML, cloud & automation |
| Projects | Research papers (case files) and open-source repos, with filter tabs |
| Awards | Certificates with credential IDs, plus academic honours |
| Skills | Scrolling skills marquee and grouped skill cards |
| Experience | Timeline of internships and education |
| Gallery | Photo and certificate gallery with lightbox |
| Contact | Contact details and a message form that opens your email app |

A floating glass nav highlights the current section, and a macOS-style glass dock at the bottom links to email, GitHub, LinkedIn (and Instagram / CV once added) and the admin console.

### Research papers

| Paper | Status |
|---|---|
| PQTrust-DAG: A Post-Quantum Behavioral Trust Layer for DAG-Based Vehicular Sensor Networks | Under supervisor review (M.Tech thesis) |
| A Zero-Trust Edge Intelligence Framework for Post-Quantum IoT Failure Prediction and Merkle-Anchored Auditing | Submitted, IEEE IC4 2027 |
| Classical String Matching Meets Soft Computing: A Controlled Empirical Study of Hybrid Intrusion Detection | Under supervisor review |
| A CNN-Based Bird Species Identification System for Biodiversity Monitoring Using Transfer Learning | Submitted, iConCISE 2027 |

Full papers are shown on the site only after they are published. Until then, each paper has a case-file summary.

## Updating content (Spidey admin console)

All text, links and lists live in `assets/data.js`. To change them without touching code:

1. Open `spidey.html` (the spider icon in the dock).
2. Edit your bio, roles, links, CV path, projects or paper status. Press **Preview** to see the result.
3. Press **Export data.js**, then upload the file to `assets/` in this repo on GitHub.

The admin page runs only in your browser; nothing changes on the live site until you upload the new `data.js`.

## Scroll-video background

Put 192 frames named `frame_001.jpg` … `frame_192.jpg` in `assets/frames/` and they play on scroll behind the page, with a dark radial patch covering the bottom-right corner (for AI-video watermarks). Without frames, a generated crimson lattice animation is drawn instead. See `assets/frames/README.md`.

## Built with

- Plain HTML, CSS and JavaScript — no build step, so GitHub Pages serves it as is
- HTML5 canvas for the scroll-frame background and a hand-written spring simulation for the lanyard card
- Google Fonts: Bebas Neue (headings), Outfit (body), Fira Code (code), Caveat (handwritten accents)

Animations switch off for visitors who have reduced motion enabled.

## Repository structure

```
index.html          the site (markup, styles and scripts)
spidey.html         admin console for editing content
dileep.jpg          profile photo
assets/
  data.js           all site content
  certs/            certificate images
  frames/           optional 192-frame scroll video
  papers/           paper pages and PDFs (shown after publication)
README.md
```

## Run locally

No installation needed. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/dileepsai5607/portfolio.git
cd portfolio
```

To serve it the same way GitHub Pages does:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Contact

- Email: dileep_lavu@srmap.edu.in
- LinkedIn: https://www.linkedin.com/in/dileep-sai-ab5607cde/
- GitHub: https://github.com/dileepsai5607

## License

© 2026 L Dileep Sai. All rights reserved. The code is shared for viewing. Please don't reuse the personal content, photo or certificates.
