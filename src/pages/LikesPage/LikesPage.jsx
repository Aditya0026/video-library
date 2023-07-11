import React from "react";
import "./LikesPage.css";
import { NoVideosFound } from "../../components/NoVideosFound/NoVideosFound";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
export const LikesPage = () => {
  const { likes } = useSelector((store) => store.likes);

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
                ( {(likes && likes.length) || 0} )
              </span>
            </div>
          </div>
          <div className="outer-grid video-outer-grid">
            {likes && likes.length === 0 ? (
              <NoVideosFound>
                <div class="btn_1">
                  <a class="btn btn-squared no-found-cta " href="/">
                    LIKE VIDEOS
                  </a>
                </div>
              </NoVideosFound>
            ) : (
              ""
            )}
            <div className="video_grid">
              {likes &&
                likes.length > 0 &&
                likes?.map((likedVideo) => (
                  <VideoCard key={likedVideo._id} video={likedVideo} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
