import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-center mx-auto my-3 mt-10 text-gray-400">
      © 2023 Developed by Jaewon Han
    </footer>
  );
}
