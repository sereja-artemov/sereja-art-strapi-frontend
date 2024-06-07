import { useDarkMode } from "@/context/darkModeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeToggle() {
  const { isDarkMode, changeDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center shrink-0 lg:mr-4">
            <div className="w-10 h-10 max-h-12">
              <DarkModeSwitch
                sunColor="#0f172a"
                moonColor="#ededef"
                style={{ width: '100%', height: 'auto' }}
                checked={isDarkMode}
                onChange={changeDarkMode}
              />
            </div>
          </div>
  )
}

export default DarkModeToggle