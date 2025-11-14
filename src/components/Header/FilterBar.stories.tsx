import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = () => <Header totalTodos={5} completedTodos={2} />;
