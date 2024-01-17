
function tile_Power(createElement, context) {
    // Array to hold child elements of the tile
    const tileChildren = [];

    // Conditional rendering of the secondary content
    if (!context.layout.hideLabels) {
        const secondaryContent = createElement('div', { staticClass: 'tile-secondary' },
            [context._v(" " + context._s(context.templates[context.context.template]) + " ")]);
        tileChildren.push(secondaryContent);
    }

    // Styling for the primary content
    const primaryStyle = {
        color: context.customColor.iconColor,
        fontSize: 1.25 * parseInt(context.layout.fontSize) + 'px'
    };

    // Primary content of the tile
    const primaryContent = createElement('div', {
        staticClass: 'tile-primary',
        class: 'power' + context.attr.power,
        style: primaryStyle
    }, [context._v(" " + context._s(context.attr.power) + " KWH")]);

    tileChildren.push(primaryContent);




    const SVG = createElement('svg', {
        class: 'spinny',
        attrs: {
            speed: `${5}s`,
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 235 223',
        },
        style: {
            position: "absolute",
            left: "-12.5%",
            top: "-12.5%",
            width: "125%",  // Adjust as needed
            height: "125%",  // Adjust as needed
            WebkitAnimation: "spin 5s infinite linear", // Vendor prefix in camelCase
            animation: "spin 5s infinite linear"
        }
    }, [
        createElement('defs', {}, [
            createElement('linearGradient', {
                attrs: {
                    x1: '50%',
                    y1: '0%',
                    x2: '50%',
                    y2: '100%',
                    id: 'f'
                }
            }, [
                createElement('stop', { attrs: { 'stop-color': '#300244', offset: '0%' } }),
                createElement('stop', { attrs: { 'stop-color': '#C707BC', offset: '58.098%' } }),
                createElement('stop', { attrs: { 'stop-color': '#D93664', 'stop-opacity': '.5', offset: '100%' } })
            ]),
            createElement('filter', {
                attrs: {
                    // x: '36.4%',
                    // y: '36.4%',
                    // width: '200.9%',
                    // height: '200.9%',
                    filterUnits: 'objectBoundingBox',
                    id: 'g'
                }
            }, [
                createElement('feGaussianBlur', { attrs: { stdDeviation: '.5', in: 'SourceGraphic' } })
            ])
        ]),
        createElement('g', {
            attrs: {
                transform: 'translate(0 -12)',
                fill: 'none',
                'fill-rule': 'evenodd'
            }
        }, [
            createElement('circle', {
                attrs: {
                    stroke: 'url(#f)',
                    'stroke-width': '4.53',
                    fill: '',
                    cx: '118.5',
                    cy: '122.5',
                    r: '90.5'
                }
            }),
            createElement('circle', {
                attrs: {
                    fill: "#FFFFFF",
                    filter: 'url(#g)',
                    cx: '210',
                    cy: '114.5',
                    r: '5.5'
                },
                style: {
                    // make it look like a circle
                    width: "50px",
                    height: "50px",

                }
            })
        ])
    ]);

    tileChildren.push(SVG);
    //   <section class="stats">
    // <h1>3465</h1>
    // </section>



    // Return the complete tile content
    return createElement('div', { staticClass: 'tile-contents' }, tileChildren);
}







