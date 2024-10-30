
// Función para cargar el perfil de Instagram en un iframe
function mostrarInstagram() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>Mi Instagram</h2>
        <div class="iframe-container">
            <iframe src="https://www.instagram.com/karls__l?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" width="100%" height="500px" style="border:none;"></iframe>
        </div>
    `;
}

function mostrarInstagramArte() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>Mi Instagram de Arte</h2>
        <div class="iframe-container">
            <iframe src="https://www.instagram.com/im_karls__l?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="></iframe>
        </div>
    `;
}

function mostrarTikTok() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>Mi Tik Tok</h2>
        <div class="iframe-container">
            <iframe src="https://www.tiktok.com/@karls__l?is_from_webapp=1&sender_device=pc" width="100%" height="500px" style="border:none;"></iframe>
        </div>
    `;
}

function mostrarTwitch() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>Mi Twitch</h2>
        <div class="iframe-container">
            <iframe src="https://www.twitch.tv/karls__l" width="100%" height="500px" style="border:none;"></iframe>
        </div>
    `;
}

function mostrarPlaylist(){
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
    <h2> Mi Spotify </h2>
    <div class = "iframe-container">
        <iframe src="https://open.spotify.com/user/ua5xnpwj2x8v2xpewilrwvuth?si=851062f823ce4b28" width="100%" height="500px" style="border:none;"></iframe>
        </div>
    `;
}


function mostrarVideo() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <h2>Video Reciente</h2>
        <div class="video-container">
            <video controls>
                <source src="./Videos/ultimovideo.mp4" type="video/mp4">
                Tu navegador no soporta la reproducción de videos.
            </video>
        </div>
    `;
}
