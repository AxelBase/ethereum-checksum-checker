<!-- src/routes/privacy/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Ethereum Address Checksum Checker</title>
  <meta name="description" content="Read our Privacy Policy to understand how the Ethereum Address Checksum Checker handles your data with a strict no-collection approach." />
  <meta property="og:title" content="Privacy Policy | Ethereum Address Checksum Checker" />
  <meta property="og:description" content="Read our Privacy Policy to understand how the Ethereum Address Checksum Checker handles your data with a strict no-collection approach." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 24, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Ethereum Address Checksum Checker</strong>, a fully client-side web utility ("the Tool") designed to validate Ethereum addresses according to the EIP-55 mixed-case checksum standard. This Privacy Policy explains our data practices when you use the Tool. We are deeply committed to user privacy and operate under a <strong>zero-data-collection principle</strong>. Because the Tool runs entirely in your browser, <strong>we do not collect, store, transmit, or process any personal information</strong>. This policy provides full transparency about our approach.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The Tool is built to function without gathering any data from users. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: Names, email addresses, wallet addresses (beyond temporary client-side processing), or any identifying details.</li>
      <li><strong>Usage or Device Data</strong>: IP addresses, browser type, operating system, device identifiers, or geolocation information.</li>
      <li><strong>Input Content</strong>: Any Ethereum address you enter is processed exclusively in your browser and never sent to our servers or third parties.</li>
      <li><strong>Analytics or Tracking Data</strong>: We do not use cookies, pixels, web beacons, or any analytics services such as Google Analytics.</li>
    </ul>
    <p>All validation occurs <strong>locally on your device</strong>, ensuring complete data isolation.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use the Ethereum Address Checksum Checker:</p>
    <ul>
      <li><strong>Client-Side Processing</strong>: Address input and EIP-55 validation (using Keccak-256 hashing) happen entirely via JavaScript in your browser.</li>
      <li><strong>No Network Requests</strong>: No data is transmitted over the internet during normal use. Results are displayed instantly without server interaction.</li>
      <li><strong>Temporary Memory Only</strong>: Any address you enter exists only in browser memory during your session and is cleared on page refresh or closure.</li>
    </ul>
    <p>This design makes the Tool ideal for validating sensitive addresses without privacy risks.</p>

    <h2>4. Third-Party Services</h2>
    <p>We do not integrate any third-party analytics, advertising, or tracking services. The Tool loads minimal dependencies (Bootstrap via CDN for styling, ethers.js for checksum utilities) that do not track users or send personal data.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>The Tool is <strong>completely stateless</strong> and <strong>does not use cookies</strong> or any tracking technologies.</p>

    <h2>6. Data Security</h2>
    <p>Since no data leaves your device, we cannot access or compromise it. We recommend using the Tool on trusted devices and keeping your browser updated.</p>

    <h2>7. Children's Privacy</h2>
    <p>The Tool is not directed at children under 13. We do not knowingly collect data from children.</p>

    <h2>8. International Compliance</h2>
    <p>By collecting no data, the Tool inherently complies with global privacy regulations including <strong>GDPR</strong>, <strong>CCPA</strong>, and similar laws.</p>

    <h2>9. Changes to This Policy</h2>
    <p>We may update this Privacy Policy occasionally. Changes will be reflected here with a new effective date.</p>

    <h2>10. Contact</h2>
    <p>For questions about this policy, please open an issue on our GitHub repository.</p>

    <p class="italic-note">Your privacy is our priority. By using the Ethereum Address Checksum Checker, you acknowledge this <strong>no-collection policy</strong> that keeps your data entirely private.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>