function tile_heatingcontrol(o, t) {
    return o("div", {
        staticClass: "tile thermostat cursor-default",
        style: t.tileStyle,
        attrs: {
            id: "tile-" + t.context.id
        }
    }, [
        
        o("div", {
        staticClass: "flex flex-col w-full text-center h-full justify-center items-stretch"
    }, [
        
        o("div", {
        staticClass: "flex-grow-0 w-full self-start",
        class: t.attr.thermostatOperatingState,
        style: {
            color: t.customColor.iconColor,
            fontSize: t.layout.fontSize
        }
    }, [
        o("div", {
        staticClass: "p-1"
    }, [t._v(" " + t._s(t.attr7.temperature)), o("small", [t._v(t._s(t.attr7.unit))])])

]), o("div", {
        staticClass: "flex flex-grow flex-no-wrap flex-col w-full -mt-6 justify-center overflow-auto"
    }, [o("div", {
        staticClass: "heating pt-1 w-full",
        style:{
            padding: "10px",
        }
    }, [
        
        
        o("i", {
        staticClass: "material",
        style: {
            padding: "5px 20px",
            // fontSize: 3 * parseInt(t.layout.iconSize) + "px"
        },
        on: {
            click: t.decreaseHeatingSetpoint
        }
    },[
        o('img', {
            style: {
                width: t.context.templateExtra ? t.context.templateExtra.size  : "60px"
                // height: "100%",
                // "max-width": "100%",
                // "max-height": "100%"
            },
            attrs: {
                src: "housepages/svg.php?name=" + "chevron.down" +  "&size=" + "10&colour=" + "rgb(255,255,255)"
            }
        })

    ]), o("div", {
        staticClass: "inline-block",
        style: {
            fontSize: parseInt(t.layout.fontSize) + "px"
        }
    }, [t._v(" " + t._s(t.attr3.heatingSetpoint)), o("small", [t._v(t._s(t.attr3.unit))]), o("br"), t._v("Heat ")]), o("i", {
        staticClass: "material",
        style: {
            padding: "5px 20px",
            // fontSize: 2 * parseInt(t.layout.iconSize) + "px"
        },
        on: {
            click: t.increaseHeatingSetpoint
        }
    },[
        o('img', {
            style: {
                width: t.context.templateExtra ? t.context.templateExtra.size  :"60px"
                // height: "100%",
                // "max-width": "100%",
                // "max-height": "100%"
            },
            attrs: {
                src: "housepages/svg.php?name=" + "chevron.up" +  "&size=" + "10&colour=" + "rgb(255,255,255)"
            }
        })

    ])

]), o("div", {
        staticClass: "w-full my-1"
    }, [o("div", {
        staticClass: "inline-block rounded-lg text-xs w-1/3",
        style: {
            "background-color": t.customColor.bgColor2
        },
    }, [o("div", {
        staticClass: "no-wrap overflow-hidden",
        style: {
            fontSize: parseInt(t.layout.fontSize) + "px"
        }
    }, [t._v(" " + t._s(t.attr.thermostatOperatingState) + " ")]), t._v("")]), o("div", {
        staticStyle: {
            width: "16px",
            display: "inline-block"
        }
    })])])]),
    
    
    o("div", {
        staticClass: "absolute bottom-0 text-center w-full"
    }, [t._v(" " + t._s(t.name) + " ")]), t.hvacPopup ? o("div", {
        staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
    }, [o("div", {
        staticClass: "popup-content inset-auto relative bg-white z-50 md:mx-2 w-full md:w-2/3 mt-12 md:mx-auto flex-col flex shadow-xl h-85p md:h-auto overflow-auto rounded-xl cursor-default"
    }, [o("div", {
        staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg",
        on: {
            click: t.hideHVAC
        }
    }, [t._v(" X ")]), o("div", {
        staticClass: "hsmList"
    }, [o("div", {
        staticClass: "text-center m-4"
    }, [o("div", {
        staticClass: "w-auto m-2 p-4"
    }, [o("div", {
        staticClass: "text-lg"
    }, [t._v(" Currently: " + t._s(t.attr7.temperature)), o("small", [t._v(t._s(t.attr7.unit))]), o("span", [t._v(" and " + t._s(t.attr.thermostatOperatingState))])])]), t._l(t.supportedThermostatModes, (function (e, a) {
        return o("div", {
            key: a,
            staticClass: "modeList shadow-md w-auto m-2 p-4 border cursor-pointer text-lg hover:bg-gray-300"
        }, [o("div", {
            staticClass: "modeItem",
            on: {
                click: function (o) {
                    return t.doMode(e)
                }
            }
        }, [t._v(" " + t._s(e) + " ")])])
    }
    ))], 2)])])]) : t._e(), t.fanPopup ? o("div", {
        staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
    }, [o("div", {
        staticClass: "popup-content inset-auto relative bg-white z-50 md:mx-2 md:w-2/3 mt-12 md:mx-auto flex-col flex shadow-xl h-85p md:h-auto overflow-auto rounded-xl cursor-default"
    }, [o("div", {
        staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg",
        on: {
            click: t.hideFan
        }
    }, [t._v(" X ")]), o("div", {}, [o("div", {
        staticClass: "text-center m-4"
    }, [o("div", {}, [o("div", {
        staticClass: "text-lg mt-6"
    }, [t._v(" Currently: " + t._s(t.attr7.temperature)), o("span", {
        staticClass: "small"
    }, [t._v(" " + t._s(t.attr.unit) + " ")]), o("span", [t._v(" and " + t._s(t.attr.thermostatOperatingState))])])]), t._l(t.supportedThermostatFanModes, (function (e, a) {
        return o("div", {
            key: a,
            staticClass: "modeList shadow-md w-auto m-2 p-4 border cursor-pointer text-lg hover:bg-gray-300"
        }, [o("div", {
            staticClass: "modeItem",
            on: {
                click: function (o) {
                    return t.doFanMode(e)
                }
            }
        }, [t._v(" " + t._s(e) + " ")])])
    }
    ))], 2)])])]) : t._e()


]
    )

}

