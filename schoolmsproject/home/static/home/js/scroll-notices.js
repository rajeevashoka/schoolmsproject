document.addEventListener("DOMContentLoaded", function () {
    const noticeList = document.querySelector(".notice-list");
    const notices = document.querySelectorAll(".notice-item");

    let index = 0;

    function scrollNotices() {
        const firstNotice = noticeList.firstElementChild;

        noticeList.appendChild(firstNotice.cloneNode(true)); // Clone and append the first notice to the end
        firstNotice.remove(); // Remove the original first notice

        index = (index + 1) % notices.length; // Keep track cyclically
    }

    setInterval(scrollNotices, 1000); // Adjust timing as needed
});
