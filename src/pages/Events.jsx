import React from "react";
import "./Events.css";

/* Event Images */
import event1 from "../assets/events/event1.jpg";
import event2 from "../assets/events/event2.jpg";
import event3 from "../assets/events/event3.jpg";
import event4 from "../assets/events/event4.jpg";
import event5 from "../assets/events/event5.jpg";
import event6 from "../assets/events/event6.jpg";
import event7 from "../assets/events/event7.jpg";
import event8 from "../assets/events/event8.jpg";
import event9 from "../assets/events/event9.jpg";
import event10 from "../assets/events/event10.jpg";
import event11 from "../assets/events/event11.jpg";
import event12 from "../assets/events/event12.jpg";
import event13 from "../assets/events/event13.jpg";
import event14 from "../assets/events/event14.jpg";
import event15 from "../assets/events/event15.jpg";
import event16 from "../assets/events/event16.jpg";
import event17 from "../assets/events/event17.jpg";
import event18 from "../assets/events/event18.jpg";
import event19 from "../assets/events/event19.jpg";
import event20 from "../assets/events/event20.jpg";

function Events() {
  const events = [
    {
      title: "Shubharambha",
      description:
        "Shubharambh marks a new journey for Rotaract Club of YCCE! We begin this tenure with vision and commitment to serve.",
      image: event1,
      link: "#",
    },
    {
      title: "Fellowships",
      description:
        "Stepping into our first fellowship, filled with ideas, learning, and purpose.",
      image: event2,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU2NzE5MzgzNjMzTWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDNhZmFjMjZjLWNlMzEtNDJkOS1iNWQ4LTg4ZGE1YTk1NTMwNyUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyRmVsbG93c2hpcCUyME1lZXQlMjAxLjAlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMkZlbGxvd3NoaXAlMjBNZWV0JTIwb24lMjAybmQlMjBBdWclMjB1bml0ZWQlMjAzOCUyMFJvdGFyYWN0b3JzJTIwd2l0aCUyMGZ1biUyQyUyMGxlYXJuaW5nJTJDJTIwZ2FtZXMlMjAlMjYlMjBGcmllbmRzaGlwJTIwRGF5LiUyMiU3RA==",
    },
    {
      title: "Tarunpatra",
      description:
        "Through our Banner Donation Drive in slum areas, we aimed to bring dignity and support to communities in need.",
      image: event3,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU3MTAxODIzNTEzTWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDUxOGE3NDcxLTRmYjctNDM1MS05NjhmLTYxZGE4NDhkYjlmNiUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyJUUwJUE0JUE0JUUwJUE1JThEJUUwJUE0JUIwJUUwJUE1JTgxJUUwJUE0JUEzJUUwJUE0JUFBJUUwJUE0JUE0JUUwJUE1JThEJUUwJUE0JUIwLSUyMEJhbm5lciUyMERvbmF0aW9uJTIwRHJpdmUlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMiVFMCVBNCVBNCVFMCVBNSU4RCVFMCVBNCVCMCVFMCVBNSU4MSVFMCVBNCVBMyVFMCVBNCVBQSVFMCVBNCVBNCVFMCVBNSU4RCVFMCVBNCVCMC0lMjBCYW5uZXIlMjBEb25hdGlvbiUyMERyaXZlJTNBJTIwNTAlMjBiYW5uZXJzJTIwZG9uYXRlZCUyQyUyMGNvbW11bml0eSUyMHN1cHBvcnQlMkMlMjBqb3klMjAlMjYlMjBlY28tZnJpZW5kbHklMjByZXVzZS4lMjIlN0Q=",
    },
    {
      title: "Thread of Honour",
      description:
        "A small gesture, a big impact! Celebrating Raksha Bandhan with gratitude for the unsung heroes of our campus.",
      image: event4,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU3MTA1NDE5OTMxTWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDZhNDc3N2E5LTUwMjctNDIzYy04ZTNiLTVmNjc4MTIyODk5YyUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyJUYwJTlGJThDJTlGJTIwJUUwJUE0JUI4JUUwJUE0JUFFJUUwJUE1JThEJUUwJUE0JUFFJUUwJUE0JUJFJUUwJUE0JUE4JTIwJUUwJUE0JUI4JUUwJUE1JTgyJUUwJUE0JUE0JUUwJUE1JThEJUUwJUE0JUIwJTIwJUUyJTgwJTkzJTIwVGhyZWFkJTIwb2YlMjBIb25vdXIlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMiVGMCU5RiU4QyU5RiUyMCVFMCVBNCVCOCVFMCVBNCVBRSVFMCVBNSU4RCVFMCVBNCVBRSVFMCVBNCVCRSVFMCVBNCVBOCUyMCVFMCVBNCVCOCVFMCVBNSU4MiVFMCVBNCVBNCVFMCVBNSU4RCVFMCVBNCVCMCUyMCVFMiU4MCU5MyUyMFRocmVhZCUyMG9mJTIwSG9ub3VyJTIwJUYwJTlGJThFJTk3JTIwUm90YXJhY3QlMjBZQ0NFJTIwY2VsZWJyYXRlZCUyMFJha3NoYSUyMEJhbmRoYW4lMjB3aXRoJTIwbG92ZSUyMCUyNiUyMGdyYXRpdHVkZS4lMjIlN0Q=",
    },
    {
      title: "Ek Vadal Bhartach",
      description:
        "Celebrating freedom through unity, service & patriotism! Grateful to have volunteered on this Independence Day.",
      image: event5,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU3MTMyNTUyNjY5TWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDY2Yzc3NTQ1LTdmODgtNDFlOS04YjE3LTExNWFhODY3MTM0MyUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIySW5kZXBlbmRlbmNlJTIwRGF5JTIwMjAyNSUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyUm90YXJhY3QlMjBZQ0NFJTIwcHJvdWRseSUyMGNlbGVicmF0ZWQlMjBJbmRlcGVuZGVuY2UlMjBEYXklMjBhdCUyMEZ1dGFsYSUyMExha2UlMjB3aXRoJTIwcGF0cmlvdGlzbSUyQyUyMHVuaXR5JTIwJTI2JTIwc2VydmljZS4lMjIlN0Q=",
    },
    /*{
      title: "Sports Fellowship",
      description:
        "Building Bonds Beyond Boundaries! Energy, enthusiasm, and endless smiles filled the day.",
      image: event6,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzcwNDk2ODA2MTA2WkdFM05qRmxaalF0TmpjNE15MDBaVFpoTFdFMk9EZ3RPREF4WkdWbVlUZzNOV1F6MC5qcGVnJTIyJTJDJTIycmVkaXJlY3RVcmwlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGcHJvamVjdCUzRmd1aWQlM0QxNDFkODgxZi01ZTUwLTQwY2ItODEwNi1lM2JjZmUzYzc3MTAlMjZsYW5nJTNEZW4lMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMlNwb3J0cyUyMEZlbGxvd3NoaXAlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMkElMjBzcG9ydHMlMjBmZWxsb3dzaGlwJTIwZXZlbnQlMjBwcm9tb3RpbmclMjBib25kaW5nJTJDJTIwdGVhbXdvcmslMkMlMjBhbmQlMjB3ZWxsLWJlaW5nJTIwYW1vbmclMjBSb3RhcmFjdCUyMG1lbWJlcnMuJTIyJTdE",
    },*/
    {
      title: "Azadi Ka Safar",
      description:
        "Reliving the glorious journey of India’s independence through knowledge and curiosity!",
      image: event7,
      link: "#",
    },
    {
      title: "Regional Training Program",
      description:
        "A power-packed session that taught us how the club works and how every effort creates impact.",
      image: event8,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU3MjcyMDA5Njc3TWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDk0ZjlhYzk5LTkzZTAtNDZkOS05MTFkLWU5MmI4NmFiNjEyOSUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyUm90YXJhY3QlMjBEaXN0cmljdCUyMFJlZ2lvbmFsJTIwVHJhaW5pbmclMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMlJBQyUyMFlDQ0UlMjAlMjYlMjBHSFJTVFUlMjBob3N0ZWQlMjBEaXN0cmljdCUyMFRyYWluaW5nJTIwd2l0aCUyMERSUiUyQyUyMERSUyUyMCUyNiUyMElQRFJDQyUyQyUyMGNvdmVyaW5nJTIwcmVwb3J0cyUyQyUyMHBvaW50cyUyMCUyNiUyMFRSRi4lMjIlN0Q=",
    },
    {
      title: "Nirmalya 3.0",
      description:
        "Devotion to Conservation. Turning sacred offerings into action for a cleaner, greener environment.",
      image: event9,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU5Njg3NDc4ODk5TWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRGNmYjUwMGFkLTA2M2YtNDAzMy05NGYyLWU4ZDQ1MDZhYjJkYSUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyTmlybWFseWElMjAzLjAlMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMkFuJTIwZWNvLWZyaWVuZGx5JTIwaW5pdGlhdGl2ZSUyMHByb21vdGluZyUyMHN1c3RhaW5hYmxlJTIwR2FuZXNoJTIwZmVzdGl2aXRpZXMlMjB0aHJvdWdoJTIwbmlybWFseWElMjBjb2xsZWN0aW9uLiUyMiU3RA==",
    },
    {
      title: "Nature Trail Visit",
      description:
        "Gorewada Green Steps for a Better Future! Fresh air, wildlife, and stronger bonds.",
      image: event10,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU5NzQ3NDc2NjU3TWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDk4ZDNlODA3LWJiNmItNDlhNS1hOGRjLWNkMjgwZjk2ODZlZiUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyTmF0dXJlcyUyMFdhbGslMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMjMyJTIwWUNDRSUyMFJvdGFyYWN0JTIwbWVtYmVycyUyMGVuam95ZWQlMjBhJTIwZnVuJTIwYW5kJTIwaW50ZXJhY3RpdmUlMjBqYW1taW5nJTIwc2Vzc2lvbiUyMG9uJTIwMjB0aCUyMFNlcHRlbWJlciUyMDIwMjUuJTIyJTdE",
    },
    {
      title: "Raas Garba 2025",
      description:
        "Beats thundered, colors sparkled, and every step united the crowd in rhythm and joy.",
      image: event11,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzU5NzYzNTY2NzMzTWpJeE1qRmpZMkV0T0RZMU15MDBZbVZrTFdFMU1UTXROR016TnpnM05EQmtOMkl3MC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRGJiMDEyNWM5LWRkZDUtNDkxMi05MjExLWY1NzhmMmU5MGY3MiUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyVGhlJTIwTWVnYSUyMFJlZ2lvbmFsJTIwUmFhcyUyMEdhcmJhJTIwTmlnaHQlMjAyMDI1JTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjJBJTIwdmlicmFudCUyMEdhcmJhJTIwTmlnaHQlMjB1bml0aW5nJTIwY2x1YnMlMjBpbiUyMGRhbmNlJTJDJTIwY3VsdHVyZSUyQyUyMGFuZCUyMGZlc3RpdmUlMjBzcGlyaXQlMjB3aXRoJTIwam95ZnVsJTIwZW5lcmd5LiUyMiU3RA==",
    },
    {
      title: "Small Act, Big Impact",
      description:
        "A session highlighting how even the smallest actions can bring the biggest change!",
      image: event12,
      link: "#",
    },
    {
      title: "Tour de Memories 2025",
      description:
        "Laughter, cheers, and endless smiles! Rotaractors shared favorite R.I.D.E. moments.",
      image: event13,
      link: "#",
    },
    {
      title: "Aashayein",
      description:
        "Regional Diwali Celebration Bringing clubs together for celebration and community service.",
      image: event14,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzYzMzY5ODY2OTE3Tnpsak9XTTNaV1l0T1dSbU1pMDBObVl5TFdGaU5XTXRNakV6TW1RME9EbG1NelUwMC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRDBjNjIzYWM4LTZjNTgtNGI1Mi04Mjk3LTg0ZDM3ODFkNzQ5NCUyNmxhbmclM0RlbiUyMiUyQyUyMnRpdGxlJTIyJTNBJTIyQWFzaGF5ZWluJTIwJUUyJTgwJTkzJTIwUmVnaW9uYWwlMjBEaXdhbGklMjBDZWxlYnJhdGlvbiUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyQSUyMHJlZ2lvbmFsJTIwRGl3YWxpJTIwY2VsZWJyYXRpb24lMjBzcHJlYWRpbmclMjBqb3klMjBhbW9uZyUyMHVuZGVycHJpdmlsZWdlZCUyMGNoaWxkcmVuLiUyMiU3RA==",
    },
    {
      title: "Jashn-e-Diwali",
      description:
        "Celebrated with laughter, music, vibrant Diwali spirit, and unforgettable memories.",
      image: event15,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzYzMzcwMDUwODkyTnpsak9XTTNaV1l0T1dSbU1pMDBObVl5TFdGaU5XTXRNakV6TW1RME9EbG1NelUwMC5qcGclMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGc3BjLnJvdGFyeS5vcmclMkZwcm9qZWN0JTNGZ3VpZCUzRGE1MDk0NjYwLWQ4ZGQtNDc1NC04NjFmLTFiOTc0Yjk5OGUxMyUyNmxhbmclM0RlbiUyQiUyQyUyMnRpdGxlJTIyJTNBJTIySmFzaG4tZS1EaXdhbGklMjAlRTIlODAlOTMlMjBDbHViJTIwRGl3YWxpJTIwQ2VsZWJyYXRpb24lMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMkElMjBmZXN0aXZlJTIwZmVsbG93c2hpcCUyMGV2ZW50JTIwY2VsZWJyYXRpbmclMjB1bml0eSUyQyUyMGpveSUyQyUyMGFuZCUyMHRvZ2V0aGVybmVzcy4lMjIlN0Q=",
    },
    {
      title: "READRISE",
      description:
        "District Literacy Initiative with book donation drives and storytelling sessions.",
      image: event16,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzY0ODQ3MDA0NjM3WkdFM05qRmxaalF0TmpjNE15MDBaVFpoTFdFMk9EZ3RPREF4WkdWbVlUZzNOV1F6MC5qcGVnJTIyJTJDJTIycmVkaXJlY3RVcmwlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGcHJvamVjdCUzRmd1aWQlM0RmMzBiMTI5MS1kMWIwLTRlYWUtYmIwOS05NjAxZDU0N2IxNzAlMjZsYW5nJTNEZW4lMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMlJlYWRSaXNlJTIyJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjJBJTIwYm9vay1kb25hdGlvbiUyMGluaXRpYXRpdmUlMjBmb3N0ZXJpbmclMjBzdHJvbmclMjByZWFkaW5nJTIwaGFiaXRzJTIwYW5kJTIwZWR1Y2F0aW9uYWwlMjBncm93dGglMjBhbW9uZyUyMHlvdW5nJTIwY2hpbGRyJTIyJTdE",
    },
    {
      title: "Bedsheet Donation Drive",
      description:
        "A small effort, a big difference. Sharing warmth, care, and comfort.",
      image: event17,
      link: "https://spc.rotary.org/socialMediaShare?input=JTdCJTIyaW1hZ2UlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGYXp1cmVJbWFnZXMlMkYxNzY3MTcxMzg3ODcyWkdFM05qRmxaalF0TmpjNE15MDBaVFpoTFdFMk9EZ3RPREF4WkdWbVlUZzNOV1F6MC5qcGVnJTIyJTJDJTIycmVkaXJlY3RVcmwlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnNwYy5yb3Rhcnkub3JnJTJGcHJvamVjdCUzRmd1aWQlM0Q0OTg1Yjc5Ny0yN2IxLTRhZWItYWY0Ny1jNWQxMjhkNGRiMGYlMjZsYW5nJTNEZW4lMjIlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFMCVBNCVBRSVFMCVBNCVCRSVFMCVBNCVBRiVFMCVBNSU4NyVFMCVBNCU5QSVFMCVBNSU4MCUyMCVFMCVBNCU5QSVFMCVBNCVCRSVFMCVBNCVBNiVFMCVBNCVCMCUyMCVFMiU4MCU5MyUyMFBoYXNlJTIwMSUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyRGlzdHJpYnV0aW9uJTIwb2YlMjBiZWRzaGVldHMlMjBhbmQlMjBlbW90aW9uYWwlMjBzdXBwb3J0JTIwdG8lMjBob21lbGVzcyUyMGluZGl2aWR1YWxzJTIwYXQlMjBhbiUyMHVyYmFuJTIwc2hlbHRlci4lMjIlN0Q=",
    },
    {
      title: "Stationery Donation Drive",
      description:
        "Providing underprivileged women and girls with essential hygiene products.",
      image: event18,
      link: "#",
    },
    {
      title: "Anna Danam",
      description: "A noble act of feeding the hungry with compassion and service.",
      image: event19,
      link: "#",
    },
    {
      title: "Club Presentation",
      description:
        "A journey built with teamwork, laughter, dedication, and unforgettable memories.",
      image: event20,
      link: "#",
    },
  ];

  return (
    <div className="events-page-light">
      <section className="reactive-events-section">
        <div className="bg-orb pink-orb-left"></div>
        <div className="bg-orb pink-orb-right"></div>

        <div className="events-section-header">
          <p>✦ Our Initiatives ✦</p>
          <h2>Events & Impact Stories</h2>
          <span></span>
          <small>
            A glimpse into the service projects, fellowships, drives, and
            celebrations that shaped our Rotaract journey.
          </small>
        </div>

        <div className="reactive-events-grid">
          {events.map((event, index) => {
            const hasValidLink = event.link && event.link !== "#";

            return (
              <div
                key={event.title}
                className="glass-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="glass-card-inner">
                  <div className="glass-image-wrapper">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="glass-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="glass-content">
                    <h3 className="glass-title">{event.title}</h3>
                    <p className="glass-description">{event.description}</p>

                    <div className="glass-action">
                      {hasValidLink ? (
                        <a
                          href={event.link}
                          className="glass-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Event
                        </a>
                      ) : (
                        <span className="glass-btn glass-btn-disabled">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Events;