function tile_Levelvertical(o, t) {
    return o("div", {
        staticClass: "tile level-vertical1",
        style: t.tileStyle,
        attrs: {
            id: "tile-" + t.context.id
        }
    }, [
        // Container with max height
        o("div", {
            staticClass: "flex flex-col w-full text-center h-full justify-center items-stretch",
            style: {
                maxHeight: "80%" // Adjust the max height as needed
            }
        }, [
            // Button 2
            o("div", {
                staticClass: "dimmer pt-1 w-full"
            }, [
                o("i", {
                    staticClass: "material icons he-circle-up pr-3",
                    style: {
                        fontSize: 1.2 * parseInt(t.layout.iconSize) + "px"
                    },
                    on: {
                        click: t.updateSliderTop
                    }
                })
            ]),
            // Text
            o("div", {
                staticClass: "text-center w-full"
            }, [
                o("div", {
                    staticClass: "inline-block",
                    style: {
                        fontSize: parseInt(t.layout.fontSize) + "px"
                    }
                }, [t._v(" "), o("small", [t._v("")]), o("br"), t._v(" " + t._s(t.attr.level) + " ")])
            ]),

            // Button 1
            o("div", {
                staticClass: "dimmer pt-1 w-full"
            }, [
                o("i", {
                    staticClass: "material icons he-circle-down pr-3",
                    style: {
                        fontSize: 1.2 * parseInt(t.layout.iconSize) + "px"
                    },
                    on: {
                        click: t.updateSliderbottom
                    }
                })
            ])
        ]),

        o("div", {
            staticClass: "absolute bottom-0 text-center w-full"
        }, [t._v(" " + t.name + " ")])
    ])

}


