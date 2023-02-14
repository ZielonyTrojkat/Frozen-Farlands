    const music = loadMusic("dark-music");

    Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(launch);
    });
    