import "./FilterBar.css";
import type { FilterBarProps } from "../../types/props";
import { CiSearch } from "react-icons/ci";

function FilterBar({ activeFilter, onChange, showCompletedFirst, onToggleSort, search, onSearch }: FilterBarProps) {
  const handleAllClick = () => onChange("all");
  const handleActiveClick = () => onChange("active");
  const handleDoneClick = () => onChange("done");

  return (
    <>
      <div className="filterBar">
        <div className="left-buttons">
          <button className={activeFilter === "all" ? "active" : ""} onClick={handleAllClick}>
            All
          </button>
          <button className={activeFilter === "active" ? "active" : ""} onClick={handleActiveClick}>
            Active
          </button>
          <button className={activeFilter === "done" ? "active" : ""} onClick={handleDoneClick}>
            Done
          </button>
        </div>
        <div className="sortWrapper">
          <label htmlFor="showCompletedFirst">Done first</label>
          <input type="checkbox" id="showCompletedFirst" checked={showCompletedFirst} onChange={onToggleSort} />
        </div>
      </div>
      <div className="search-row">
        <CiSearch className="searchIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search todo by title"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </>
  );
}

export default FilterBar;
