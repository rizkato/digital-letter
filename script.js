let currentPage = 1;
let loveAnimationStarted = false;
let board;

function updatePageNumber() {
    document.getElementById('pageNumber').textContent = currentPage;
}

function startLoveAnimation() {
    if (!board) {
        const container = document.querySelector('.container');
        container.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Set your desired background color
        const love = new Love(board);
        board = new Board(Love, container);
        love.board = board;
        board.run();
    }
}

function nextPage() {
    if (currentPage < 11) {
        document.getElementById(`page${currentPage}`).style.display = 'none';
        currentPage++;
        document.getElementById(`page${currentPage}`).style.display = 'block';
        updatePageNumber();
    } else if (currentPage === 11 && !loveAnimationStarted) {
        loveAnimationStarted = true;
        startLoveAnimation();
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).style.display = 'none';
        currentPage--;
        document.getElementById(`page${currentPage}`).style.display = 'block';
        updatePageNumber();
    }
}

// Initialize page number
updatePageNumber();
