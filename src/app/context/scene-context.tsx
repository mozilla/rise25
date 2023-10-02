'use client';

import React, { createContext, useContext } from "react";

export type SceneContextType = {
  scene: number;
  setScene: (scene: number) => void;
};

const Context = createContext<SceneContextType>({
  scene: 1,
  setScene: (scene) => console.warn(`no scene provider found ${scene}`),
});

const SceneProvider = ({ children }: { children: JSX.Element }) => {
  const [scene, setScene] = React.useState<number>(1);;

  return (
    <Context.Provider
      value={{
        scene,
        setScene,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useScene = () => useContext(Context);

export { SceneProvider, useScene };
