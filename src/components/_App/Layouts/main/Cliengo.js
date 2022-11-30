import React, { memo, useEffect } from "react";

const Cliengo = memo(() => {
  useEffect(() => {
    var ldk = document?.createElement("script");
    ldk.type = "text/javascript";
    ldk.async = true;
    ldk.src =
      "https://s.cliengo.com/weboptimizer/6332288544d2f2002ae5d65f/6332288844d2f2002ae5d662.js?platform=dashboard";
    let s = document?.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ldk, s);
  }, []);

  return <div className="cliengo-chat"></div>;
});

export default Cliengo;
