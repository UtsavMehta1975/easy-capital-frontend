"use client";
import { useEffect } from "react";

export default function TawkTo() {
    useEffect(() => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script");
            s1.async = true;
            s1.src = 'https://embed.tawk.to/66e69108ea492f34bc13f088/1i7qad326';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            document.body.appendChild(s1);
        })();
    }, []);

    return null; // No UI, it just loads the script
}
