import React, { useState } from 'react';
import { X, BarChart3, Smile } from 'lucide-react';
import EmojiPicker from './EmojiPicker';
import ImageUpload from './ImageUpload';

const ReplyModal = ({ isOpen, onClose, onSubmitReply, replyToPost }) => {
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleSubmit = () => {
    if ((content.trim() || selectedImages.length > 0) && replyToPost) {
      onSubmitReply(replyToPost.id, content, selectedImages);
      setContent('');
      setSelectedImages([]);
      onClose();
    }
  };

  const handleEmojiSelect = (emoji) => {
    setContent(prev => prev + emoji);
  };

  const handleImageSelect = (image) => {
    setSelectedImages(prev => [...prev, image]);
  };

  const handleRemoveImage = (imageId) => {
    setSelectedImages(prev => prev.filter(img => img.id !== imageId));
  };

  if (!isOpen || !replyToPost) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-black w-full max-w-lg mx-auto mt-20 rounded-2xl">
        <div className="p-4 border-b border-gray-800">
          <button onClick={onClose} className="hover:bg-gray-900/50 p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          {/* Original Post */}
          <div className="border-l-2 border-gray-800 pl-4 mb-4">
            <div className="flex items-center">
              <span className="font-bold">{replyToPost.author.name}</span>
              <span className="text-gray-500 ml-2">@{replyToPost.author.username || 'user'}</span>
            </div>
            <p className="text-gray-300">{replyToPost.content}</p>
            {replyToPost.images && replyToPost.images.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {replyToPost.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image.url} 
                    alt="Post image" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Reply Input */}
          <div className="flex gap-4">
            <img 
              className="w-12 h-12 rounded-full" 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60" 
              alt="Profile" 
            />
            <div className="flex-1">
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post your reply" 
                className="w-full bg-transparent text-xl outline-none mb-4 resize-none text-white"
                rows="3"
                autoFocus
              />
              
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-[#1d9bf0] relative">
                  <ImageUpload 
                    onImageSelect={handleImageSelect}
                    selectedImages={selectedImages}
                    onRemoveImage={handleRemoveImage}
                  />
                  <button className="hover:bg-[#1d9bf0]/10 p-2 rounded-full">
                    <BarChart3 className="w-5 h-5" />
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                      className="hover:bg-[#1d9bf0]/10 p-2 rounded-full"
                    >
                      <Smile className="w-5 h-5" />
                    </button>
                    <EmojiPicker 
                      isOpen={isEmojiPickerOpen}
                      onClose={() => setIsEmojiPickerOpen(false)}
                      onEmojiSelect={handleEmojiSelect}
                    />
                  </div>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold hover:bg-[#1a8cd8] disabled:opacity-50"
                  disabled={!content.trim() && selectedImages.length === 0}
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;