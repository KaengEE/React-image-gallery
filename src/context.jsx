import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

// 브라우저에 다크모드 세팅 또는 마지막으로 다크모드로 사용했을 경우 true리턴됨.
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";

  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  //다크모드 설정되어 있지 않으면 라이트(false) 모드로 시작함.
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  //검색어는 처음에 cat으로 시작
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    const toggle = !isDarkTheme;
    setIsDarkTheme(toggle);
    localStorage.setItem("darkTheme", toggle); //다크모드가 바뀔때마다 브라우저에 저장
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    // 다크모드상태와 토글업데이트함수, 검색어와 검색어업데이트 함수 전역으로 전달.
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
