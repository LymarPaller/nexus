import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import Feed from "../components/Feed";

function FeedsPage() {

  useEffect(() => {
    document.title = 'Feed';  
  }, []);

  return (
    <div className="save-page-container">
      <div className="news-feed-container">
        <Feed />
        <Feed />
      </div>
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default FeedsPage;
