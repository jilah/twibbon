const main = document.getElementById('root');

const externalHTML = `
<div class=lt-content-column>

<h2>Twibbon Generator</h2>
<p>Ini adalah situs web tempat Anda dapat menambahkan foto ke dalam bingkai.</p>

<div class="lt-card lt-hover">
<p>Pastikan gambar yang di upload memiliki ukuran.</p>
<label for="photo">Upload Photo:</label><br>
<input class="lt-shadow" id="fileInput" type="file" />
<p>Donasi; <a href="https://saweria.co/bungferry">Saling berbagi itu indah, berapa rupiah pun yang penting ikhlas.</a></p>
<button type="button" class="lt-button" id="dpwload" onclick="drawImage()">Preview</button> 
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
<p>Upload photo atau gambar yang ingin di jadikan twibbon lalu klik 'Preview!'.</p>
<p>Pastikan gambar yang di upload memiliki ukuran.</p>
<p>Klik kanan dan save untuk PC atau sentuh dan tahan lalu download image untuk smartphone jika tombol 'Download' mati.</p>
<p>Atau unggah karya seni bingkai Anda dengan latar belakang transparan sebagai File .PNG terpisah, dengan ukuran kurang dari 1 MB <a href="/v2">Klik disini.</a>.</p>
</p>
</div>
</div>
</div>

<!-- Result -->
<div id="custom-modal" class="custom-modal">
<div class="custom-modal-dialog">
<div class="custom-modal-content">
<span class="close-modal">X</span>
<div class="custom-modal-body">
<div class="custom-modal-inner">
<!-- Contetn here -->
<h4>Well Done! </h4>
<p>
<img id="preview" src="img/preview.png"/>
<img id="twibbon" src="img/twibbon.png" style="display: none"/>
<canvas id="bungferry" style="width: 300px; height: 300px; display: none"></canvas>
</p>
<p>Donasi; <a href="https://saweria.co/bungferry">Saling berbagi itu indah, berapa rupiah pun yang penting ikhlas.</a></p>
<p>
<a class="lt-button" href="#" id="dpwload2" download="TWIBBON.PAGES.DEV.png" style="display: none">Download</a>
<button type="button" class="lt-del" id="cancel" onclick="location.reload()">Hapus</button> 
</p>
</div>
</div>
</div>
</div>
</div>`;
// shows the alert
main.innerHTML = externalHTML;
