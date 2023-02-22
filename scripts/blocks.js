Events.on(ContentInitEvent, e => {
	 Vars.content.block("glacier-wall").attributes.set(Attribute.get("ice"), 1);
	 Vars.content.block("bauxite-wall").attributes.set(Attribute.get("bauxite"), 0.25);