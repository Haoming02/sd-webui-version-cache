# SD Webui Version Cache
This is an Extension for the [Automatic1111 Webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui), that caches the versions of all installed Extensions when you try to update them.
So that you will know which working versions to revert to, in the event that new versions don't function correctly.

**Note:** More useful for webui version `1.0.x`, as version `1.1.x` and onwards now include a button to backup extensions natively.  

## How to Use ?
- When you click the `Check for updates` button in the `Extensions` tab, this will generate a link where you can download the cached versions in `.csv` format.
  - Alternatively, you can edit the `.js` script and set `autoDownload` to `true`