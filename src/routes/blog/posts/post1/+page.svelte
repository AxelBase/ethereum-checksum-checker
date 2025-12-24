<!-- src/routes/blog/posts/post1/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Introduction to EIP-55 Checksum Addresses | Checksum Insights</title>
  <meta name="description" content="Learn the fundamentals of EIP-55, the mixed-case checksum standard that adds a layer of error detection to Ethereum addresses." />
  <meta property="og:title" content="Introduction to EIP-55 Checksum Addresses | Checksum Insights" />
  <meta property="og:description" content="Learn the fundamentals of EIP-55, the mixed-case checksum standard that adds a layer of error detection to Ethereum addresses." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Introduction to EIP-55 Checksum Addresses</p>
  </div>

  <article class="prose">
    <h1>Introduction to EIP-55 Checksum Addresses</h1>
   
    <p class="post-meta">Published: December 24, 2025</p>
   
    <p>Ethereum addresses are 42-character hexadecimal strings that begin with 0x. On their own, they are case-insensitive, meaning that an address written in all lowercase is identical to the same address in all uppercase or any mixed case. This flexibility, while convenient, introduces a significant risk: a single character typed incorrectly can result in funds being sent to a completely different address with no warning.</p>
   
    <p>EIP-55, introduced in 2016, addresses this problem by adding a checksum to Ethereum addresses through deliberate capitalization of certain letters. The capitalization pattern is derived from a hash of the address itself, making it possible to detect most typing errors automatically. If even one character is wrong or the capitalization does not match the computed checksum, the address is flagged as invalid.</p>
   
    <h2>Why EIP-55 Was Needed</h2>
    <p>Before EIP-55, users relied entirely on careful copy-pasting or manual verification to avoid mistakes. Typos were common, especially when addresses were shared in text form or entered manually. A single flipped character could redirect transactions irreversibly. EIP-55 provides a lightweight, built-in mechanism to catch these errors without requiring additional infrastructure or changes to the protocol itself.</p>
   
    <h3>Key Advantages</h3>
    <ul>
      <li>Detects single-character errors in most cases</li>
      <li>Catches incorrect capitalization that deviates from the checksum</li>
      <li>Requires no extra data or storage on the blockchain</li>
      <li>Compatible with existing lowercase or uppercase addresses</li>
    </ul>
   
    <h3>How Users Benefit</h3>
    <p>Any wallet, dApp, or tool that implements EIP-55 validation can immediately warn users when an address appears suspicious. This simple check has prevented countless lost transactions over the years.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>What happens if I enter an address in all lowercase?</summary>
      <p>The tool will compute the correct checksum and show the properly capitalized version if the underlying address is valid.</p>
    </details>
    <details>
      <summary>Is EIP-55 mandatory?</summary>
      <p>No, the Ethereum protocol accepts any casing, but reputable wallets and interfaces enforce checksum validation for safety.</p>
    </details>
    <details>
      <summary>Can checksums prevent all errors?</summary>
      <p>No, some multi-character errors can produce another valid checksum, but EIP-55 catches the vast majority of common mistakes.</p>
    </details>
   
    <p class="italic-note">Understanding EIP-55 is the first step toward safer Ethereum interactions.</p>
  </article>
</div>

<style>
  /* Same styling as example, included in each post */
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