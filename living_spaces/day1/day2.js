// products = [
//     {
//         name: "Cloud Sofa",
//         category: "sofa",
//         price: 1300
//     },
//     {
//         name: "Mahogany Mesa",
//         category: "table",
//         price: 300
//     },
//     {
//         name: "Roundabout Table",
//         category: "table",
//         price: 599
//     },
//     {
//         name: "Chaise Chair",
//         category: "chair",
//         price: 299
//     }
// ]


const tabContainer = document.querySelector('.tab-container');

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const targetTabID = item.getAttribute('data-tab');

        // 1. Hide all tabs
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });

        // 2. Activate targeted tab
        const targetPanel = document.getElementById(targetTabID);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }

        // 🌟 3. Calculate Centering & Edge Clamping Math
        const itemRect = item.getBoundingClientRect();
        const containerWidth = 450; // Matches your CSS width
        const padding = 16;         // Keeps it away from browser edges

        // Find the absolute horizontal center of the hovered word
        let leftPosition = itemRect.left + (itemRect.width / 2) - (containerWidth / 2);

        // Prevent leaking past Left edge
        if (leftPosition < padding) {
            leftPosition = padding;
        }

        // Prevent leaking past Right edge
        if (leftPosition + containerWidth > window.innerWidth - padding) {
            leftPosition = window.innerWidth - containerWidth - padding;
        }

        // Set the calculated position
        tabContainer.style.left = `${leftPosition}px`;
    });
});

// Hide menu cleanly when moving away from the navbar entirely
document.querySelector('.navbar').addEventListener('mouseleave', (e) => {
    // Only close if moving mouse down away from the container bounds
    if (!e.relatedTarget || !e.relatedTarget.closest('.tab-container')) {
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    }
});

tabContainer.addEventListener('mouseleave', () => {
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
});

document.getElementById('heroImgBtn').addEventListener('click', () => {
    console.log("button clickedddd");
});