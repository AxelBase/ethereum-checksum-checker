<!-- src/routes/terms/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Ethereum Address Checksum Checker</title>
  <meta name="description" content="Review the Terms and Conditions for using the Ethereum Address Checksum Checker, a free client-side validation tool." />
  <meta property="og:title" content="Terms and Conditions | Ethereum Address Checksum Checker" />
  <meta property="og:description" content="Review the Terms and Conditions for using the Ethereum Address Checksum Checker, a free client-side validation tool." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 24, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Ethereum Address Checksum Checker</strong> ("the Tool"), a free, open-source, client-side web utility for validating EIP-55 checksummed Ethereum addresses, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool provides a simple interface to input Ethereum addresses and verify their mixed-case checksum according to EIP-55 standards. All processing occurs entirely in your browser. We do not provide financial advice, wallet services, or blockchain interaction.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal or professional purposes. Permitted uses include:</p>
    <ul>
      <li>Validating Ethereum addresses before transactions</li>
      <li>Educational exploration of EIP-55 mechanics</li>
      <li>Integration into personal workflows</li>
    </ul>
    <p>You agree not to use the Tool for unlawful purposes or in any way that could damage, disable, or impair its functionality.</p>

    <h2>4. No Warranty</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>without warranties</strong> of any kind, express or implied, including accuracy, reliability, or fitness for a particular purpose. While EIP-55 validation is implemented according to official specifications, <strong>we do not guarantee that it will catch all possible errors</strong> or prevent financial loss. Cryptocurrency transactions are irreversible, and you are solely responsible for verifying addresses before sending funds.</p>

    <h2>5. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Tool, including but not limited to loss of funds, data, or opportunities, even if advised of the possibility of such damages.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool is open-source and available under a permissive license (viewable on GitHub). You may fork, modify, and distribute it according to the license terms. The name "Ethereum Address Checksum Checker" and associated branding are not trademarked but should be used fairly.</p>

    <h2>7. Third-Party Links and Resources</h2>
    <p>The Tool may contain links to external sites (e.g., EIP-55 specification, ethers.js documentation). We are not responsible for the content or practices of these third-party resources.</p>

    <h2>8. Changes to the Tool</h2>
    <p>We reserve the right to modify, suspend, or discontinue the Tool at any time without notice.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by general internet usage principles and applicable open-source practices.</p>

    <h2>10. Updates to Terms</h2>
    <p>We may revise these Terms periodically. Continued use after changes constitutes acceptance of the new terms.</p>

    <p class="italic-note">Use the Ethereum Address Checksum Checker responsibly. Always double-check critical addresses through multiple sources before making transactions.</p>
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