function tile_bulbColor(o, t) {
    console.log(t)
    return o("div", {
        staticClass: "tile bulb-color",
        style: t.tileStyle,
        attrs: {
            id: "tile-" + t.context.id
        }
    }, [o("div", {
        staticClass: "tile-title",
        style: {
            fontSize: t.customColor.fontSize
        }
    }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
        staticClass: "tile-contents"
    }, [t.layout.hideLabels ? t._e() : o("div", {
        staticClass: "tile-secondary"
    }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
        staticClass: "tile-primary",
        on: {
            click: t.showPopup
        }
    }, [o("div", [

        o("i", {
            staticClass: "material-icons",
            class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
            style: {
                color: t.customColor.iconColor,
                fontSize: 0,
                backgroundColor: t.color,
                padding: "12px",
                borderRadius: "50%"
            }
        }, [

            (t.context.customIconarray && t.context.customIconarray.customicon ? o('img', {
                style: {
                    width: t.context.templateExtra ? t.context.templateExtra.size : "50px",
                    height: "100%",
                    "max-width": "100%",
                    "max-height": "100%"
                },
                attrs: {
                    src: "housepages/svg.php?name=" + t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + t.customColor.iconColor + "&size=" + t.iconSize
                }
            }) : t._v(" " + (t.context.customIconarray && t.context.customIconarray.customicon ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),





        ])

    ])])]),


    t.popup ? o("div", {
        staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
    }, [o("div", {
        staticClass: "popup-content  relative bg-white z-50 m-2 mt-12 md:w-2/3 md:mx-auto flex-col flex shadow-xl h-85p md:h-auto overflow-auto rounded-xl",
        style: {
            color: "black"
        //     top: "100px",
        //     width: "90%",
        //     height: "70%"
        }
    }, [o("div", {
        staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg",
        style: {
            fontSize: "2.5rem"
        },
        on: {
            click: t.hidePopup
        }
    }, [t._v(" X ")]), o("div", {
        staticClass: "flex flex-row flex-wrap p-2 mt-8"
    }, [o("div", {
        staticClass: "md:w-1/3 text-center order-3 md:order-1"
    }, [o("div", {
        staticClass: "colorpicker w-full p-2 mx-1"
    }, [o("div", {
        staticClass: "text-lg"
    }, [t._v(" " + t._s(t.local.colorBulbOptions) + " ")]), o("div", {
        staticClass: "min-w-full"
    }, ["?" != t.attr3.hue ? o("div", [t._v(" " + t._s(t.local.pickAColor) + " "), o("div", {}, [t.tempColor ? o("verte", {
        attrs: {
            "show-history": !1,
            "rgb-sliders": !0,
            model: "rgb",
            "menu-position": "top",
            display: "widget",
            draggable: 1
        },
        on: {
            input: t.changeBulbColor
        },
        model: {
            value: t.tempColor,
            callback: function (e) {
                t.tempColor = e
            },
            expression: "tempColor"
        }
    }) : t._e()], 1)]) : t._e()])])]), o("div", {
        staticClass: "w-full md:w-1/6 text-center order-1 md:order-2"
    }, [o("div", {
        staticClass: "w-full p-2",
        on: {
            click: t.doCommand
        }
    }, [o("div", {
        staticClass: "text-lg"
    }, [t._v(" " + t._s(t.templates["switches"]) + " ")]), o("i", {
        staticClass: "material-icons",
        class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
        style: {
            color: t.customColor.iconColor,
            fontSize: t.iconSize
        }
    }, [
        (t.context.customIconarray && t.context.customIconarray.customicon ? o('img', {
            style: {
                width: "50px",
                height: "100%",
                "max-width": "100%",
                "max-height": "100%"
            },
            attrs: {
                src: "housepages/svg.php?name=" + t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + "rgb(0,0,0)" + "&size=" + t.iconSize
            }
        }) : t._v(" " + (t.context.customIconarray && t.context.customIconarray.customicon ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),


        // t._v(t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")))


    ]), o("div", {
        style: {
            fontSize: 2 * parseInt(t.layout.iconSize) + "px"
        }

    },
        [t._v(t._s(t.attr.switch))])])]), o("div", {
            staticClass: "w-full md:w-3/12 text-center order-2 md:order-3"
        }, [o("div", {
            staticClass: "level w-full p-2"
        }, [o("div", {
            staticClass: "text-lg"
        }, [t._v(" " + t._s(t.templates["level-step"]) + " ")]), o("div", {
            staticClass: "dimmer m-4",
            on: {
                click: t.doCommand
            }
        }, [o("VueSlider", {
            staticClass: "w-full",
            attrs: {
                min: 0,
                max: 100,
                // step: 1,
                "dot-size": 30,
                height: 5,
                "process-style": {
                    backgroundColor: "rgba(255,255,255,.85)"
                },
                "rail-style": {
                    backgroundColor: "rgba(0,0,0,.85)"
                },
                lazy: !0
            },
            on: {
                change: t.updateSlider
            },
            model: {
                value: t.attr2.level,
                callback: function (e) {
                    t.$set(t.attr2, "level", e)
                },
                expression: "attr2.level"
            }
        })], 1), o("div", {}, [t._v(" " + t._s(t.attr2.level) + "% ")])])]), o("div", {
            staticClass: "w-full md:w-3/12 text-center order-4"
        }, ["0" != t.attr5.colorTemperature ? o("div", {
            staticClass: "ct w-full p-2"
        }, [o("div", {
            staticClass: "text-lg"
        }, [t._v(" " + t._s(t.local.colorTemperature) + " ")]), o("div", {
            staticClass: "dimmer m-4",
            on: {
                click: t.doCommand
            }
        }, [o("VueSlider", {
            attrs: {
                min: 1500,
                max: 6500,
                step: 100,
                "dot-size": 30,
                height: 5,
                "process-style": {
                    backgroundColor: "rgba(255, 255, 255, .85)"
                },
                "rail-style": {
                    backgroundColor: "rgba(0, 0, 0, .85)"
                },
                lazy: !0
            },
            on: {
                change: t.updateSliderCT
            },
            model: {
                value: t.attr5.colorTemperature,
                callback: function (e) {
                    t.$set(t.attr5, "colorTemperature", e)
                },
                expression: "attr5.colorTemperature"
            }
        })], 1), o("div", {
            staticClass: "dimLevel",
            staticStyle: {
                width: "80%",
                "text-align": "center",
                background: "linear-gradient(to right, rgb(255, 224, 0), rgb(229, 241, 247))",
                margin: "0 10%",
                padding: "8px 0",
                "border-radius": "25px"
            }
        }, [t._v(" " + t._s(t.attr5.colorTemperature) + "K ")])]) : t._e()])])])]) : t._e()


    ])

}

function tile_musicPlayer(o, t) {
    console.log(t)
    return o("div", {
        staticClass: "tile music-player",
        style: t.tileStyle,
        attrs: {
            id: "tile-" + t.context.id
        }
    },


        [o("div", {
            staticClass: "tile-title",
            style: {
                fontSize: t.customColor.fontSize
            }
        }, [t._v(" " + t._s(t.name) + t._s(t.status) + " ")]),

        o("div", {
            staticClass: "tile-contents"
        }, [

            t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]),

            o("div", {
                staticClass: "tile-primary",
                on: {
                    click: t.showPopup
                }
            }, [


                o("div", {
                    staticClass: "music-player",
                    class: t.attr.status
                }, [
                    "PLAYING" == t.attr.playbackState ? o("div", {
                        staticClass: "song-info"
                    }, [

                        o("i", {
                            staticClass: "material-icons ",
                            style: {
                                width: "80px",
                                color: t.customColor.iconColor,
                                "padding-bottom": "10px",
                            }
                        }, [

                            o('img', {
                                style: {
                                    height: smallScreen() ? "100px": "50%",
                                    "max-width": "100%",
                                    "max-height": "100%",
                                    "border-radius": "10px"
                                },
                                attrs: {
                                    src: t.absoluteAlbumArtUri.absoluteAlbumArtUri == "" ? "housepages/svg.php?name=speaker.wave.3" : "housepages/imagefromurl.php?url=" + encodeURIComponent(t.absoluteAlbumArtUri.absoluteAlbumArtUri)
                                }
                            })]),
                        o("div", {
                            staticClass: "trackDescription",
                            style: {
                                color: t.customColor.iconColor,
                                fontSize: t.customColor.fontSize
                            },
                            domProps: {
                                innerHTML: t._s(t.title.title.substr(0, 10))
                            }
                        }),
                        o("div", {
                            staticClass: "trackDescription",
                            style: {
                                color: t.customColor.iconColor,
                                fontSize: t.customColor.fontSize
                            },
                            domProps: {
                                innerHTML: t._s(t.album.album.substr(0, 10))
                            }
                        }),
                        o("div", {
                            staticClass: "trackDescription",
                            style: {
                                color: t.customColor.iconColor,
                                fontSize: t.customColor.fontSize
                            },
                            domProps: {
                                innerHTML: t._s(t.artist.artist.substr(0, 10))
                            }
                        })



                    ]) : o("div", {
                        staticClass: "song-info"
                    }, [

                        o("i", {
                            staticClass: "material-icons ",
                            style: {
                                color: "white",
                                fontSize: 1 * parseInt(t.layout.iconSize) + "px",
                                width: t.context.templateExtra ? t.context.templateExtra.size : "100px",
                            }
                        }, [

                            o('img', {
                                style: {
                                    // width: "50%",
                                    height: "50%",
                                    "max-width": "100%",
                                    "max-height": "100%"
                                },
                                attrs: {
                                    src: "housepages/svg.php?name=" + "hifispeaker.fill" + "&size=" + "40&colour=" + "grb(255,255,255)"
                                }
                            })


                        ])

                    ])
                ]),

            ]
            )
        ]
        ),



        t.Popup ? o("div", {
            staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
        }, [o("div", {
            staticClass: "popup-content  relative bg-white z-50 m-2 mt-12 md:w-2/3 md:mx-auto flex-col flex shadow-xl h-85p md:h-auto overflow-auto rounded-xl",
            // style: {
            //     top: "100px",
            //     width: "90%",
            //     height: "70%"
            // }
        }, [

            o("div", {
                staticClass: ""
            }, [


                o("div", {
                    staticClass: "music-player",
                    class: t.attr.status,
                    style: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",

                    }
                }, [
                    "PLAYING" == t.attr.playbackState ? o("div", {
                        staticClass: "song-info",
                        style: {
                            // align-items: center;
                            // display: flex;
                            // width: 100%;
                            // position: relative;
                            // flex-direction: column;
                            top: "20px",
                            alignItems: "center",
                            display: "flex",
                            width: "100%",
                            position: "relative",
                            flexDirection: "column"

                        }
                    }, [

                        o("i", {
                            staticClass: "material-icons ",
                            style: {
                                // width: "150px",
                                color: "black",
                            }
                        }, [

                            o('img', {
                                style: {
                                    width:  smallScreen() ? "100px": "50%",
                                    height:  smallScreen() ? "100px": "50%",
                                    "max-width": "100%",
                                    "max-height": "100%",
                                    "border-radius": "10px"
                                },
                                attrs: {
                                    src: t.absoluteAlbumArtUri.absoluteAlbumArtUri == "" ? "housepages/svg.php?name=speaker.wave.3" : "housepages/imagefromurl.php?url=" + encodeURIComponent(t.absoluteAlbumArtUri.absoluteAlbumArtUri)
                                }
                            })]),
                        o("div", {
                            staticClass: "trackDescription",
                            style: {
                                color: "black",
                                fontSize: t.customColor.fontSize
                            },
                            domProps: {
                                innerHTML: t._s(t.title.title.substring(0, 70))
                            }
                        }),
                        o("div", {
                            staticClass: "trackDescription",
                            style: {
                                color: "black",
                                fontSize: t.customColor.fontSize
                            },
                            domProps: {
                                innerHTML: t._s(t.album.album.substring(0, 70))
                            }
                        }),
                        o("div", {
                            staticClass: "trackDescription",
                            style: {
                                color: "black",
                                fontSize: t.customColor.fontSize
                            },
                            domProps: {
                                innerHTML: t._s(t.artist.artist.substring(0, 70))
                            }
                        })



                    ]) : t._e(),

                    o("div", {
                        staticClass: "Buttons",
                        style: {
                            "padding-top": "20px",
                        }
                        // on: {
                        //     click: t.previous
                        // }
                    }, [
                        o("div", {
                            staticClass: "previous",
                            on: {
                                click: t.previous
                            }
                        }, [

                            o("i", {
                                staticClass: "material-icons ",
                                style: {
                                    color: "black",
                                    fontSize: 1.75 * parseInt(t.layout.iconSize) + "px"
                                }
                            }, [

                                o('img', {
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        "max-width": "100%",
                                        "max-height": "100%"
                                    },
                                    attrs: {
                                        src: "housepages/svg.php?name=" + "backward.fill.1" + "&size=" + "40"
                                    }
                                })


                            ])]),

                        o("div", {
                            staticClass: "play-pause",
                            on: {
                                click: function (e) {
                                    return t.play("play")
                                }
                            }
                        }, [

                            "STOPPED" == t.attr.playbackState || "PAUSED_PLAYBACK" == t.attr.playbackState || "TRANSITIONING" == t.attr.playbackState ? o("i", {
                                staticClass: "material-icons music-player pause",
                                style: {
                                    color: "black",
                                    fontSize: .75 * parseInt(t.layout.iconSize) + "px",
                                    "padding-left": "25px",
                                    "padding-right": "25px",
                                    "padding-top": "10px"
                                }
                            }, [
                                o('img', {
                                    style: {
                                        width: 1.1 * parseInt(t.layout.iconSize) + "px",
                                        height: "100%",
                                        "max-width": "100%",
                                        "max-height": "100%"
                                    },
                                    attrs: {
                                        src: "housepages/svg.php?name=" + "play" + "&size=" + t.iconSize
                                    }
                                })
                            ]) : t._e()]),


                        o("div", {
                            staticClass: "play-pause",
                            on: {
                                click: function (e) {
                                    return t.play("pause")
                                }
                            }
                        }, ["PLAYING" == t.attr.playbackState ? o("i", {
                            staticClass: "material-icons music-player play",
                            style: {
                                color: "black",
                                fontSize: .75 * parseInt(t.layout.iconSize) + "px",
                                "padding-left": "25px",
                                "padding-right": "25px",
                                "padding-top": "10px"

                            }
                        }, [
                            o('img', {
                                style: {
                                    width: 1.1 * parseInt(t.layout.iconSize) + "px",
                                    height: "100%"


                                },
                                attrs: {
                                    src: "housepages/svg.php?name=" + "pause" + "&size=" + t.iconSize
                                }
                            })
                        ]) : t._e()]),

                        o("div", {
                            staticClass: "next",
                            on: {
                                click: t.next
                            }
                        }, [o("i", {
                            staticClass: "material-icons music-player nextTrack",
                            style: {
                                color: "black",
                                fontSize: .75 * parseInt(t.layout.iconSize) + "px",
                            }
                        }, [o('img', {
                            style: {
                                width: "100%",
                                height: "100%",
                                "max-width": "100%",
                                "max-height": "100%"
                            },
                            attrs: {
                                src: "housepages/svg.php?name=" + "forward.fill.1" + "&size=" + "40"
                            }
                        })])])
                    ]),






                    // o("div", {
                    //     staticClass: "muteControl"
                    // }, ["muted" == t.attr2.mute ? o("i", {
                    //     staticClass: "material-icons music-player unmute",
                    //     style: {
                    //         color: "black",
                    //         fontSize: .75 * parseInt(t.layout.iconSize) + "px"
                    //     },
                    //     on: {
                    //         click: function (e) {
                    //             return t.play("unmute")
                    //         }
                    //     }
                    // }, [t._v(" volume_off ")]) : t._e(), "unmuted" == t.attr2.mute ? o("i", {
                    //     staticClass: "material-icons music-player mute",
                    //     style: {
                    //         color: "black",
                    //         fontSize: .75 * parseInt(t.layout.iconSize) + "px"
                    //     },
                    //     on: {
                    //         click: function (e) {
                    //             return t.play("mute")
                    //         }
                    //     }
                    // }, [t._v(" volume_up ")]) : t._e()]),

                    o("div", {}, [t._v(" " + t._s(t.volume) + "% ")])]),


                o("div", {
                    staticClass: "dimmer",
                    on: {
                        click: t.doCommand
                    }
                }, [

                    o("VueSlider", {
                        staticStyle: {
                            margin: "20px 16px"
                        },
                        attrs: {
                            min: 0,
                            max: 100,
                            // step: 1,
                            "dot-size": 50,
                            height: 12,
                            "process-style": t.process1,
                            "rail-style": t.rail1,
                            lazy: !0
                        },
                        on: {
                            change: t.updateSlider
                        },
                        model: {
                            value: t.volume,
                            callback: function (e) {
                                t.volume = e
                                t.level = e
                            },
                            expression: "volume"
                        }
                    }),
                    o("div", {
                        staticClass: "trackDescription",
                        domProps: {
                            innerHTML: t._s(t.attr4.trackDescription)
                        }
                    })

                ],

                    1),

                // creating the song picker here 
                // o("div", {

                // }, [
                //     //  need to loop over the restul of the getfav function

                // ])


            ]),
            o("div", {
                staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg",
                style: {
                    fontSize: "2.5rem"
                },
                on: {
                    click: t.hidePopup
                }
            }, [t._v(" X ")])

        ])


        ]) : t._e()




        ])
}