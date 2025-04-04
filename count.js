document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const columns = 3;
    
    // Define custom text for each cell
    const cellTexts = [
        "Oscillation. Allison Parish. Sylabus trick <br> sin + frame count",// 1
        "Oscillation. Allison Parish. Sylabus trick #2 ",// 2
        "CSS explore #1",// 3
        "CSS explore #2 ",// 4
        "CSS on native js canvas text.<br> ghost canvas ? ",// 5
        "CSS explore #3 <br> centralise ",// 6
        "CSS style text X native js Canvas ",// 7
        "CSS pseudo class X js <br> nativ canvas superflu?  ",// 8
        " typo css Adobe panel simulaton #1",// 9
        "9<br>+import from .txt #1",// 10
        "template modulaire. (sequence : DONNER A LIRE) + (style : TYPO EFFECT) ",// 11
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