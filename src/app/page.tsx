import React from "react";
import TodoList from "./components/TodoList";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <TodoList />
    </div>
  );
};

export default Home;
