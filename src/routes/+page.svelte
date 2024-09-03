<script lang="ts">
    let inputText: string = "";
    let deepLink: string = "";
    let showToast = false;

    $: deepLink = getDeepLink(inputText);

    /**
     * Returns a deep link to the email based on the network response.
     * @param response - The network response.
     * @returns The deep link to the email.
     */
    function getDeepLink(response: string): string {
        const start: number = response.indexOf('"Id": "') + '"Id": "'.length;
        const end: number = response.indexOf('"', start);
        const itemId: string = response.substring(start, end);
        const encodedItemId: string = encodeURIComponent(itemId);
        return `https://outlook.office365.com/owa/?ItemID=${encodedItemId}&exvsurl=1&viewmodel=ReadMessageItem`;
    }

    /** Called when the Copy button is clicked. */
    function copyToClipboard() {
        navigator.clipboard.writeText(deepLink);
        showToast = true;
        setTimeout(() => showToast = false, 2000);  // Hide the toast after 2 seconds
    }
</script>

<div class="container mt-4">
    <h1 class="display-4 mb-4">Deep Link Creator for Outlook Emails</h1>

    <textarea
        bind:value={inputText}
        class="form-control mb-3"
        placeholder="Paste the network response here"
        rows="10"
    />

    <div class="input-group mb-3">
        <input
            type="text"
            readonly
            value={deepLink}
            class="form-control"
            style="white-space: nowrap;"
        />
        <button class="btn btn-primary" on:click={copyToClipboard}>Copy</button>
    </div>

    {#if showToast}
        <div class="toast show position-fixed bottom-0 end-0 p-3" style="z-index: 11;">
            <div class="toast-body">
                Copied!
            </div>
        </div>
    {/if}

    <h2 class="h4 mt-5">How to Use This App</h2>

    <ol>
        <li>Go to your Outlook inbox.</li>
        <li>Open the Chrome DevTools Console (press F12).</li>
        <li>Go to the Network tab.</li>
        <li>In the search bar, search for service.svc?action=GetItem.</li>
        <li>Click the email you want to get a deep link for.</li>
        <li>A new item should appear in the network traffic. Click it, then click Response.</li>
        <li>Copy and paste the entire response into the text input above.</li>
        <li>The app automatically generates a deep link to the email, which you can copy/paste elsewhere.</li>
    </ol>
</div>

