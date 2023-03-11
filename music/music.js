Events.on(ClientLoadEvent, () => {
  // Tworzenie triggera dla sektora
  const sectorTrigger = new SectorTrigger("glacier-rift");
  // Odtwarzanie nowej muzyki
  sectorTrigger.run(() => {
    Vars.ui.showInfoToast("distant.", 1.5);
    // Nazwa pliku z nową muzyką, umieszczona w folderze assets
    const musicFile = "Distant.mp3";
    // Ładowanie nowej muzyki i ustawienie jako aktualna
    const music = new Music();
    music.load(musicFile);
    Vars.control.music(music);
  });
});