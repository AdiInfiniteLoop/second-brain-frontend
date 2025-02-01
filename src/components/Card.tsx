//card has three types: tweet, youtube link or content

import { DeleteIcon } from "../assets/icons/DeleteIcon";
import { ShareIcon } from "../assets/icons/ShareIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { VideoIcon } from "../assets/icons/VideoIcon";
// import {Tweet } from 'react-tweet'

interface CardInterface {
  type: "twitter" | "youtube";
  tags?: string[];
  title: string;
  date?: Date;
  content?: string[] | string; //(an image of the thumbnail)
  link: string;
}

const defaultstyles = `p-8 rounded-md shadow-md border border-gray-100 bg-white max-w-96 `;
const Card: React.FC<CardInterface> = (props) => {
  return (
    <div>
      <div className={`${defaultstyles}`}>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            {props.type === "twitter" ? <TwitterIcon /> : <VideoIcon />}
            <span className="font-semibold text-xl text-gray-700">
              {" "}
              {props.title}
            </span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <ShareIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className="pt-4">
          {props.type === "twitter" ? (
            <blockquote className="twitter-tweet">
              <a href={`${props.link}`}></a>
            </blockquote>
          ) : (
            <iframe
              className="w-full"
              src={`${props.link}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;


