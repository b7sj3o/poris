((g) => {
	var h,
		a,
		k,
		p = "The Google Maps JavaScript API",
		c = "google",
		l = "importLibrary",
		q = "__ib__",
		m = document,
		b = window;
	b = b[c] || (b[c] = {});
	var d = b.maps || (b.maps = {}),
		r = new Set(),
		e = new URLSearchParams(),
		u = () =>
			h ||
			(h = new Promise(async (f, n) => {
				await (a = m.createElement("script"));
				e.set("libraries", [...r] + "");
				for (k in g)
					e.set(
						k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
						g[k]
					);
				e.set("callback", c + ".maps." + q);
				a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
				d[q] = f;
				a.onerror = () => (h = n(Error(p + " could not load.")));
				a.nonce = m.querySelector("script[nonce]")?.nonce || "";
				m.head.append(a);
			}));
	d[l]
		? console.warn(p + " only loads once. Ignoring:", g)
		: (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
	key: "AIzaSyDQOXdB8jt17bDyZrhMWb8AA6FvOVMA1LE",
});

let map;

async function initMap() {
	// The location of Uluru
	const position = {
		lat: +theme.wpseo_local.location_coords_lat,
		lng: +theme.wpseo_local.location_coords_long,
		// lat: 48.3230925,
		// lng: 25.9617356,
	};
	// Request needed libraries.
	//@ts-ignore
	const { Map, InfoWindow } = await google.maps.importLibrary("maps");
	const { Marker } = await google.maps.importLibrary("marker");

	// The map, centered at Uluru
	map = new Map(document.getElementById("gmap"), {
		zoom: 18,
		center: {
			lat: +theme.wpseo_local.location_coords_lat - 0.1,
			lng: +theme.wpseo_local.location_coords_long - 0.002,
		},
		mapId: "map",
	});

	var marker = new Marker({
		position: position,
		map: map,
		icon: theme.directory + "/src/img/icons/loc.svg",
	});

	marker.setAnimation(google.maps.Animation.BOUNCE);

	var infoWindow = new InfoWindow({
		content: `<h4 class="h4">${theme.wpseo_local.location_city}, ${theme.wpseo_local.location_address} ${theme.wpseo_local.location_address_2}</h4>`,
	});

	infoWindow.open(map, marker);

	marker.addListener("click", function () {
		infoWindow.open(map, marker);
	});
}

initMap();
