<h1 align="center">Outdated</h1>
<p align="center">Webui v1.1 and onwards now natively backups the versions</p>

# SD Webui Version Cache
This is an Extension for the [Automatic1111 Webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui), that caches the versions of all installed Extensions when you try to update them.
So that you will know which working versions to revert to, in the event that new versions don't function correctly.

## How to Use ?
- When you click the `Check for updates` button in the `Extensions` tab, this will generate a link where you can download the cached versions in `.csv` format.
  - Alternatively, you can edit the `.js` script and set `autoDownload` to `true`