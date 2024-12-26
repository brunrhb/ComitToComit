document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const columns = 3;
    
    // Define custom text for each cell
    const cellTexts = [
        "lorem ipsum",// 1
        " ",// 2
        " ",// 3
        " ",// 4
        " ",// 5
        " "// 6
    ];
    
    let count = 1;
    const itemsArray = Array.from(gridItems);
    const rows = Math.ceil(itemsArray.length / columns);
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const index = row * columns + col;
            if (itemsArray[index]) {
                const cellText = cellTexts[index] || `Cell ${count}`;
                itemsArray[index].innerHTML = `
                    <a href="comit-${count}/comit${count}.html">
                        <span class="cell-number">${count}</span>
                        <span class="cell-text">${cellText}</span>
                    </a>
                `;
                itemsArray[index].classList.add('numbered-cell');
                count++;
            }
        }
    }
});