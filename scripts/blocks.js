Events.on(ContentInitEvent, e => {
     Vars.content.block("moon-mod-glacier-wall").attributes.set(Attribute.get("ice"), 1);
     Vars.content.block("moon-mod-bauxite-wall").attributes.set(Attribute.get("bauxite"), 1);

     Vars.content.block("moon-mod-bauxite-crusher").attribute = Attribute.get("bauxite");
     Vars.content.block("moon-mod-ice-crusher").attribute = Attribute.get("ice");
});