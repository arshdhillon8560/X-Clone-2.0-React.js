import React, { useRef } from 'react';
import { X } from 'lucide-react';

const ImageUpload = ({ onImageSelect, selectedImages, onRemoveImage }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          onImageSelect({
            file,
            url: e.target.result,
            id: Date.now() + Math.random()
          });
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Reset input
    event.target.value = '';
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <button 
        onClick={triggerFileSelect}
        className="hover:bg-[#1d9bf0]/10 p-2 rounded-full transition-colors"
        type="button"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </button>

      {/* Image Preview */}
      {selectedImages && selectedImages.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {selectedImages.map((image) => (
            <div key={image.id} className="relative">
              <img 
                src={image.url} 
                alt="Upload preview" 
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => onRemoveImage(image.id)}
                className="absolute top-1 right-1 bg-black/70 hover:bg-black/90 rounded-full p-1 transition-colors"
                type="button"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImageUpload;