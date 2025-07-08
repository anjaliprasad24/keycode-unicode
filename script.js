const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    const unicode = event.key.length === 1 ? event.key.charCodeAt(0) : 'N/A';
    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>KEY</small>
        </div>

        <div class="key">
            ${event.code}
            <small>CODE</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>KEYCODE</small>
        </div>

        <div class="key">
            ${unicode}
            <small>UNICODE</small>
        </div>
    `;
});