<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';

    let inputText: string = "";
    let deepLink: string = "";

    $: deepLink = getDeepLink(inputText);

    $: {
        if (inputText) {
            navigator.clipboard.writeText(deepLink);
            toast.success('Copied!');
        }
    }

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
        toast.success('Copied!');
    }
</script>

<style>
    .footer {
        margin-top: 20px;
        font-size: 0.8em;
        color: gray;
        margin: auto;
    }

    .footer a {
        color: gray;
    }
</style>

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

    <h2 class="mt-4">What Is a Deep Link?</h2>

    <p>A <b>deep link</b> is a hyperlink that directs a user to a specific location within a website rather than the landing page. For example, a deep link to an Outlook email would take you to a specific email in your Outlook, rather than just opening the inbox.</p>

    <p>Deep links are useful if you want to save a link to a specific email, whether you're adding it to your personal calendar, a document, or any personal reference.</p>

    <p>Outlook doesn't natively support creating deep links to emails (unless you use a <a href="https://www.reddit.com/r/Office365/comments/sdhels/quick_retrieve_outlook_deeplinks/">workaround</a> with the To Do app). This app provides an alternative solution.</p>

    <h2 class="mt-4">How Do I Use This?</h2>

    <ol>
        <li>Go to your Outlook inbox.</li>
        <li>Open the Chrome DevTools Console (press F12).</li>
        <li>Go to the Network tab.</li>
        <li>In the search bar, search for service.svc?action=GetItem.</li>
        <li>Click the email you want to get a deep link for.</li>
        <li>A new item should appear at the bottom of the network traffic. Click it, then click Response.</li>
        <li>Copy and paste the entire response into the text input above.</li>
        <li>The app automatically generates a deep link to the email, which you can copy/paste elsewhere.</li>
    </ol>

    <img src="/assets/screenshot.png" alt="Screenshot" class="mt-4 img-fluid" style="max-width: 100%; max-width: 800px;" />

    <Toaster />

    <footer class="footer text-center my-4">
      Made by <a href="https://kellenvu.github.io/" target="_blank" rel="noopener noreferrer">Kellen Vu</a>
    </footer>
</div>

