<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>S.O.M Productionz</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Poppins', sans-serif;
      color: #fff;
      min-height: 100vh;
      background:
        linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.7)),
        url("https://images.unsplash.com/photo-1520975922284-8b456906c813?auto=format&fit=crop&w=1600&q=80");
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }

    /* Silhouette overlay */
    body::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right bottom;
      opacity: 0.12;
      pointer-events: none;
    }

    header {
      text-align: center;
      padding: 80px 20px 50px;
    }

    header h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.6rem;
      letter-spacing: 2px;
      margin-bottom: 12px;
    }

    header p {
      font-size: 1.15rem;
      font-weight: 300;
      opacity: 0.9;
    }

    main {
      max-width: 900px;
      margin: auto;
      padding: 30px 20px 80px;
    }

    .beat {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 25px;
      margin-bottom: 30px;
      backdrop-filter: blur(8px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    }

    .beat h2 {
      font-family: 'Playfair Display', serif;
      font-size: 1.9rem;
      margin-bottom: 8px;
    }

    .beat small {
      opacity: 0.85;
      display: block;
      margin-bottom: 15px;
    }

    audio {
      width: 100%;
      margin-bottom: 18px;
    }

    .buy-btn {
      display: inline-block;
      padding: 12px 26px;
      background: linear-gradient(135deg, #ff9966, #ff5e62);
      color: #fff;
      text-decoration: none;
      border-radius: 30px;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .buy-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    }

    footer {
      text-align: center;
      padding: 30px;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  </style>
</head>

<body>

  <header>
    <h1>S.O.M Productionz</h1>
    <p>A fantasy world for true artists</p>
  </header>

  <main>

    <div class="beat">
      <h2>Señorita</h2>
      <small>110 BPM • G Minor</small>

      <audio controls>
        <source src="senorita-preview.mp3" type="audio/mpeg">
      </audio>

      <a class="buy-btn"
         href="https://www.paypal.com/paypalme/yhanlemaofficial/25"
         target="_blank">
        Buy Beat – $25
      </a>
    </div>

  </main>

  <footer>
    © 2026 S.O.M Productionz — All rights reserved
  </footer>

</body>
</html>
