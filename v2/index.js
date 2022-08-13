const main = document.getElementById('app');

const externalHTML = `
<div class=lt-content-column>

<h2>Twibbon Generator</h2>
<p>Unggah karya seni bingkai Anda dengan latar belakang transparan sebagai File .PNG terpisah, dengan ukuran kurang dari 1 MB.</p>

<div class="lt-card lt-hover">
<p>Pastikan gambar yang di upload memiliki ukuran.</p>
<label for="photo">Upload Photo:</label><br>
<input class="lt-shadow" type="file" accept="image/*" onchange="loadFile(event)">
<label for="bingkai">Upload Bingkai:</label><br>
<input class="lt-shadow" type='file' accept="image/*" onchange="loadTemplate(event)">
<button type="button" class="lt-button" onclick="gen()">Preview</button> 
<button type="button" class="lt-del" id="open-modal">Info</button> 
</div>

<p><i class="fa fa-share-alt"></i> <code id="share-button">SHARE</code></p>
</div><!-- lt-content-column -->

<div class="lt-centre">
<p>Made with ❤️ by <a class="lt-a" target="_blank" href="https://www.facebook.com/bungferry.wa">Ferry Ayunda</a></p>
Online: <code id="count">0</code>
</div>

<!-- Info -->
<div class="modal">
<div class="modal-content">
<div class="modal-header">
<span id="close-modal" style="color: #f45;"><strong>[X]</strong></span>
<h3>Cara Membuat Twibbon</h3>
</div>
<div class="modal-body">
<p>Upload photo dan bingkai yang ingin di jadikan twibbon lalu klik 'Preview!'.</p>
<p>Pastikan gambar yang di upload memiliki ukuran.</p>
<p>Klik kanan dan save untuk PC atau sentuh dan tahan lalu download image untuk smartphone jika tombol 'Download' mati.</p>
<p>Atau pilih dari bingkai kami <a href="/">Klik disini</a>.</p>
</div>
</div>
</div>

<div id="custom-modal" class="custom-modal">
<div class="custom-modal-dialog">
<div class="custom-modal-content">
<span class="close-modal">X</span>
<div class="custom-modal-body">
<div class="custom-modal-inner">
<!-- Contetn here -->
<h4>Well Done! </h4>
<p>
<img src="/img/preview.png" class="res" id="photo" alt="Photo" style="display: none"/>
<img src="/img/twibbon.png" class="res" id="bingkai" alt="Bingkai" style="display: none"/>
<canvas class="res" id="canvas"></canvas>
</p>
<p>
<button type="button" class="lt-button" id="btndownload">Download</button>
<button type="button" class="lt-del" id="cancel" onclick="location.reload()">Hapus</button> 
</p>
</div>
</div>
</div>
</div>
</div>`;
// shows the alert
main.innerHTML = externalHTML;
