export default function Banner() {
  return (
    <section className="lg:h-screen md:h-96 h-72 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner bg-center bg-no-repeat opacity-80" />
      <div className="absolute w-full lg:top-1/2 lg:transform lg:-translate-y-1/2 top-4 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-4xl lg:text-6xl">1월 13일,</h2>
        <p className="text-xl lg:text-2xl">준용과 재원 결혼합니다</p>
      </div>
    </section>
  );
}
