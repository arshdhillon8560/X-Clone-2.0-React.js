import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PostInput from './components/PostInput';
import Post from './components/Post';
import RightSidebar from './components/RightSidebar';
import PostModal from './components/PostModal';
import ReplyModal from './components/ReplyModal';
import { mockPosts } from './data/mockData';

function App() {
  const [posts, setPosts] = useState(mockPosts);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyToPost, setReplyToPost] = useState(null);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const createPost = (content, images = []) => {
    const newPost = {
      id: generateId(),
      content,
      images: images || [],
      author: {
        name: 'Anonymous User',
        username: 'anonymous',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60'
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      retweets: 0,
      replyCount: 0,
      liked: false,
      replies: []
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleRetweet = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          retweets: post.retweets + 1
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleReply = (post) => {
    setReplyToPost(post);
    setIsReplyModalOpen(true);
  };

  const submitReply = (postId, content, images = []) => {
    const newReply = {
      id: generateId(),
      content,
      images: images || [],
      author: {
        name: 'Anonymous User',
        username: 'anonymous'
      },
      createdAt: new Date().toISOString()
    };

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [...(post.replies || []), newReply],
          replyCount: (post.replyCount || 0) + 1
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter(post => 
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.author.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex">
        <Sidebar onOpenPostModal={() => setIsPostModalOpen(true)} />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen border-x border-gray-800 ml-[68px] xl:ml-[275px] max-w-[600px]">
          <Header />
          <PostInput onCreatePost={createPost} />
          
          {/* Posts Container */}
          <div className="pb-16 md:pb-0">
            {filteredPosts.map(post => (
              <Post 
                key={post.id}
                post={post}
                onLike={handleLike}
                onRetweet={handleRetweet}
                onReply={handleReply}
              />
            ))}
          </div>
        </main>

        <RightSidebar onSearch={handleSearch} />
      </div>

      {/* Modals */}
      <PostModal 
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onCreatePost={createPost}
      />
      
      <ReplyModal 
        isOpen={isReplyModalOpen}
        onClose={() => setIsReplyModalOpen(false)}
        onSubmitReply={submitReply}
        replyToPost={replyToPost}
      />
    </div>
  );
}

export default App;