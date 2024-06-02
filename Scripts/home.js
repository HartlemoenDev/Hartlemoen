function MoveSidebar(){
    var e = document.getElementById('Sidebar');

    e.style.right = '5px';
}

function CloseSidebar(){
    var e = document.getElementById('Sidebar');

    e.style.right = '-240px';
}



document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement) {
                // Scroll to the top of the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }

           
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');

    // Function to scroll to a specific element
    function scrollToElement(element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 200
        });
        console.log("aaaa");
    }

    // Function to handle search input
    function handleSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        console.log("Search term:", searchTerm);
        const elements = document.body.querySelectorAll('*');

        elements.forEach(element => {
            if (element.textContent.toLowerCase().includes(searchTerm)) {
                console.log("Found:", element.textContent.trim());
                scrollToElement(element.parentElement);
                return;
            }
        });
    }

    // Event listener for input events
    searchInput.addEventListener('keyup', handleSearch);
});