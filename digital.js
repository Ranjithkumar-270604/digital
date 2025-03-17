 const pages = ["page1", "page2", "page3", "page4", "page5", "page6"];

        pages.forEach((page, index) => {
            if (document.location.pathname.includes(page)) {
                document.body.innerHTML = `
                    <div class='container'>
                        <h1>${page}</h1>
                        ${index < pages.length - 1 ? `<button onclick='location.href="${pages[index + 1]}.html"'>Next</button>` : '<h2>End of pages!</h2>'}
                        <button onclick='location.href="index.html"'>Back to Start</button>
                    </div>
                `;
            }
        });