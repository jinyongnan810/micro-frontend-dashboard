import React, { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { mount } from "marketing/MarketingApp";
const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        if (history.location.pathname !== location.pathname)
          history.push(location.pathname);
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};

export default MarketingApp;
