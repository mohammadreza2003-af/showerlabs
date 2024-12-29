const VideoSection = () => {
  return (
    <section className="w-full px-6 py-24 flex m-auto items-center h-full justify-center bg-white">
      <div className="max-w-[1260px] flex px-6 flex-col items-center gap-5">
        <video
          controls
          className="w-[1000px] rounded-lg"
          src="/videos/vid1.mp4"
          poster="/videos/vid1-poster.JPG"
          preload="none"
        ></video>
      </div>
    </section>
  );
};

export default VideoSection;
