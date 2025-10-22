import React, { useEffect } from "react";

const PIXEL_ID = "1839303259976642";

const MetaPixel = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
    } catch (error) {
      console.warn("Meta pixel script failed to load.", error);
      return;
    }

    if (typeof window.fbq === "function") {
      window.fbq("init", PIXEL_ID);
      window.fbq("track", "PageView");
    } else {
      console.warn("Meta pixel blocked by an extension; skipping init.");
    }
  }, []);

  return null;
};

export default MetaPixel;
