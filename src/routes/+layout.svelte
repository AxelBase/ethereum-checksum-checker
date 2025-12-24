<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const paypalUsername = 'AxelLab427'; // Update this later
  const donationAmounts = [1, 3, 5, 10];
  const currentYear = new Date().getFullYear();

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
        <button class="btn-bubbly d-flex align-items-center gap-2 py-1 px-3 fs-6" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.21,8H16.8A5.11,5.11,0,0,0,12.5,3a5.15,5.15,0,0,0-4.3,2.12A5.11,5.11,0,0,0,4,8H3.79A2.79,2.79,0,0,0,1,10.79V12a10,10,0,0,0,10,10c4.14,0,7.74-2.52,9.29-6.1A3.79,3.79,0,0,0,23,12.21V10.79A2.79,2.79,0,0,0,20.21,8ZM11,20a8,8,0,0,1-8-8V10.79a.79.79,0,0,1,.79-.79H12.5a3.11,3.11,0,1,1,0,6.22H11a1,1,0,0,0,0,2Zm9.21-7.79A1.79,1.79,0,0,1,18.42,14H16.8a5.11,5.11,0,0,0-4.3,2.12,10.11,10.11,0,0,1,4.3-8.33,1,1,0,0,0,.5-.87V10h3.21a.79.79,0,0,1,.79.79Z"/>
          </svg>
          Coffee
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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
  .hover-honey:hover {
    color: var(--honey-yellow) !important;
  }
</style>