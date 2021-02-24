import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";
const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    mount(ref.current, {
      onNavigate: (location) => {
        if (history.pathname !== location.pathname)
          history.push(location.pathname);
      },
    });
  }, []);
  return <div ref={ref} />;
};

export default MarketingApp;
