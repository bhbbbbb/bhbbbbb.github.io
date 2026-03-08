<template>
  <section id="about" class="hero">
    <div class="hero-text">
      <p class="eyebrow">ML / AI Engineer</p>
      <h1>Your Name</h1>
      <p class="hero-intro">
        I build machine learning systems and practical AI applications, with interests in LLMs,
        retrieval, knowledge systems, and developer-facing tools.
      </p>

      <div class="hero-links">
        <a href="#">GitHub</a>
        <a href="#">Scholar</a>
        <a href="#">LinkedIn</a>
        <a href="#">CV</a>
      </div>
    </div>

    <div class="hero-side">
      <div class="hero-card">
        <p class="hero-card-label">Currently focused on</p>
        <ul>
          <li>LLM systems</li>
          <li>Retrieval / RAG</li>
          <li>Knowledge graphs</li>
          <li>ML engineering</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 24px;
  align-items: stretch;
  margin-bottom: 56px;
}

.hero-text,
.hero-card {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.hero-text {
  padding: 32px;
}

/* .eyebrow {
  color: var(--color-accent-text);
} */
.eyebrow {
  margin: 0 0 10px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4f46e5;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.3rem, 4vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #0f172a;
}

.hero-intro {
  max-width: 60ch;
  margin: 18px 0 0;
  font-size: 1.02rem;
  line-height: 1.75;
  color: #475569;
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-links a {
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(79, 70, 229, 0.16);
  background: rgba(79, 70, 229, 0.06);
  color: #3730a3;
  font-weight: 600;
  text-decoration: none;
  transition: 0.18s ease;
}

.hero-links a:hover {
  opacity: 0.72;
}

.hero-card {
  height: 100%;
  padding: 24px;
}

.hero-card-label {
  margin: 0 0 14px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #475569;
}

.hero-card ul {
  margin: 0;
  padding-left: 18px;
  color: #334155;
  line-height: 1.9;
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-text,
  .hero-card {
    border-radius: 16px;
  }

  .hero-text,
  .hero-card {
    padding: 22px;
  }
}
</style>
