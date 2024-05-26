import LoadingBars from "../molecules/LoadingBars";

const LoadingSection = () => {
  return (
    <section
      aria-busy="true"
      className="flexCenter absolute left-0 top-0 z-40 h-screen w-screen flex-col bg-white"
    >
      <LoadingBars />
    </section>
  );
};

export default LoadingSection;
