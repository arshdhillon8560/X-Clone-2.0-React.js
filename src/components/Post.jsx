import React from 'react';
import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react';

const Post = ({ post, onLike, onRetweet, onReply }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <article className="border-b border-gray-800 p-4 hover:bg-gray-950/30 transition-colors">
      <div className="flex items-start gap-4 flex-wrap">
        <img 
          className="w-12 h-12 rounded-full shrink-0" 
          src={post.author.avatar} 
          alt={post.author.name} 
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center text-sm sm:text-base">
            <span className="font-bold hover:underline cursor-pointer">{post.author.name}</span>
            <span className="text-gray-500 ml-2">@{post.author.username || 'user'}</span>
            <span className="text-gray-500 ml-2">·</span>
            <span className="text-gray-500 ml-2">{formatDate(post.createdAt)}</span>
          </div>

          <p className="mt-2 text-white break-words">{post.content}</p>
          
          {/* Post Images */}
          {post.images?.length > 0 && (
            <div className={`mt-3 grid gap-2 rounded-2xl overflow-hidden ${
              post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
            }`}>
              {post.images.map((image, index) => (
                <img 
                  key={index}
                  src={image.url} 
                  alt="Post image" 
                  className={`w-full object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity ${
                    post.images.length === 1 ? 'max-h-96' : 'h-48 sm:h-60'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="flex justify-between mt-4 text-gray-500 max-w-md text-sm">
            <button 
              onClick={() => onReply(post)}
              className="flex items-center group hover:text-[#1d9bf0] transition-colors"
            >
              <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="ml-1 sm:ml-2">{post.replyCount || 0}</span>
            </button>

            <button 
              onClick={() => onRetweet(post.id)}
              className="flex items-center group hover:text-green-500 transition-colors"
            >
              <div className="p-2 rounded-full group-hover:bg-green-500/10">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span className="ml-1 sm:ml-2">{post.retweets || 0}</span>
            </button>

            <button 
              onClick={() => onLike(post.id)}
              className={`flex items-center group transition-colors ${post.liked ? 'text-pink-500' : 'hover:text-pink-500'}`}
            >
              <div className="p-2 rounded-full group-hover:bg-pink-500/10">
                <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
              </div>
              <span className="ml-1 sm:ml-2">{post.likes || 0}</span>
            </button>

            <button className="flex items-center group hover:text-[#1d9bf0] transition-colors">
              <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                <Share className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* Replies */}
          {post.replies?.length > 0 && (
            <div className="ml-4 mt-4">
              {post.replies.map((reply, index) => (
                <div key={index} className="border-l border-gray-800 pl-4 mb-3">
                  <div className="flex items-center text-sm flex-wrap">
                    <span className="font-bold">{reply.author.name}</span>
                    <span className="text-gray-500 ml-2">@{reply.author.username || 'user'}</span>
                    <span className="text-gray-500 ml-2">·</span>
                    <span className="text-gray-500 ml-2">{formatDate(reply.createdAt)}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{reply.content}</p>
                  {reply.images?.length > 0 && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {reply.images.map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image.url} 
                          alt="Reply image" 
                          className="w-full h-24 sm:h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Post;
