const beats = [
  {
    name: "Senorita",
    bpm: "110",
    key: "G minor",
    preview: "Senorita (tagged).mp3",
    price: "25",
    paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=yhanlemaofficial@gmail.com&item_name=Senorita+Beat&amount=25&currency_code=USD"
  }
];

const container = document.getElementById("beats");

beats.forEach(beat => {
  const div = document.createElement("div");
  div.className = "beat";

  div.innerHTML = `
    <h2>${beat.name}</h2>
    <p>$${beat.price} · ${beat.bpm} BPM · ${beat.key}</p>
    <audio controls src="${beat.preview}"></audio>
    <a class="buy-btn" href="${beat.paypal}" target="_blank">
      <img src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" />
    </a>
    <p style="font-size:12px;opacity:0.8;">
      Non-exclusive license. All publishing & ownership remain with S.O.M Productionz.
    </p>
  `;

  container.appendChild(div);
});
