// ========== SERVICES DATA STRUCTURE ==========
// CDN Images: 150x150px dari Icons8
const SERVICES = [
  {
    id: 'canva',
    name: 'CANVA PRO',
    color: 'purple',
    borderColor: 'border-purple-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(128,0,255,0.35)] hover:shadow-[0_0_45px_rgba(200,0,255,0.55)]',
    textGradient: 'from-fuchsia-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/canva.png',
    templateId: 'fmt-canva'
  },
  {
    id: 'yt',
    name: 'YOUTUBE PREMIUM',
    color: 'red',
    borderColor: 'border-red-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(255,0,0,0.35)] hover:shadow-[0_0_45px_rgba(255,50,50,0.55)]',
    textGradient: 'from-red-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/youtube.png',
    templateId: 'fmt-yt'
  },
  {
    id: 'vidio',
    name: 'VIDIO PREMIER',
    color: 'blue',
    borderColor: 'border-blue-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(0,120,255,0.35)] hover:shadow-[0_0_45px_rgba(0,150,255,0.55)]',
    textGradient: 'from-blue-400 to-cyan-500',
    image: 'https://img.icons8.com/color/150/streaming.png',
    templateId: 'fmt-vidio'
  },
  {
    id: 'netflix',
    name: 'NETFLIX PREMIUM',
    color: 'red',
    borderColor: 'border-red-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(255,0,0,0.35)] hover:shadow-[0_0_45px_rgba(255,50,50,0.55)]',
    textGradient: 'from-red-400 to-red-600',
    image: 'https://img.icons8.com/color/150/netflix.png',
    templateId: 'fmt-netflix'
  },
  {
    id: 'capcut',
    name: 'CAPCUT PREMIUM',
    color: 'purple',
    borderColor: 'border-purple-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(128,0,255,0.35)] hover:shadow-[0_0_45px_rgba(200,0,255,0.55)]',
    textGradient: 'from-purple-300 to-pink-400',
    image: 'https://img.icons8.com/color/150/capcut.png',
    templateId: 'fmt-capcut'
  },
  {
    id: 'gpt',
    name: 'CHAT GPT',
    color: 'emerald',
    borderColor: 'border-emerald-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.55)]',
    textGradient: 'from-emerald-300 to-teal-400',
    image: 'https://img.icons8.com/color/150/chatgpt.png',
    templateId: 'fmt-gpt'
  },
  {
    id: 'wetv',
    name: 'WETV PREMIUM',
    color: 'emerald',
    borderColor: 'border-emerald-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.55)]',
    textGradient: 'from-emerald-300 to-green-400',
    image: 'https://img.icons8.com/color/150/video.png',
    templateId: 'fmt-wetv'
  },
  {
    id: 'bstation',
    name: 'BSTATION PREMIUM',
    color: 'indigo',
    borderColor: 'border-indigo-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.55)]',
    textGradient: 'from-indigo-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/movie.png',
    templateId: 'fmt-bstation'
  },
  {
    id: 'strava',
    name: 'STRAVA PREMIUM',
    color: 'orange',
    borderColor: 'border-orange-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)]',
    textGradient: 'from-orange-400 to-red-500',
    image: 'https://img.icons8.com/color/150/strava.png',
    templateId: 'fmt-strava'
  },
  {
    id: 'spotify',
    name: 'SPOTIFY PREMIUM',
    color: 'green',
    borderColor: 'border-green-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_45px_rgba(34,197,94,0.55)]',
    textGradient: 'from-green-400 to-emerald-500',
    image: 'https://img.icons8.com/color/150/spotify.png',
    templateId: 'fmt-spotify'
  },
  {
    id: 'zoom',
    name: 'ZOOM MEETING PRO',
    color: 'cyan',
    borderColor: 'border-cyan-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.55)]',
    textGradient: 'from-cyan-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/zoom.png',
    templateId: 'fmt-zoom'
  },
  {
    id: 'vision',
    name: 'VISION+ PREMIUM',
    color: 'pink',
    borderColor: 'border-pink-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:shadow-[0_0_45px_rgba(236,72,153,0.55)]',
    textGradient: 'from-pink-400 to-rose-500',
    image: 'https://img.icons8.com/color/150/eye.png',
    templateId: 'fmt-vision'
  },
  {
    id: 'hbomax',
    name: 'HBO MAX PREMIUM',
    color: 'purple',
    borderColor: 'border-purple-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(128,0,255,0.35)] hover:shadow-[0_0_45px_rgba(200,0,255,0.55)]',
    textGradient: 'from-purple-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/hbo.png',
    templateId: 'fmt-hbomax'
  },
  {
    id: 'fizzo',
    name: 'FIZZO NOVEL',
    color: 'violet',
    borderColor: 'border-violet-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.55)]',
    textGradient: 'from-violet-400 to-purple-500',
    image: 'https://img.icons8.com/color/150/book.png',
    templateId: 'fmt-fizzo'
  },
  {
    id: 'iqiyi',
    name: 'IQIYI PREMIUM',
    color: 'indigo',
    borderColor: 'border-indigo-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.55)]',
    textGradient: 'from-indigo-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/video.png',
    templateId: 'fmt-iqiyi'
  },
  {
    id: 'loklok',
    name: 'LOKLOK PREMIUM',
    color: 'fuchsia',
    borderColor: 'border-fuchsia-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:shadow-[0_0_45px_rgba(217,70,239,0.55)]',
    textGradient: 'from-fuchsia-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/video-playlist.png',
    templateId: 'fmt-loklok'
  },
  {
    id: 'apple',
    name: 'APPLE MUSIC',
    color: 'gray',
    borderColor: 'border-gray-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(107,114,128,0.35)] hover:shadow-[0_0_45px_rgba(107,114,128,0.55)]',
    textGradient: 'from-gray-400 to-gray-600',
    image: 'https://img.icons8.com/color/150/apple-music.png',
    templateId: 'fmt-apple'
  },
  {
    id: 'amazon',
    name: 'AMAZON PRIME',
    color: 'orange',
    borderColor: 'border-orange-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)]',
    textGradient: 'from-orange-400 to-yellow-500',
    image: 'https://img.icons8.com/color/150/amazon.png',
    templateId: 'fmt-amazon'
  },
  {
    id: 'ios',
    name: 'IOS APPS',
    color: 'blue',
    borderColor: 'border-blue-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.55)]',
    textGradient: 'from-blue-400 to-cyan-500',
    image: 'https://img.icons8.com/color/150/apple.png',
    templateId: 'fmt-ios'
  },
  {
    id: 'crunchy',
    name: 'CRUNCHYROLL PREMIUM',
    color: 'orange',
    borderColor: 'border-orange-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)]',
    textGradient: 'from-orange-400 to-red-500',
    image: 'https://img.icons8.com/color/150/anime.png',
    templateId: 'fmt-crunchy'
  },
  {
    id: 'unblock',
    name: 'UNBLOCK IMEI',
    color: 'red',
    borderColor: 'border-red-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_45px_rgba(239,68,68,0.55)]',
    textGradient: 'from-red-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/phone.png',
    templateId: 'fmt-unblock'
  },
  {
    id: 'dramawave',
    name: 'DRAMAWAVE',
    color: 'pink',
    borderColor: 'border-pink-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:shadow-[0_0_45px_rgba(236,72,153,0.55)]',
    textGradient: 'from-pink-400 to-rose-500',
    image: 'https://img.icons8.com/color/150/drama.png',
    templateId: 'fmt-dramawave'
  },
  {
    id: 'gtc',
    name: 'GET CONTACT PREMIUM',
    color: 'blue',
    borderColor: 'border-blue-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.55)]',
    textGradient: 'from-blue-400 to-cyan-500',
    image: 'https://img.icons8.com/color/150/contacts.png',
    templateId: 'fmt-gtc'
  },
  {
    id: 'disney',
    name: 'DISNEY+ PREMIUM',
    color: 'blue',
    borderColor: 'border-blue-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.55)]',
    textGradient: 'from-blue-400 to-cyan-500',
    image: 'https://img.icons8.com/color/150/disney.png',
    templateId: 'fmt-disney'
  },
  {
    id: 'tunitin',
    name: 'TUNITIN',
    color: 'indigo',
    borderColor: 'border-indigo-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.55)]',
    textGradient: 'from-indigo-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/document.png',
    templateId: 'fmt-tunitin'
  },
  {
    id: 'pdf',
    name: 'PDF PREMIUM',
    color: 'red',
    borderColor: 'border-red-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_45px_rgba(239,68,68,0.55)]',
    textGradient: 'from-red-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/pdf.png',
    templateId: 'fmt-pdf'
  },
  {
    id: 'alight',
    name: 'ALIGHT MOTION',
    color: 'cyan',
    borderColor: 'border-cyan-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.55)]',
    textGradient: 'from-cyan-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/animation.png',
    templateId: 'fmt-alight'
  },
  {
    id: 'wink',
    name: 'WINK VIP',
    color: 'emerald',
    borderColor: 'border-emerald-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.55)]',
    textGradient: 'from-emerald-300 to-green-400',
    image: 'https://img.icons8.com/color/150/video.png',
    templateId: 'fmt-wink'
  },
  {
    id: 'viu',
    name: 'VIU PREMIUM',
    color: 'purple',
    borderColor: 'border-purple-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(128,0,255,0.35)] hover:shadow-[0_0_45px_rgba(200,0,255,0.55)]',
    textGradient: 'from-purple-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/vimeo.png',
    templateId: 'fmt-viu'
  },
  {
    id: 'vpn',
    name: 'VPN PRICELIST',
    color: 'amber',
    borderColor: 'border-amber-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(217,119,6,0.35)] hover:shadow-[0_0_45px_rgba(217,119,6,0.55)]',
    textGradient: 'from-amber-400 to-orange-500',
    image: 'https://img.icons8.com/color/150/vpn.png',
    templateId: 'fmt-vpn'
  },
  {
    id: 'telegram',
    name: 'TELEGRAM PREMIUM',
    color: 'cyan',
    borderColor: 'border-cyan-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.55)]',
    textGradient: 'from-cyan-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/telegram-app.png',
    templateId: 'fmt-telegram'
  },
  {
    id: 'trading',
    name: 'TRADING VIEW',
    color: 'indigo',
    borderColor: 'border-indigo-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.55)]',
    textGradient: 'from-indigo-400 to-blue-500',
    image: 'https://img.icons8.com/color/150/stock-market.png',
    templateId: 'fmt-trading'
  },
  {
    id: 'wibuku',
    name: 'WIBUKU PREMIUM',
    color: 'pink',
    borderColor: 'border-pink-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:shadow-[0_0_45px_rgba(236,72,153,0.55)]',
    textGradient: 'from-pink-400 to-rose-500',
    image: 'https://img.icons8.com/color/150/book.png',
    templateId: 'fmt-wibuku'
  },
  {
    id: 'dramabox',
    name: 'DRAMABOX PREMIUM',
    color: 'rose',
    borderColor: 'border-rose-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:shadow-[0_0_45px_rgba(244,63,94,0.55)]',
    textGradient: 'from-rose-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/drama.png',
    templateId: 'fmt-dramabox'
  },
  {
    id: 'winkprem',
    name: 'WINK@ PREMIUM',
    color: 'lime',
    borderColor: 'border-lime-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(132,204,22,0.35)] hover:shadow-[0_0_45px_rgba(132,204,22,0.55)]',
    textGradient: 'from-lime-400 to-green-500',
    image: 'https://img.icons8.com/color/150/video.png',
    templateId: 'fmt-winkprem'
  },
  {
    id: 'procreate',
    name: 'PROCREATE PREMIUM',
    color: 'purple',
    borderColor: 'border-purple-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(128,0,255,0.35)] hover:shadow-[0_0_45px_rgba(200,0,255,0.55)]',
    textGradient: 'from-purple-400 to-pink-500',
    image: 'https://img.icons8.com/color/150/drawing.png',
    templateId: 'fmt-procreate'
  },
  {
    id: 'aplikasiai',
    name: 'APLIKASI AI PREMIUM',
    color: 'blue',
    borderColor: 'border-blue-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.55)]',
    textGradient: 'from-blue-400 to-cyan-500',
    image: 'https://img.icons8.com/color/150/artificial-intelligence.png',
    templateId: 'fmt-aplikasiai'
  },
  {
    id: 'ms365',
    name: 'MS365@',
    color: 'orange',
    borderColor: 'border-orange-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_45px_rgba(249,115,22,0.45)]',
    textGradient: 'from-orange-400 to-red-500',
    image: 'https://img.icons8.com/color/150/microsoft-office.png',
    templateId: 'fmt-ms365'
  },
  {
    id: 'education',
    name: 'EDUCATION PREMIUM',
    color: 'green',
    borderColor: 'border-green-500/40',
    shadowColor: 'shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_45px_rgba(34,197,94,0.45)]',
    textGradient: 'from-green-400 to-emerald-500',
    image: 'https://img.icons8.com/color/150/graduation-cap.png',
    templateId: 'fmt-education'
  },
  {
    id: 'figma',
    name: 'FIGMA PREMIUM',
    color: 'purple',
    borderColor: 'border-purple-600/40',
    shadowColor: 'shadow-[0_0_20px_rgba(147,51,234,0.25)] hover:shadow-[0_0_45px_rgba(147,51,234,0.45)]',
    textGradient: 'from-purple-500 to-pink-500',
    image: 'https://img.icons8.com/color/150/figma.png',
    templateId: 'fmt-figma'
  },
  {
    id: 'lightroom',
    name: 'LIGHTROOM PREMIUM',
    color: 'blue',
    borderColor: 'border-blue-400/40',
    shadowColor: 'shadow-[0_0_20px_rgba(96,165,250,0.25)] hover:shadow-[0_0_45px_rgba(96,165,250,0.45)]',
    textGradient: 'from-blue-400 to-cyan-500',
    image: 'https://img.icons8.com/color/150/adobe-lightroom.png',
    templateId: 'fmt-lightroom'
  }
];

console.log(`📦 SERVICES DATA LOADED: ${SERVICES.length} services`);
