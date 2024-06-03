import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";
import { error } from "console";

type GreetingContainerPropsType = {
  users: Array<UserType>; // need to fix any
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (
  name: string,
  setError: (name: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void // ??? как типизировать
) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

  if (!name.trim()) {
    setError("Ошибка! Введите имя!");
  } else {
    addUserCallback(name);
    setName("");
  }
};

export const pureOnBlur = (name: string, setError: Function) => {
  //   если имя пустое - показать ошибку - почему-то не работает
  if (name.length === 0) {
    setError(); // почему error не срабатывает

    console.log("error");
  }
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: (name: string) => void
) => {
  // если нажата кнопка Enter - добавить

  if (e.key === "Enter") {
    addUser(e.currentTarget.value);
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(""); // need to fix any
  const [error, setError] = useState<string>(""); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // need to fix any

    let name = e.currentTarget.value;

    setName(name);

    // error && setError("dd");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = users[users.length - 1]?.name;

  console.log(users);

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
