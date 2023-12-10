import { createContext, ReactNode, useState } from "react";

export const DaysContext = createContext({
    Sunday: false,
    setSunday: (value: boolean) => {},
    Monday: false,
    setMonday: (value: boolean) => {},
    Tuesday: false,
    setTuesday: (value: boolean) => {},
    Wednesday: false,
    setWednesday: (value: boolean) => {},
    Thursday: false,
    setThursday: (value: boolean) => {},
    Friday: false,
    setFriday: (value: boolean) => {},
    Saturday: false,
    setSaturday: (value: boolean) => {},
    workDay: false,
    setWorkDay: (value: boolean) => {},
});

export const DaysProvider = ({ children }: { children: ReactNode }) => {
    const [Sunday, setSunday] = useState<boolean>(false);
    const [Monday, setMonday] = useState<boolean>(false);
    const [Tuesday, setTuesday] = useState<boolean>(false);
    const [Wednesday, setWednesday] = useState<boolean>(false);
    const [Thursday, setThursday] = useState<boolean>(false);
    const [Friday, setFriday] = useState<boolean>(false);
    const [Saturday, setSaturday] = useState<boolean>(false);
    const [workDay, setWorkDay] = useState<boolean>(false);

    return (
        <DaysContext.Provider value={{workDay, setWorkDay, Sunday, setSunday, Monday, setMonday, Tuesday, setTuesday, Wednesday, setWednesday, Thursday, setThursday, Friday, setFriday, Saturday, setSaturday }}>
            {children}
        </DaysContext.Provider>
    )
}