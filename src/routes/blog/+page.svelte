
## src/routes/blog/+page.svelte (Blog Index)

```svelte
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introduction to EIP-55 Checksum Addresses', description: 'Learn the basics of EIP-55 and why mixed-case checksum encoding was introduced to Ethereum addresses.' },
    { href: '/blog/posts/post2', title: 'Why Checksum Validation Matters', description: 'Discover how EIP-55 helps prevent costly transaction errors caused by address typos.' },
    { href: '/blog/posts/post3', title: 'How EIP-55 Checksum Works Under the Hood', description: 'A deep dive into the Keccak-256 hashing process that determines correct capitalization.' },
    { href: '/blog/posts/post4', title: 'Common Address Mistakes and How Checksums Catch Them', description: 'Explore real-world examples of casing errors and how validation detects them instantly.' },
    { href: '/blog/posts/post5', title: 'Validating Addresses in Wallets and DApps', description: 'Best practices for implementing EIP-55 checks in applications to protect users.' },
    { href: '/blog/posts/post6', title: 'Generating Correctly Checksummed Addresses', description: 'Step-by-step guide on producing EIP-55 compliant addresses from lowercase inputs.' },
    { href: '/blog/posts/post7', title: 'Limitations and Edge Cases of EIP-55', description: 'Understanding what checksum validation can and cannot protect against.' },
  ];
</script>

<svelte:head>
  <title>Blog | Ethereum Checksum Checker Insights</title>
  <meta name="description" content="In-depth articles about EIP-55, Ethereum address validation, checksum mechanics, and practical usage tips." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Checksum Insights</h1>
    <p class="subtitle">
      Technical deep dives, explanations, and practical guides on EIP-55 mixed-case checksum addresses and Ethereum address validation.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>