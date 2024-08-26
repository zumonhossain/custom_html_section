document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.querySelector('.right-sidebar');
    var currentRightValue = parseInt(getComputedStyle(sidebar).right);

    if (currentRightValue < 0) {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-300px'; // Adjust this value based on your menu width
    }
});
