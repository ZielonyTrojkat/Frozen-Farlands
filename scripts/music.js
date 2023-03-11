import arc.*;
import mindustry.game.EventType.*;
import mindustry.mod.*;

public class moon-mod extends Mod {

    @Override
    public void init() {
        Sector sector = Sector.all().find(s -> s.name.equals("glacier-rift"));
        sector.trig.add(new Zone(() -> {
            Sounds.play("Distant_Peace.ogg", 1.0f);
        }).onlyPlayers());
    }
}
