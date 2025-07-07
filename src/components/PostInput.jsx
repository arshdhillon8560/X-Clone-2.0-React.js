import React, { useState } from 'react';
import { BarChart3, Smile } from 'lucide-react';
import EmojiPicker from './EmojiPicker';
import ImageUpload from './ImageUpload';

const PostInput = ({ onCreatePost }) => {
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleSubmit = () => {
    if (content.trim() || selectedImages.length > 0) {
      onCreatePost(content, selectedImages);
      setContent('');
      setSelectedImages([]);
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

  return (
    <div className="border-b border-gray-800 p-4">
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
            placeholder="What is happening?!" 
            className="w-full bg-transparent text-xl outline-none mb-4 resize-none text-white"
            rows="3"
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
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInput;