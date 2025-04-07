"use client";


import { useState } from 'react'

function Photos() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentVideo(null)
  }

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          'https://www.youtube.com/embed/MfOfKOXKv2I',
          'https://www.youtube.com/embed/VIDEO_ID_2',
          'https://www.youtube.com/embed/VIDEO_ID_3',
          'https://www.youtube.com/embed/VIDEO_ID_4',
          'https://www.youtube.com/embed/VIDEO_ID_5',
        ].map((videoUrl, videoIndex) => (
          <div
            key={videoUrl}
            className={clsx(
              'relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[videoIndex % rotations.length],
            )}
            onClick={() => openModal(videoUrl)}
          >
            <iframe
              src={videoUrl}
              title={`YouTube video ${videoIndex + 1}`}
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-11/12 max-w-4xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={currentVideo}
                title="YouTube video player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


export default Photos