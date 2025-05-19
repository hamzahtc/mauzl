"use client";

import { Stack } from "@mui/material";
import i18n, { changeLanguage } from "@/i18n/i18n";
import { Language } from "@/i18n/types";
import { useState } from "react";
import Image from "next/image";

const LanguageSelect = () => {
  const [language, setLanguage] = useState<Language>(i18n.language as Language);

  const handleChange = (lang: Language) => {
    setLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <Stack gap={1} direction="row">
      <Image
        src="/svgs/us.svg"
        alt="en"
        width={28}
        height={28}
        onClick={() => handleChange(Language.EN)}
        style={{
          cursor: "pointer",
          minWidth: "28px",
          filter:
            language === Language.EN ? "brightness(1)" : "brightness(0.5)",
          transition: "filter 0.3s ease",
        }}
      />
      <Image
        src="/svgs/fr.svg"
        alt="fr"
        width={28}
        height={28}
        onClick={() => handleChange(Language.FR)}
        style={{
          cursor: "pointer",
          minWidth: "28px",
          filter:
            language === Language.FR ? "brightness(1)" : "brightness(0.5)",
          transition: "filter 0.3s ease",
        }}
      />
    </Stack>
  );
};

export default LanguageSelect;
