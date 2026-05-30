"use client"

import { useSyncExternalStore } from "react";
import { ContentContext } from "./ContentContext"
import { contentByLang, type Language } from "../content/resolver";

const defaultLanguage: Language = "en";
const languageStorageKey = "lang";
const languageChangeEvent = "portfolio-language-change";

const getStoredLanguage = (): Language => {
    const stored = localStorage.getItem(languageStorageKey) as Language | null;
    return stored && stored in contentByLang ? stored : defaultLanguage;
}

const subscribeToLanguage = (callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener(languageChangeEvent, callback);

    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(languageChangeEvent, callback);
    }
}

export function ContentProvider({children}: {children: React.ReactNode}) {
    const language = useSyncExternalStore(subscribeToLanguage, getStoredLanguage, () => defaultLanguage);

    const changeLanguage = (lang: Language) => {
        localStorage.setItem(languageStorageKey, lang);
        window.dispatchEvent(new Event(languageChangeEvent));
    }

    const value = {
        language: language,
        content: contentByLang[language],
        setLanguage: changeLanguage
    }

    return (
        <ContentContext value={value}>
            {children}
        </ContentContext>
    )
}
