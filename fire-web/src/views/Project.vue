<template>
<v-flex>
    <div id="map" style="position: absolute; width: 100% ; height: 100%; top: 0; bottom: 0;"></div>

    <v-flex>
        <v-card xs2 sm2 lg2 class="ma-3 bottom-left cyan">
            <h4 class="heading">
                คำอธิบายความหมายของหมุด
            </h4>
            <img src="./../img/pin.png">
        </v-card>

    </v-flex>

</v-flex>
<!-- <v-container fluid > -->
<!-- <div>
    <div id="map" style="position: absolute; width: 100% ; top: 0; bottom: 0;"></div> -->
<!-- </v-container> -->
<!-- <iframe id="ytplayer" type="text/html" width="640" height="360"
    :src="'~/components/index1.html'"
  frameborder="0"></iframe> -->
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.1.10/vue-resource.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script>
import {
    axios
} from "@/plugins/axios";
import Vue from "vue";
import VueFriendlyIframe from "vue-friendly-iframe";
import vueResource from "vue-resource";
import {
    setInterval
} from 'timers';

// Vue.component("statichtmlpage", function (resolve, reject) {
//     this.$http.get("./../components/index1.html", function (
//         data,
//         status,
//         request
//     ) {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(data, "text/html");
//         resolve({
//             template: doc
//         });
//     });
// });

Vue.component("vue-friendly-iframe", VueFriendlyIframe);
export default {
    data() {
        return {
            data_get: {},
            // data: {},
            // ht: h,
            // info: null,
            test: 'text',
            map: {},
            markers: new Array(),
            long: new Array(),
            lati: new Array(),
            fire_stat: new Array(),
            lati_trans: new Array(),
            long_trans: new Array(),
            trans: new Array(),
            enable: new Array(),
            status_v: new Array(),
            detectors_id: new Array(),
            smoke_v: new Array(),
            Leng: {},
            temp: {}
            // }}
        }
    },
    methods: {

        axiosTest: function () {
            return axios.get('http://202.28.247.52/api/v1/details/devices').then(response => {
                // returning the data here allows the caller to get it through another .then(...)
                return response.data
            })
        },
        myFunctionOnLoad: function () {
            // eslint-disable-next-line
            console.log("call on load...");
        },

        getMap: function () {
            let recaptchaScript = document.createElement("script");
            recaptchaScript.setAttribute(
                "src",
                "http://api.longdo.com/map/?key=3024cbe278e024cf2503cd2e87002a2d"
            );
            document.head.appendChild(recaptchaScript);
        },

        createMarker: function (idx, long_v, lat_v, url_img_icon) {
            // console.log('test1')
            this.temp = this.lati_trans[idx];
            this.tooltips_msg = "last lat : " + this.temp + " <br>";
            this.temp = this.long_trans[idx];
            this.tooltips_msg =
                this.tooltips_msg + "last long : " + this.temp + " <br>";
            this.temp = this.status_v[idx];
            this.tooltips_msg =
                this.tooltips_msg + "last status trans : " + this.temp + " <br>";
            this.temp = this.detectors_id[idx];
            this.tooltips_msg =
                this.tooltips_msg + " Detector id : " + this.temp + " <br>";
            this.temp = this.fire_stat[idx] != 0 ? true : false;
            this.tooltips_msg =
                this.tooltips_msg + " fire status : " + this.temp + " <br>";
            this.temp = this.enable[idx] != 0 ? true : false;
            this.tooltips_msg =
                this.tooltips_msg + " Detector available : " + this.temp + " <br>";
            this.temp = this.smoke_v[idx];
            this.tooltips_msg =
                this.tooltips_msg + " Smoke value : " + this.temp + " <br>";
            // console.log(lat_v)
            // console.log(long_v)

            var marker1 = new longdo.Marker({
                lon: long_v,
                lat: lat_v
            }, {
                icon: {
                    url: url_img_icon
                },
                popup: {
                    html: "<div id='tooltips-div' >" + this.tooltips_msg + "</div>"
                }

            });
            this.map.Overlays.add(marker1);
        },

        init: function () {
            this.map = new longdo.Map({
                placeholder: document.getElementById("map")
            })
            this.myTimer()
            // console.log(this.map)
        },

        // var myVar : setInterval(myTimer, 10000),

        myTimer() {

            long: new Array();
            lati: new Array();
            fire_stat: new Array();
            lati_trans: new Array();
            long_trans: new Array();
            trans: new Array();
            enable: new Array();
            status_v: new Array();
            detectors_id: new Array();
            smoke_v: new Array();
            status_v: new Array();

            // this.map.Overlays.clear();
            // this.data_get = Promise.resolve(this.axiosTest())
            this.data_get.then((value) => {
                console.log(value)
                this.map.Overlays.clear();
                for (var l = 0; l < value.data.length; l++) {
                    this.status_v.push(value.data[l].status)
                    this.enable.push(value.data[l].available_status)
                    this.long.push(value.data[l].longitude)
                    this.lati.push(value.data[l].latitude)
                    this.fire_stat.push(value.data[l].fire_status)
                    this.lati_trans.push(value.data[l].latitude_trans)
                    this.long_trans.push(value.data[l].longitude_trans)
                    this.detectors_id.push(value.data[l].detector_id)
                    this.smoke_v.push(value.data[l].smoke_v)

                }
                for (var p = 0; p < value.data.length; p++) {

                    if (this.status_v[p] == 9) {

                        //if (trans[p] == 0) {
                        this.createMarker(p, this.long[p], this.lati[p],
                            'http://maps.google.com/mapfiles/ms/micons/green-dot.png');
                    } else if (this.status_v[p] != null) {
                        if (this.fire_stat[p] > 0) {
                            if (this.fire_stat[p] == 1) {
                                this.createMarker(p, this.long[p], this.lati[p],
                                    'http://maps.google.com/mapfiles/ms/micons/yellow-dot.png');
                            } else if (this.fire_stat[p] == 2) {
                                this.createMarker(p, this.long[p], this.lati[p],
                                    'http://maps.google.com/mapfiles/ms/micons/red-dot.png');
                            } else {
                                this.createMarker(p, this.long[p], this.lati[p],
                                    'http://maps.google.com/mapfiles/ms/micons/pink-dot.png');
                            }

                        } else {
                            if (this.enable[p] == 0) {
                                this.createMarker(p, this.long_trans[p], this.lati_trans[p],
                                    'http://maps.google.com/mapfiles/kml/pal3/icon51.png', 'Test5');
                            } else {
                                if ((parseFloat(parseInt(this.lati[p] * 1000) / 1000, 10)) != (parseFloat(parseInt(
                                        this.lati_trans[p] * 1000) / 1000, 10))) {
                                    this.createMarker(p, this.long[p], this.lati[p],
                                        'http://maps.google.com/mapfiles/ms/micons/bus.png');

                                } else {
                                    this.createMarker(p, this.long[p], this.lati[p],
                                        'http://maps.google.com/mapfiles/ms/micons/green-dot.png');

                                };
                            }
                        }

                    }
                }

            })

        }

    },

    created: function () {
        setTimeout(() => {
            this.data_get = Promise.resolve(this.axiosTest())
            this.init();

        }, 2000);

        setInterval(() => {
            // this.init();
            this.data_get = Promise.resolve(this.axiosTest())
            this.map.Overlays.clear();
            this.myTimer();
            // console.log('New interval')
        }, 10000)
    },
    mounted() {
        // console.log(this.test)
        // let recaptchaScript = document.createElement('script')
        // recaptchaScript.setAttribute('src', 'http://api.longdo.com/map/?key=3024cbe278e024cf2503cd2e87002a2d')
        // document.head.appendChild(recaptchaScript)
    }
};
</script>

