<template>
  <header class="header">
    <div class="inner">
      <a class="brand" href="#about">Your Name</a>

      <nav class="nav">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#publications">Publications</a>
        <a href="#projects">Projects</a>
        <a href="#others">Others</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(245, 247, 251, 0.78);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
}

.inner {
  width: min(980px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
  text-decoration: none;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.nav a {
  text-decoration: none;
  color: #475569;
  font-weight: 600;
  font-size: 0.95rem;
  transition: 0.18s ease;
}

.nav a:hover {
  color: #111827;
}

@media (max-width: 720px) {
  .inner {
    min-height: auto;
    padding: 14px 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    gap: 14px;
  }
}
</style>
