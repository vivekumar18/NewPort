import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaExpand, FaXmark, FaLocationDot, FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const galleryPhotos = [
  {
    id: 1,
    title: "Studio Headshot",
    category: "Studio",
    image: "/image/img1.jpeg",
    location: "Studio",
    description: "Professional studio headshot with blue ambient accent lighting.",
  },
  {
    id: 2,
    title: "India Gate Portrait",
    category: "Outdoors",
    image: "/image/img.png",
    location: "New Delhi, India",
    description: "Portrait shot at India Gate national monument.",
  },
  {
    id: 5,
    title: "Urban Night Portrait",
    category: "Outdoors",
    image: "/image/img4.jpeg",
    location: "Noida, UP",
    description: "Night city portrait with automotive backdrop.",
  },
];

const categories = ["All Photos", "Studio", "Outdoors"];

export default function Gallery({ darkMode }) {
  const [activeTab, setActiveTab] = useState("All Photos");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredPhotos = activeTab === "All Photos" 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeTab);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-500 mb-3 border border-blue-500/20">
            <FaCamera className="text-xs" />
            <span>Photo Gallery</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional & <span className="text-blue-500">Personal Gallery</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A visual glance into my professional profile, studio headshots, and personal highlights.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : darkMode
                  ? 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500/40' : 'bg-white border-slate-200 hover:border-blue-500/40'
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 px-2 py-0.5 rounded">
                      {photo.category}
                    </span>
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <FaExpand className="text-xs" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1">{photo.title}</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1">
                    <FaLocationDot className="text-rose-400 text-xs" />
                    <span>{photo.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && filteredPhotos[selectedIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition backdrop-blur-md border border-slate-700"
              >
                <FaXmark className="text-xl" />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition backdrop-blur-md border border-slate-700 hidden sm:flex"
              >
                <FaAngleLeft className="text-xl" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition backdrop-blur-md border border-slate-700 hidden sm:flex"
              >
                <FaAngleRight className="text-xl" />
              </button>

              {/* Full Image */}
              <div className="relative max-h-[75vh] max-w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <img
                  src={filteredPhotos[selectedIndex].image}
                  alt={filteredPhotos[selectedIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center text-white">
                <h4 className="text-xl font-bold">{filteredPhotos[selectedIndex].title}</h4>
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-2">
                  <FaLocationDot className="text-rose-400" />
                  <span>{filteredPhotos[selectedIndex].location}</span>
                  <span>•</span>
                  <span>{filteredPhotos[selectedIndex].description}</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
