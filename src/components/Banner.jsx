import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <section className="lg:h-screen md:h-96 h-72 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner bg-center bg-no-repeat opacity-80" />
      <div className="absolute w-full lg:top-72 lg:transform lg:-translate-y-1/2 top-1/4 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-3xl lg:text-6xl">{t("date")}</h2>
        <p className="text-lg lg:text-2xl lg:mt-4 mt-2.5">
          {t("We are getting married")}
        </p>
      </div>
    </section>
  );
}
