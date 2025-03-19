import { useTranslation } from "react-i18next";

const languages = [
  { code: "en-US", name: "English" },
  { code: "zh-CN", name: "中文" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = async (languageCode: string) => {
    await i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        className="block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
        value={i18n.language}
        onChange={(e) => void handleLanguageChange(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}
