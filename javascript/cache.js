class LeCacher {
	static injectButton({ onClick }) {
		const container = document.getElementById("extensions_installed_top")
		const button = container.querySelector(".lg.secondary.gradio-button.svelte-1ipelgc")
		button.addEventListener('click', onClick)
	}
}

onUiLoaded(async () => {

	// ===== SETTING =====
	const autoDownload = false // true
	// ===== SETTING =====

	LeCacher.injectButton({
		onClick: () => {
			const container = document.getElementById("extensions_installed_top")
			const table = document.getElementById("extensions")
			const built_in = 5

			var csvContent = "data:text/csv;charset=utf-8,"

			for (var i = 0; i < table.rows.length - built_in; i++) {
				csvContent += table.rows[i].cells[0].innerText + ", " + table.rows[i].cells[2].innerText.slice(0, 8) + "\n"
			}

			var link = document.createElement("a")
			link.setAttribute("href", encodeURI(csvContent))
			link.setAttribute("download", "version_cache.csv")

			if (autoDownload) {
				link.style.display = "none";
			}
			else {
				link.innerText = "Download Version Cache"
				link.style.textDecoration = "underline"
			}

			container.querySelector(".form").appendChild(link)

			if (autoDownload)
				link.click()
		}
	})
})