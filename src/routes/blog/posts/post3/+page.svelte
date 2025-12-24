<!-- src/routes/blog/posts/post3/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How EIP-55 Checksum Works Under the Hood | Checksum Insights</title>
  <meta name="description" content="A technical breakdown of the Keccak-256 hashing process used to generate and verify EIP-55 mixed-case checksum addresses." />
  <meta property="og:title" content="How EIP-55 Checksum Works Under the Hood | Checksum Insights" />
  <meta property="og:description" content="A technical breakdown of the Keccak-256 hashing process used to generate and verify EIP-55 mixed-case checksum addresses." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How EIP-55 Checksum Works Under the Hood</p>
  </div>

  <article class="prose">
    <h1>How EIP-55 Checksum Works Under the Hood</h1>
   
    <p class="post-meta">Published: December 24, 2025</p>
   
    <p>EIP-55 checksum encoding is elegant in its simplicity. It uses the Keccak-256 hash of the lowercase address to determine which hexadecimal letters should be capitalized. This creates a self-validating pattern that can detect errors without adding any extra data to the address itself.</p>
   
    <p>The process begins by taking the 40-character hexadecimal portion of the address (excluding the 0x prefix) and converting it entirely to lowercase. This normalized form is then hashed using Keccak-256, the same hash function used throughout Ethereum. The resulting 32-byte hash is interpreted as a series of bits that dictate capitalization.</p>
   
    <h2>The Algorithm Step by Step</h2>
    <p>For each character in the original address, the corresponding nibble (4 bits) from the hash is examined. If the nibble value is 8 or greater, the character is capitalized; otherwise, it remains lowercase. This rule applies only to letters a through f; digits remain unchanged.</p>
   
    <h3>Verification Process</h3>
    <ul>
      <li>Normalize the input address to lowercase</li>
      <li>Compute the Keccak-256 hash of the normalized address</li>
      <li>Use hash nibbles to determine expected capitalization</li>
      <li>Compare expected pattern with the input casing</li>
    </ul>
   
    <h3>Why Keccak-256?</h3>
    <p>Keccak-256 provides strong distribution properties, ensuring that small changes in the address produce dramatically different capitalization patterns. This makes it highly effective at catching random typos.</p>
   
    <p>The beauty of EIP-55 lies in its compatibility. Any valid checksummed address, when lowercased, remains a perfectly valid Ethereum address. Tools can choose to display the checksummed version for safety while still using the canonical lowercase form internally.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Is the checksum deterministic?</summary>
      <p>Yes, the same address always produces the same capitalization pattern.</p>
    </details>
    <details>
      <summary>Does capitalization affect the actual address?</summary>
      <p>No, Ethereum treats all casing as identical; the pattern is purely for error detection.</p>
    </details>
    <details>
      <summary>Can I implement this myself?</summary>
      <p>Absolutely—libraries like ethers.js provide built-in functions for checksum encoding and validation.</p>
    </details>
   
    <p class="italic-note">The elegance of EIP-55 demonstrates how a small cryptographic touch can greatly improve usability and safety.</p>
  </article>
</div>

<style>
  /* Identical styling repeated for consistency */
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
  .prose h1, .prose h2, .prose h3 {
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
  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }
  .prose details[open] {
    background-color: var(--card-bg);
  }
  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }
  .prose summary::-webkit-details-marker {
    display: none;
  }
  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .prose details[open] summary::before {
    transform: rotate(45deg);
  }
  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }
  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>