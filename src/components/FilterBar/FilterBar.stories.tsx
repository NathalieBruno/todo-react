import FilterBar from "./FilterBar";

export default {
  title: "Components/FilterBar",
  component: FilterBar,
};

export const Default = () => (
  <FilterBar
    activeFilter="all"
    onChange={() => {}}
    showCompletedFirst={false}
    onToggleSort={() => {}}
    search=""
    onSearch={() => {}}
  />
);
