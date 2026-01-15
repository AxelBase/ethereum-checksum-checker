<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();
  const bmacUsername = 'axelbase';           // ← update if different
  const bitcoinAddress = 'bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9';

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar sticky-top">
  <nav class="container d-flex justify-content-between align-items-center">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 40px; width: auto;" />
        <span class="ms-2 fw-bold fs-4" style="color: var(--honey-yellow);">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="btn-bubbly d-flex align-items-center gap-2 py-1 px-3 fs-6"
          on:click={toggleDropdown}
          aria-label="Support AxelBase"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.21,8H16.8A5.11,5.11,0,0,0,12.5,3a5.15,5.15,0,0,0-4.3,2.12A5.11,5.11,0,0,0,4,8H3.79A2.79,2.79,0,0,0,1,10.79V12a10,10,0,0,0,10,10c4.14,0,7.74-2.52,9.29-6.1A3.79,3.79,0,0,0,23,12.21V10.79A2.79,2.79,0,0,0,20.21,8ZM11,20a8,8,0,0,1-8-8V10.79a.79.79,0,0,1,.79-.79H12.5a3.11,3.11,0,1,1,0,6.22H11a1,1,0,0,0,0,2Zm9.21-7.79A1.79,1.79,0,0,1,18.42,14H16.8a5.11,5.11,0,0,0-4.3,2.12,10.11,10.11,0,0,1,4.3-8.33,1,1,0,0,0,.5-.87V10h3.21a.79.79,0,0,1,.79.79Z"/>
          </svg>
          Coffee
        </button>

        {#if isDropdownOpen}
          <div 
            class="bmac-dropdown mt-2" 
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a 
              href="https://buymeacoffee.com/{bmacUsername}" 
              target="_blank" 
              rel="noopener noreferrer" 
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>
            
            <a 
              href="https://buymeacoffee.com/{bmacUsername}" 
              target="_blank" 
              rel="noopener noreferrer" 
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>
            
            <a 
              href="https://buymeacoffee.com/{bmacUsername}" 
              target="_blank" 
              rel="noopener noreferrer" 
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a 
              href="https://buymeacoffee.com/{bmacUsername}" 
              target="_blank" 
              rel="noopener noreferrer" 
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a 
              href="bitcoin:{bitcoinAddress}?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Buy via Bitcoin
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav gap-4 d-none d-lg-flex">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main class="container my-5">
  <slot />
</main>

<footer class="fixed-footer fixed-bottom">
  <div class="container d-flex justify-content-between align-items-center">
    <span>© AxelBase Ethereum Address Checksum Checker – {currentYear}</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-decoration-none text-muted hover-honey">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted hover-honey">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* Keep most of your existing app.css styles */
  /* We just enhance the dropdown to feel more like File 1 while staying in honey theme */

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(169, 131, 7, 0.18);
    overflow: hidden;
    border: 1px solid rgba(169, 131, 7, 0.12);
    z-index: 1000;
    margin-top: 8px;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 20px;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.96rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--honey-soft);
    color: var(--honey-yellow);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--honey-yellow);
    font-size: 1.08rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--honey-yellow);
    border-top: 1px solid rgba(169, 131, 7, 0.12);
    justify-content: center !important;
    padding: 12px 20px;
  }

  .bitcoin-option {
    font-size: 0.94rem;
    color: #f7931a !important;          /* bitcoin orange */
  }

  .bitcoin-option:hover {
    background: rgba(247, 147, 26, 0.08) !important;
    color: #f7931a !important;
  }
</style>