/* =========================================================================
   SITE CONTENT — everything shown on index.html comes from this object.
   Edit it by hand, or open spidey.html (the admin console), change things,
   press "Export data.js" and upload the downloaded file here.
   ========================================================================= */
window.SITE = {
  profile: {
    name: "L Dileep Sai",
    fullName: "Dileep Sai Lavu",
    first: "DILEEP",
    last: "SAI",
    greeting: "Hey there, I'm",
    roles: ["Cybersecurity Analyst", "Post-Quantum Researcher", "Certified Ethical Hacker", "Intrusion Detection Engineer"],
    bio: "Cybersecurity Analyst Intern at XSignOn and M.Tech researcher at SRM University-AP. I build post-quantum, intrusion-detection and trust systems, and I measure trust instead of assuming it.",
    tagline: "Trust nothing. Verify everything.",
    location: "Hyderabad, India",
    availability: "Open to research and security roles",
    email: "dileep_lavu@srmap.edu.in",
    avatar: "dileep.jpg",
    idNumber: "SEC-2026-5607",
    org: "SRM University-AP · XSignOn",
    resume: ""            /* e.g. "assets/resume.pdf" — the CV button appears when this is set */
  },
  socials: {
    github: "https://github.com/dileepsai5607",
    linkedin: "https://www.linkedin.com/in/dileep-sai-ab5607cde/",
    instagram: ""         /* add your Instagram URL to show it in the dock */
  },
  stats: [
    ["9.17", "M.Tech CGPA"],
    ["4", "Research papers"],
    ["4", "Certifications"],
    ["5", "Open-source repos"]
  ],
  services: [
    { icon: "shield", title: "Vulnerability Assessment", text: "Finding what breaks a system before someone else does — the approach I sharpened at DRDL and through CEH." },
    { icon: "atom", title: "Post-Quantum Cryptography", text: "Designing with ML-DSA, Kyber and ring-LWE so today's systems stay secure against quantum-capable adversaries." },
    { icon: "radar", title: "Intrusion Detection", text: "Signature matching with Aho–Corasick and Bloom filters, backed by an ML second stage for what exact matching misses." },
    { icon: "chain", title: "Blockchain & Zero-Trust", text: "DAG ledgers, Merkle-anchored audit trails, ZK proofs and zero-trust edge architectures for IoT and payments." },
    { icon: "brain", title: "Security ML Research", text: "Reproducible experiments with multiple seeds, ablations and an honest statement of limits in every paper." },
    { icon: "cloud", title: "Cloud & Automation", text: "Azure and OCI certified, with RPA experience for automating repetitive security and ops workflows." }
  ],
  papers: [
    { id: "pqtrust", published: false, pages: 16, status: "Under supervisor review · M.Tech thesis",
      title: "PQTrust-DAG: A Post-Quantum Behavioral Trust Layer for DAG-Based Vehicular Sensor Networks",
      by: "L Dileep Sai, Uma Sankararao Varri",
      sum: "A valid signature proves who sent a reading, not whether it is true. A gateway trust manager scores every vehicle, sorts it into four tiers and weights its data, with each trust update signed by ML-DSA-65.",
      mets: [["99.7%", "attackers detected"], ["<0.1%", "honest nodes quarantined"], ["100k", "PQ signatures per run"]],
      tags: ["ML-DSA-65", "DAG ledger", "Trust", "VANET", "Python"],
      problem: "Hacked, faulty or dishonest vehicles still hold valid keys, so post-quantum authentication alone lets false data through.",
      method: "Trust from consistency and history signals, a four-tier policy with hysteresis, and trust-weighted aggregation. Compared against rebuilt Beta Reputation and RRS systems, tuned on separate seeds and tested on five new ones across five attacks with 1,000 sensors and 100 gateways.",
      limits: "Simulation only. Adding the peer-report and reliability terms lowered detection, and that negative result is reported." },
    { id: "zt-iot", published: false, pages: 7, status: "Submitted · IEEE IC4 2027",
      title: "A Zero-Trust Edge Intelligence Framework for Post-Quantum IoT Failure Prediction and Merkle-Anchored Auditing",
      by: "L Dileep Sai, K Lahari, K Sagar, R Shiny, P Nagasravanthi",
      sum: "An edge node predicts failing IoT devices and encrypts only their telemetry with ring-LWE + AES-256-GCM. Every event is hashed into a Merkle root, so on-chain storage stays flat as the fleet grows.",
      mets: [["0.939", "mean AUC"], ["87–95%", "less crypto overhead"], ["32 B", "on-chain per batch"]],
      tags: ["Ring-LWE", "AES-256-GCM", "Merkle", "Zero-trust", "Python"],
      problem: "Cloud-centric predictive maintenance adds latency and a single point of failure, and most designs ignore quantum-capable adversaries.",
      method: "Prediction-gated encryption, replay-resistant admission (Lamport signatures, nonce cache, freshness window) and Merkle-root anchoring, benchmarked against RSA-2048 and ECDH P-256, with an ablation for each component.",
      limits: "A node compromised before commitment can fabricate consistent data, and a missed prediction leaves telemetry unencrypted. Both are stated in the security analysis." },
    { id: "ids", published: false, pages: 6, status: "Under supervisor review",
      title: "Classical String Matching Meets Soft Computing: A Controlled Empirical Study of Hybrid Intrusion Detection",
      by: "L Dileep Sai, K Sagar, P Naga Venkata Sai Shankar, M Sitharam",
      sum: "KMP, Rabin–Karp, Aho–Corasick and Bloom filters make identical decisions, so measured speed decides. A two-stage detector checks learned signatures first and sends the rest to an ML classifier.",
      mets: [["1.67M", "records/s in C"], ["0.987", "best cascade F1"], ["10/10", "seeds cascade won"]],
      tags: ["Aho–Corasick", "Bloom filter", "IDS", "scikit-learn", "C"],
      problem: "Matchers are usually chosen by theoretical complexity, and the attacks exact matching misses are rarely measured.",
      method: "Label-free pseudo-packets, signatures learned from training data only, unknown attack types held out of all training, ten seeds with Wilcoxon tests, plus padding-attack and family hold-out tests on KDD Cup 99, NSL-KDD and CICIDS2017.",
      limits: "Entirely new attack families such as Bot and Infiltration are still mostly missed. Signatures describe flow properties, not payload bytes." },
    { id: "bird", published: false, pages: 9, status: "Submitted · iConCISE 2027",
      title: "A CNN-Based Bird Species Identification System for Biodiversity Monitoring Using Transfer Learning",
      by: "L Dileep Sai, P Nagasravanthi, K Sagar",
      sum: "VGG16, ResNet50 and EfficientNet-B0 trained under one protocol on all 200 species of CUB-200-2011. EfficientNet-B0 came out most accurate, smallest and fastest.",
      mets: [["73.1%", "top-1 accuracy"], ["92.8%", "top-5 accuracy"], ["64 ms", "per image on CPU"]],
      tags: ["EfficientNet-B0", "Transfer learning", "Grad-CAM", "TensorFlow"],
      problem: "Fine-grained recognition with about 30 training images per species, where look-alikes differ by a wing bar or eye ring.",
      method: "Two-stage transfer learning (frozen backbone, then partial fine-tuning), model selection on validation data only, ablations on fine-tuning and augmentation, per-species error analysis and Grad-CAM explanations.",
      limits: "The augmentation used did not improve accuracy, and that is reported. Specialised fine-grained architectures still score higher." }
  ],
  repos: [
    { name: "PQTrust-DAG", text: "Gateway trust layer for DAG-based vehicular sensor networks: scores sensors, sorts them into trust tiers and writes ML-DSA-signed trust records to a ledger.", lang: "Python", url: "https://github.com/dileepsai5607/PQTrust-DAG" },
    { name: "zero-trust-pq-iot-edge", text: "Edge prototype that predicts failing IoT devices, encrypts only their telemetry with ring-LWE + AES-256-GCM, and anchors every event in a Merkle ledger.", lang: "Python", url: "https://github.com/dileepsai5607/zero-trust-pq-iot-edge" },
    { name: "IDS-String-Matching", text: "KMP, Rabin–Karp, Aho–Corasick and Bloom-filter signature matching for intrusion detection, with an ML second stage and a C benchmark.", lang: "Python · C", url: "https://github.com/dileepsai5607/IDS-String-Matching" },
    { name: "bird-species-identification", text: "Transfer-learning classifier for 200 bird species (CUB-200-2011) comparing VGG16, ResNet50 and EfficientNet-B0, with Grad-CAM.", lang: "Python", url: "https://github.com/dileepsai5607/bird-species-identification" },
    { name: "Suraksha Pay", text: "A decentralized payment DApp using ZK-SNARKs, Polygon zkEVM and IPFS (Pinata) for private, tamper-resistant records.", lang: "TypeScript", url: "https://github.com/dileepsai5607/A-Secure-and-Privacy-Preserving-Blockchain-Based-Payment-DApp-" }
  ],
  certs: [
    { img: "ceh", iss: "EC-Council", name: "Certified Ethical Hacker (CEH)", yr: "2023", date: "Issued 28 January 2023", idLabel: "Certification no.", id: "ECC0619724835" },
    { img: "azure", iss: "Microsoft", name: "Azure Fundamentals", yr: "2024", date: "Earned 4 January 2024", idLabel: "Credential ID", id: "C2EC1B9D349D9E96", extra: ["Certification no.", "35A639-F7CAD7"] },
    { img: "oci", iss: "Oracle University", name: "OCI 2023 Certified Architect Associate", yr: "2023", date: "Issued 23 August 2023", idLabel: "Certificate no.", id: "100288822OCI2023CAA" },
    { img: "rpa", iss: "Automation Anywhere", name: "Advanced RPA Professional (A360)", yr: "2022", date: "2022", idLabel: "Certificate no.", id: "AAADVC2022A360-67108405" }
  ],
  skills: [
    { group: "Languages", items: ["Python", "C", "TypeScript", "JavaScript", "HTML / CSS", "SQL", "LaTeX"] },
    { group: "Cryptography", items: ["ML-DSA (Dilithium)", "Kyber / ML-KEM", "Ring-LWE", "AES-256-GCM", "Lamport signatures", "Merkle trees", "ZK-SNARKs"] },
    { group: "Security", items: ["Vulnerability assessment", "Ethical hacking (CEH)", "Intrusion detection", "Zero-trust design", "Aircrack-ng", "Threat modelling"] },
    { group: "ML & Data", items: ["scikit-learn", "TensorFlow / Keras", "NetworkX", "NumPy / pandas", "Grad-CAM", "Statistical testing"] },
    { group: "Blockchain", items: ["DAG ledgers", "Polygon zkEVM", "IPFS / Pinata", "Smart contracts"] },
    { group: "Cloud & Tools", items: ["Microsoft Azure", "Oracle Cloud (OCI)", "Automation Anywhere", "Git & GitHub", "Linux"] }
  ],
  experience: [
    { when: "Sep 2026 — Present", org: "XSignOn", role: "Cybersecurity Analyst Intern", now: true,
      text: "Working on the security team at XSignOn, a passwordless authentication and security company.", link: "https://xsignon.com/" },
    { when: "Aug 2025 — Present", org: "SRM University-AP", role: "M.Tech, Cybersecurity",
      text: "Graduate research on post-quantum cryptography, trust management and intrusion detection, Amaravathi.",
      points: ["CGPA 9.17", "Thesis: behavioral trust layer for post-quantum, DAG-based vehicular sensor networks", "Supervised by Dr. Uma Sankararao Varri"] },
    { when: "Internship", org: "DRDL, Hyderabad", role: "Vulnerability Assessment Intern",
      text: "Defence Research and Development Laboratory. Vulnerability assessment work that shaped how I approach every system: start by asking what breaks it." },
    { when: "2020 — 2024", org: "KL University", role: "B.Tech (Honors), Computer Science & Engineering",
      text: "Koneru Lakshmaiah (KL) University, Vijayawada.",
      points: ["CGPA 8.72", "Certified Ethical Hacker (EC-Council) earned during the degree"] }
  ],
  gallery: [
    { src: "dileep.jpg", caption: "L Dileep Sai" },
    { src: "assets/certs/ceh.jpg", caption: "Certified Ethical Hacker · EC-Council" },
    { src: "assets/certs/oci.jpg", caption: "OCI Certified Architect Associate" },
    { src: "assets/certs/azure.jpg", caption: "Microsoft Azure Fundamentals" },
    { src: "assets/certs/rpa.jpg", caption: "Advanced RPA Professional" }
  ],
  /* Scroll video: put frame_001.jpg … frame_192.jpg in assets/frames/ and they play on scroll.
     Until then a generated crimson animation is shown instead. */
  frames: { count: 192, path: "assets/frames/frame_", pad: 3, ext: ".jpg" }
};
