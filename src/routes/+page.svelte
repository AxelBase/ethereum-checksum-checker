<!-- src/routes/+page.svelte (updated with full sections) -->

<script lang="ts">
  import { base } from '$app/paths';
  import { validateAddressChecksum } from '$lib/checksum';
  import { fade } from 'svelte/transition';

  let address: string = '';
  let result: { isValid: boolean; checksummed?: string; error?: string } | null = null;

  function check() {
    if (address.trim() === '') {
      result = { isValid: false, error: 'Please enter an address' };
      return;
    }
    result = validateAddressChecksum(address);
  }
</script>

<section class="py-5 text-center">
  <div class="card border-0 shadow-lg p-4 p-md-5 mx-auto" style="max-width: 700px; border-radius: 30px;">
    <h1 class="mb-4 fw-bold">Ethereum Checksum Checker</h1>
    <p class="text-muted mb-4">Ensure your ETH transactions are safe by validating address casing.</p>
    
    <form on:submit|preventDefault={check}>
      <div class="mb-4">
        <input 
          type="text" 
          class="form-control form-control-lg text-center" 
          id="address" 
          bind:value={address} 
          placeholder="0x1234567890AbCdEf..."
        >
      </div>
      <button type="submit" class="btn-bubbly btn-lg w-100">Validate Checksum</button>
    </form>

    {#if result}
      <div class="mt-4" in:fade>
        {#if result.error}
          <div class="alert alert-danger rounded-4">{result.error}</div>
        {:else if result.isValid}
          <div class="alert alert-success rounded-4">✨ Valid Checksum!</div>
        {:else}
          <div class="alert alert-warning rounded-4">
            <strong>Invalid Casing.</strong><br> Corrected: <code class="d-block mt-2">{result.checksummed}</code>
          </div>
        {/if}
        <p class="mt-2 small text-muted"><strong>Input:</strong> {address}</p>
      </div>
    {/if}
  </div>
</section>

<hr class="my-5 opacity-10">

<section id="about" class="py-5 container">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <h2 class="fw-bold text-center mb-4" style="color: var(--honey-yellow);">About This Tool</h2>
      <div class="prose mx-auto">
        <p>The Ethereum Checksum Checker is a lightweight, fully client-side web utility designed to validate Ethereum addresses according to the EIP-55 mixed-case checksum standard. Introduced in 2016, EIP-55 adds a deliberate capitalization pattern to Ethereum addresses, enabling instant detection of most typing errors without changing the underlying protocol.</p>

        <p>Ethereum addresses are case-insensitive at the protocol level—any mix of upper and lower case represents the same destination. This flexibility, while convenient, creates a significant risk: a single mistyped character can send funds to an entirely different address with no warning. Over the years, millions of dollars in cryptocurrency have been lost to such errors, often discovered only after irreversible transactions were confirmed.</p>

        <p>EIP-55 addresses this vulnerability by embedding a checksum directly into the address through selective capitalization of hexadecimal letters (a–f). The pattern is derived from a Keccak-256 hash of the lowercase address. If even one character is incorrect or the capitalization deviates from the expected pattern, the checksum fails, alerting the user immediately.</p>

        <p>This tool implements the official EIP-55 specification using the ethers.js library for accurate validation. All processing occurs entirely in your browser—no data is sent to servers, stored, or logged. The application is stateless and privacy-focused, making it safe for validating even sensitive addresses.</p>

        <p>Beyond basic validation, the tool provides helpful feedback: valid addresses receive confirmation, invalid casing is flagged with the correctly checksummed version displayed, and format errors (wrong length, invalid characters) are clearly identified. This immediate, visual response helps users correct mistakes before broadcasting transactions.</p>

        <p>The utility follows the original Software Requirements Specification (SRS) precisely: limited to three core pages (home validator, about, examples), exactly three functional requirements (input/validation, result display, navigation), and a single source file for all checksum logic. It is built with SvelteKit for static deployment on GitHub Pages, ensuring fast, reliable access worldwide.</p>

        <p>By promoting checksum awareness and providing a simple validation interface, this tool contributes to safer Ethereum interactions for developers, traders, and everyday users alike.</p>
      </div>
    </div>
  </div>
</section>

<section id="how-to-use" class="py-5 container bg-light rounded-4">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <h2 class="fw-bold text-center mb-4" style="color: var(--honey-yellow);">How to Use</h2>
      <div class="prose mx-auto">
        <p>Using the Ethereum Checksum Checker is straightforward and requires no account or installation. Follow these steps to validate any Ethereum address quickly and confidently.</p>

        <p>First, obtain the address you wish to verify. This could be a recipient address for a transfer, a contract address, or one provided by an exchange or dApp. Always copy it directly from a trusted source to minimize initial errors.</p>

        <p>Next, paste the address into the large input field at the top of this page. The field accepts addresses in any casing—uppercase, lowercase, or mixed. You can paste using right-click or keyboard shortcuts (Ctrl+V / Cmd+V). The tool will automatically trim whitespace.</p>

        <p>Click the "Validate Checksum" button or simply press Enter. Validation occurs instantly in your browser using the EIP-55 algorithm. No network requests are made, ensuring both speed and privacy.</p>

        <p>The result appears immediately below the form:</p>

        <ul>
          <li><strong>Green success alert</strong>: The address has a valid checksum—casing matches the computed pattern perfectly. You can proceed with confidence.</li>
          <li><strong>Yellow warning alert</strong>: The address is structurally valid but has incorrect casing. The correctly checksummed version is displayed for easy copying.</li>
          <li><strong>Red danger alert</strong>: The input fails basic format checks (wrong length, missing 0x prefix, non-hexadecimal characters) or is empty.</li>
        </ul>

        <p>In all cases, your original input is shown for reference. For invalid casing, copy the corrected address provided—this version includes the proper checksum while representing the same destination.</p>

        <p>Best practices include validating addresses at multiple stages: when copying from a source, after pasting into a wallet, and immediately before confirming a transaction. Many modern wallets perform this check automatically, but manual verification with this tool adds an extra safety layer.</p>

        <p>The tool works offline once loaded and is fully responsive on mobile devices. Bookmark it for quick access during transactions.</p>

        <p>Remember that while EIP-55 catches most common typos, it is not foolproof against sophisticated multi-character errors or cross-chain mistakes. Always double-check the first and last few characters visually, and use additional safeguards like small test transactions when sending significant amounts.</p>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="py-5 container">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <h2 class="fw-bold text-center mb-4" style="color: var(--honey-yellow);">Frequently Asked Questions</h2>
      <div class="accordion accordion-flush" id="faqAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              What exactly is an EIP-55 checksum?
            </button>
          </h2>
          <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              EIP-55 is a standard that encodes a checksum into Ethereum addresses through selective capitalization of letters a–f. The pattern is derived from a Keccak-256 hash of the lowercase address, allowing tools to detect most typing errors instantly.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Does capitalization matter in Ethereum addresses?
            </button>
          </h2>
          <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              At the protocol level, no—Ethereum treats all casing as identical. However, correct capitalization according to EIP-55 serves as a safety check. Reputable wallets and tools enforce it to prevent errors.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              Is my address sent to a server?
            </button>
          </h2>
          <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. This tool is 100% client-side. All validation happens in your browser using JavaScript. Nothing is transmitted, stored, or logged.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
              Why does the tool show a corrected address?
            </button>
          </h2>
          <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              If the underlying address is valid but the casing is wrong, the tool computes and displays the proper EIP-55 checksummed version for safe copying and use.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
              Can checksums prevent all mistakes?
            </button>
          </h2>
          <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. While highly effective against single-character and most common errors, some multi-character changes can coincidentally produce valid checksums. Always verify addresses through multiple methods.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
              Do all wallets support EIP-55 validation?
            </button>
          </h2>
          <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Most modern wallets (MetaMask, Ledger, Trust Wallet, etc.) enforce checksum validation and display warnings for mismatches.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>