var simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: "responsive",
        background_color: "white",
        background_transparent: "yes",
        border_color: "white",

        //State defaults
        state_description: "",
        state_color: "#295a66",
        state_hover_color: "#fff2b7",
        state_url: "",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_description: "",
        location_url: "",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_size: 25,
        location_type: "square",
        location_image_source: "frog.png",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#ffffff",
        label_hover_color: "#2856b3",
        label_size: 16,
        label_font: "Arial",
        label_display: "auto",
        label_scale: "yes",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        zoom: "yes",
        manual_zoom: "yes",
        back_image: "no",
        initial_back: "no",
        initial_zoom: "-1",
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,
        zoom_mobile: "yes",
        navigation_size: 20,
        navigation_color: "white",
        navigation_border_color: "black",

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",
        popup_orientation: "auto",
        popup_centered: "auto",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Webpage",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "",
        border_hover_color: "",
        border_hover_size: "",
        keyboard_navigation: "yes"
    },
    state_specific: {
        MY01: {
            name: "Johor",
            url: "johor.html"
        },
        MY02: {
            name: "Kedah",
            url: "kedah.html"
        },
        MY03: {
            name: "Kelantan",
            url: "kelantan.html"
        },
        MY04: {
            name: "Melaka",
            url: "melaka.html"
        },
        MY05: {
            name: "Negeri Sembilan",
            url: "n9.html"
        },
        MY06: {
            name: "Pahang",
            url: "pahang.html"
        },
        MY07: {
            name: "Pulau Pinang",
            url: "penang.html"
        },
        MY08: {
            name: "Perak",
            url: "perak.html"
        },
        MY09: {
            name: "Perlis",
            url: "perlis.html"
        },
        MY10: {
            name: "Selangor",
            url: "selangor.html"
        },
        MY11: {
            name: "Terengganu",
            url: "terengganu.html"
        },
        MY12: {
            name: "Sabah",
            url: "sabah.html"
        },
        MY13: {
            name: "Sarawak",
            url: "sarawak.html"
        },
        MY14: {
            name: "Kuala Lumpur",
            url: "kl.html"
        },
        MY15: {
            name: "Labuan",
            url: "labuan.html"
        },
        MY16: {
            name: "Putrajaya",
            url: "putrajaya.html"
        }
    },
    locations: {},
    labels: {
        MY01: {
            name: "Johor",
            x: 225.5,
            y: 264.9,
            parent_id: "MY01"
        },
        MY02: {
            name: "Kedah",
            x: 93.8,
            y: 80.4,
            parent_id: "MY02"
        },
        MY03: {
            name: "Kelantan",
            x: 156.6,
            y: 117.9,
            parent_id: "MY03"
        },
        MY04: {
            name: "Melaka",
            x: 170.7,
            y: 248.7,
            parent_id: "MY04"
        },
        MY05: {
            name: "Negeri Sembilan",
            x: 164.2,
            y: 225.8,
            parent_id: "MY05"
        },
        MY06: {
            name: "Pahang",
            x: 168.1,
            y: 170.7,
            parent_id: "MY06"
        },
        MY07: {
            name: "Pulau Pinang",
            x: 83.1,
            y: 103.2,
            parent_id: "MY07"
        },
        MY08: {
            name: "Perak",
            x: 108.4,
            y: 127.1,
            parent_id: "MY08"
        },
        MY09: {
            name: "Perlis",
            x: 73.6,
            y: 55.8,
            parent_id: "MY09"
        },
        MY10: {
            name: "Selangor",
            x: 137.4,
            y: 212.3,
            parent_id: "MY10"
        },
        MY11: {
            name: "Terengganu",
            x: 195.3,
            y: 120,
            parent_id: "MY11"
        },
        MY12: {
            name: "Sabah",
            x: 838,
            y: 112.2,
            parent_id: "MY12"
        },
        MY13: {
            name: "Sarawak",
            x: 700.4,
            y: 240.5,
            parent_id: "MY13"
        },
        MY14: {
            name: "Kuala Lumpur",
            x: 140.3,
            y: 210.2,
            parent_id: "MY14"
        },
        MY15: {
            name: "Labuan",
            x: 766.7,
            y: 109.7,
            parent_id: "MY15"
        },
        MY16: {
            name: "Putrajaya",
            x: 140.6,
            y: 221,
            parent_id: "MY16"
        }
    },
    legend: {
        entries: []
    },
    regions: {}
};