<style>
.bottom-left {
    position: absolute;
    bottom: 8px;
    right: 10px;
}

h1 {
    color: paleturquoise;
    background-color: black;
}

.container {
    position: relative;
    text-align: center;
    color: white;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#tooltips-div {
    position: absolute;
    bottom: 20px;
    background: rgba(232, 245, 255, 0.85);
    padding: 5px 10px;
    border: 2px solid #A5D8FF;
    -khtml-border-radius: 16px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    z-index: 1;
    width: 200px;
}

#longdomap-legend-div {
    position: absolute;
    bottom: 80px;
    right: 10px;
    background: rgba(232, 245, 255, 0.85);
    padding: 5px 10px;
    border: 2px solid #A5D8FF;
    -khtml-border-radius: 16px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    z-index: 1;
}

#longdomap-legend-content-div {
    overflow-y: auto;
    text-align: center;
}

#longdomap-legend-collapse-title {
    line-height: 16px;
    margin: 5px 20px 6px 2px;
    font-size: 14px;
    color: #222;
    float: left;
}

#longdomap-legend-collapse-text {
    margin-right: 5px;
    font-size: 12px;
    line-height: 16px;
    height: 16px;
}

#longdomap-legend-div.longdomap-legend-hidden {
    background: rgba(32, 133, 243, 0.85);
    padding: 8px 16px;
}

.longdomap-legend-description {
    font-size: 12px;
    margin-top: 10px;
}

.longdomap-legend-warning {
    font-size: 11px;
    color: #CC2725;
    margin-top: 10px;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-content-div {
    display: none;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-collapse-text {
    color: #FFF;
    font-size: 14px;
}

#longdomap-legend-collapse-div .collapse-arrow,
#longdomap-legend-collapse-text {
    float: right;
    cursor: pointer;
}

#longdomap-legend-collapse-div .collapse-arrow {
    background: url(/mmmap/images/collapse-arrow.png) no-repeat;
    background-position: bottom left;
    width: 12px;
    height: 12px;
    margin-top: 2px;
}

#longdomap-legend-collapse-div {
    margin-bottom: 5px;
    cursor: pointer;
    color: #2085f3;
    text-align: right;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-collapse-div {
    margin-bottom: 0px;
}

#longdomap-legend-div.longdomap-legend-hidden #longdomap-legend-collapse-div .collapse-arrow {
    background-position: top left;
}
</style>
