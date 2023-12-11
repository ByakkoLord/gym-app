import React, { createContext, ReactNode, useState } from "react";

export const DaysContext = createContext<{
    Sunday: boolean,
    setSunday: (value: boolean) => void,
    Monday: boolean,
    setMonday: (value: boolean) => void,
    Tuesday: boolean,
    setTuesday: (value: boolean) => void,
    Wednesday: boolean,
    setWednesday: (value: boolean) => void,
    Thursday: boolean,
    setThursday: (value: boolean) => void,
    Friday: boolean,
    setFriday: (value: boolean) => void,
    Saturday: boolean,
    setSaturday: (value: boolean) => void,
    workDay: boolean,
    setWorkDay: (value: boolean) => void,
    exercises: {series: number, reps: number, name: string}[],
    setExercises: React.Dispatch<React.SetStateAction<{series: number, reps: number, name: string}[]>>,
}>({
    Sunday: false,
    setSunday: () => {},
    Monday: false,
    setMonday: () => {},
    Tuesday: false,
    setTuesday: () => {},
    Wednesday: false,
    setWednesday: () => {},
    Thursday: false,
    setThursday: () => {},
    Friday: false,
    setFriday: () => {},
    Saturday: false,
    setSaturday: () => {},
    workDay: false,
    setWorkDay: () => {},
    exercises: [],
    setExercises: () => {},
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

    const [exercises, setExercises] = useState<{series: number, reps: number, name: string}[]>([]);

    return (
        <DaysContext.Provider value={{exercises, setExercises ,workDay, setWorkDay, Sunday, setSunday, Monday, setMonday, Tuesday, setTuesday, Wednesday, setWednesday, Thursday, setThursday, Friday, setFriday, Saturday, setSaturday }}>
            {children}
        </DaysContext.Provider>
    )
}