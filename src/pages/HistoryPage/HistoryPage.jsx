import React from "react";
import { NoVideosFound } from "../../components/NoVideosFound/NoVideosFound";
import { useSelector } from "react-redux";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useClearHistoryMutation } from "../../features/api/historyApi/historySlliceApi";

export const HistoryPage = () => {
  const { history } = useSelector((store) => store.history);
  console.log(history, "asf");
  const { authToken } = useSelector((store) => store.authentication);
  return (
    <>
      <div className="homeContainer">
        <div className="flex-base flex-column container ">
          <div
            style={{ marginBottom: "1em", marginTop: "1em" }}
            className="outer-grid flex-base"
          >
            <div className="page-heading">
              Liked
              <span className="page-number">
                ( {(history && history.length) || 0} )
              </span>
            </div>
          </div>
          <div className="outer-grid video-outer-grid">
            {history && history.length === 0 ? (
              <NoVideosFound>
                <div class="btn_1">
                  <a class="btn btn-squared no-found-cta " href="/">
                    WATCH VIDEOS
                  </a>
                </div>
              </NoVideosFound>
            ) : (
              ""
            )}
            <div className="video_grid">
              {history &&
                history.length > 0 &&
                history?.map((likedVideo) => (
                  <VideoCard key={likedVideo._id} video={likedVideo} />
                ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
