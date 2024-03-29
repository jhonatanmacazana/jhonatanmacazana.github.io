---
title: "El Aire Que Respiras"
date: 2019-02-01
client: UTEC
services: "IoT, Firmware development, Microcontrollers"
tech: "C, Microchip, AVR"
website: "https://elairequerespiras.pe"
featuredImg: "/assets/works/eaqr/preview.jpg"
images:
  - alt: "main"
    src: "/assets/works/eaqr/main.jpg"

  - alt: "details"
    src: "/assets/works/eaqr/details.jpg"

  - alt: "statistics"
    src: "/assets/works/eaqr/statistics.jpg"
---

This is an air quality measurement device for CO, CO2, PM of 2.5um, and PM of 10um. The project has a simple interface with the user with an RGB Ld, a 16x2 LCD screen, and a push-button. This device is portable and was used to perform a study on many points of interest in Lima, Peru.

<br />

During the design phase, I developed the firmware for the data acquisition with the sensors and the menu interface. Most of the sensors used the UART protocol, and the LCD was connected with an I2C adapter. The microcontroller used is the ATmega328P and the source code is written in embedded-C and tested with the Microchip Studio.
There is also a push-button that triggers a new measurement and is shown on the LCD screen.

<br />

This tool was developed with the Departments of the Electrical and Environmental Engineering of UTEC.
