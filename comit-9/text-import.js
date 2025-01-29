function setup() {
    loadStrings('import.txt', fileLoaded);
}

function fileLoaded(result) {
    document.getElementById('text-import').innerHTML = result.join('<br>');
}